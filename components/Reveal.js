/**
 * Reveal — applies a pure-CSS entrance animation to children.
 *
 * Pure CSS (no JS / no IntersectionObserver) so it works during SSR and
 * cannot be broken by hydration issues.
 *
 * Props:
 *   variant: "up" | "fade" | "left" | "right" | "zoom" (default: "up")
 *   delay:   ms before the animation starts (default: 0)
 *   as:      element tag (default: "div")
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  style = {},
  ...rest
}) {
  const cls = ["reveal", `reveal-${variant}`, className].filter(Boolean).join(" ");
  const mergedStyle =
    delay > 0 ? { animationDelay: `${delay}ms`, ...style } : style;

  return (
    <Tag className={cls} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
