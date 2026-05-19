"use client";

import { useEffect } from "react";

/**
 * RevealInit — runs once on the client and triggers entrance animations
 * for any element with the `.reveal` class as it scrolls into view.
 *
 * Strategy:
 *   1. Add `js-on` class to <html> so CSS knows JS is active and can hide
 *      `.reveal` elements until they're triggered.
 *   2. Use IntersectionObserver to add `.is-visible` to each `.reveal`
 *      element when it enters the viewport.
 *   3. Safety net — anything still hidden after 4s is force-revealed.
 */
export default function RevealInit() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-on");

    // Reduced motion: just reveal everything immediately.
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const els = document.querySelectorAll(".reveal");

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => {
      // If element is already on screen at mount, animate it in immediately.
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top <
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0;

      if (inView) {
        // Next frame so the transition fires.
        requestAnimationFrame(() => el.classList.add("is-visible"));
      } else {
        observer.observe(el);
      }
    });

    // Safety net: anything still hidden after 4s gets revealed.
    const fallback = window.setTimeout(() => {
      document
        .querySelectorAll(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
