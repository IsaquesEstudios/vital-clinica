import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/utils";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: "elevated" | "outlined" | "accent";
}

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ className, variant = "elevated", ...props }, ref) => (
    <article ref={ref} className={cx("vc-card", `vc-card--${variant}`, className)} {...props} />
  ),
);
Card.displayName = "Card";

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {}
export const CardMedia = forwardRef<HTMLDivElement, CardMediaProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("vc-card__media", className)} {...props} />
));
CardMedia.displayName = "CardMedia";

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("vc-card__header", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cx("vc-card__title", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("vc-card__content", className)} {...props} />
));
CardContent.displayName = "CardContent";

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("vc-card__footer", className)} {...props} />
));
CardFooter.displayName = "CardFooter";