"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — slides children in as they enter the viewport, and back out as
 * they leave, so animations replay every time you scroll past.
 *
 * Props:
 *   variant: "up" | "fade" | "left" | "right" | "zoom" (default: "up")
 *   delay:   ms before the transition starts (default: 0)
 *   as:      element tag (default: "div")
 *   once:    if true, only animate the first time it enters view (default: false)
 */
const OFFSET_BY_VARIANT = {
  up: "translateY(80px)",
  left: "translateX(-90px)",
  right: "translateX(90px)",
  zoom: "scale(0.82)",
  fade: "none",
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  once = false,
  as: Tag = "div",
  className = "",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If element is already in the viewport on mount, reveal immediately
    // on the next frame so the transition fires from the hidden state.
    const rect = node.getBoundingClientRect();
    const inViewNow =
      rect.top <
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0;
    if (inViewNow) {
      const raf = requestAnimationFrame(() => setVisible(true));
      if (once) return () => cancelAnimationFrame(raf);
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const hiddenTransform = OFFSET_BY_VARIANT[variant] || OFFSET_BY_VARIANT.up;

  const mergedStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0) scale(1)" : hiddenTransform,
    transition: `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <Tag ref={ref} className={className} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
