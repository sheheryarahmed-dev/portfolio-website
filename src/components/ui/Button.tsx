import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  loading?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border border-coral bg-coral text-navy hover:brightness-110",
  secondary:
    "border border-navy-card bg-navy-card text-cream hover:border-navy-border hover:bg-navy-secondary",
  outline:
    "border border-navy-border bg-transparent text-cream hover:border-cream-muted hover:bg-navy-secondary",
};

export function Button({
  variant = "primary",
  icon,
  loading = false,
  disabled,
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`focus-visible:outline-coral inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      ) : (
        icon && (
          <span aria-hidden="true" className="inline-flex">
            {icon}
          </span>
        )
      )}
      {children}
    </button>
  );
}
