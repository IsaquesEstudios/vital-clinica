import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cx } from "../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "quiet";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading = false, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={cx("vc-button", `vc-button--${variant}`, `vc-button--${size}`, className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="vc-spinner" aria-hidden="true" /> : null}
      <span>{children}</span>
    </button>
  ),
);

Button.displayName = "Button";