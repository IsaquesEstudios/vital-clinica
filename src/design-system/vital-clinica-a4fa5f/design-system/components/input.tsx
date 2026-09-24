import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cx } from "../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, id, "aria-describedby": describedBy, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const messageId = `${inputId}-message`;

    return (
      <label className={cx("vc-field", className)} htmlFor={inputId}>
        <span className="vc-field__label">{label}</span>
        <input
          ref={ref}
          id={inputId}
          className={cx("vc-input", error && "vc-input--error")}
          aria-invalid={error ? true : undefined}
          aria-describedby={error || hint ? messageId : describedBy}
          {...props}
        />
        {error || hint ? (
          <span id={messageId} className={cx("vc-field__message", error && "vc-field__message--error")}>
            {error ?? hint}
          </span>
        ) : null}
      </label>
    );
  },
);

Input.displayName = "Input";