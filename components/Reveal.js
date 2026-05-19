/**
 * Reveal — entrance animation wrapper that uses inline styles so
 * nothing in the CSS pipeline can suppress it.
 *
 * Props:
 *   variant: "up" | "fade" | "left" | "right" | "zoom" (default: "up")
 *   delay:   ms before the animation starts (default: 0)
 *   as:      element tag (default: "div")
 */
const NAME_BY_VARIANT = {
  up: "revealUp",
  left: "revealLeft",
  right: "revealRight",
  zoom: "revealZoom",
  fade: "revealFade",
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  style = {},
  ...rest
}) {
  const animationName = NAME_BY_VARIANT[variant] || NAME_BY_VARIANT.up;

  const mergedStyle = {
    animationName,
    animationDuration: "1s",
    animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    animationFillMode: "both",
    animationDelay: `${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <Tag className={className} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
