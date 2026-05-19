"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Carousel.module.css";

const DEFAULT_SLIDES = [
  {
    image: "/images/Red-face-bricks.png",
    eyebrow: "Banmark Bricks · Harare",
    title: "Quality Bricks You Can Trust",
    subtitle:
      "Durable face bricks, loadbearing bricks and common bricks for every project.",
    ctaLabel: "View Products",
    ctaHref: "/products",
  },
  {
    image: "/images/Plum-rustic.png",
    eyebrow: "Premium Face Bricks",
    title: "Plum Rustic & Botswana Face",
    subtitle:
      "Beautiful finishes for boundary walls, feature walls and homes.",
    ctaLabel: "Explore Bricks",
    ctaHref: "/products",
  },
  {
    image: "/images/river-sand.jpeg",
    eyebrow: "Sand · Stones · Gravel",
    title: "All Your Building Materials",
    subtitle:
      "Pit sand, river sand, 3/4 stones and gravel — supplied across Harare.",
    ctaLabel: "Get a Quote",
    ctaHref: "/contact",
  },
  {
    image: "/images/gravel.png",
    eyebrow: "Reliable Supply",
    title: "Affordable. Durable. Always In Stock.",
    subtitle:
      "Call us today for fast quotes and dependable delivery in Harare.",
    ctaLabel: "Call Now",
    ctaHref: "tel:0778933858",
  },
];

const AUTOPLAY_MS = 5000;

export default function Carousel({ slides = DEFAULT_SLIDES }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const go = useCallback(
    (i) => setIndex((i + slides.length) % slides.length),
    [slides.length]
  );
  const next = useCallback(() => go(index + 1), [index, go]);
  const prev = useCallback(() => go(index - 1), [index, go]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Banmark Bricks featured banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.track}>
        {slides.map((slide, i) => (
          <div
            key={slide.image + i}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.contentWrap}>
              <div className={styles.content}>
                {slide.eyebrow && (
                  <span className={styles.eyebrow}>{slide.eyebrow}</span>
                )}
                <h2 className={styles.title}>{slide.title}</h2>
                {slide.subtitle && (
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                )}
                {slide.ctaLabel && slide.ctaHref && (
                  slide.ctaHref.startsWith("tel:") ? (
                    <a href={slide.ctaHref} className="btn btn-primary">
                      {slide.ctaLabel}
                    </a>
                  ) : (
                    <Link href={slide.ctaHref} className="btn btn-primary">
                      {slide.ctaLabel}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        aria-label="Previous slide"
        onClick={prev}
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        aria-label="Next slide"
        onClick={next}
      >
        ›
      </button>

      <div className={styles.dots} role="tablist" aria-label="Carousel slides">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
