import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hoverable?: boolean;
};

export function Card({
  hoverable = false,
  className = "",
  ...props
}: CardProps) {
  const hoverClasses = hoverable
    ? "transition-colors hover:border-cream-muted"
    : "";

  return (
    <div
      className={`rounded-card border-navy-border bg-navy-card shadow-navy/20 border p-5 shadow-sm ${hoverClasses} ${className}`}
      {...props}
    />
  );
}
