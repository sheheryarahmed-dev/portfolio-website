import type { HTMLAttributes } from "react";

type ChipProps = HTMLAttributes<HTMLSpanElement>;

export function Chip({ className = "", ...props }: ChipProps) {
  return (
    <span
      className={`border-navy-border bg-navy-secondary text-cream-muted inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}
      {...props}
    />
  );
}
