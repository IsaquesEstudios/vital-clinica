import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "petroleum" | "champagne" | "terracotta" | "neutral";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "petroleum", ...props }, ref) => (
    <span ref={ref} className={cx("vc-badge", `vc-badge--${variant}`, className)} {...props} />
  ),
);
Badge.displayName = "Badge";