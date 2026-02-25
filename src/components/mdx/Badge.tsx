import type { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "accent" | "muted";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  primary: { background: "var(--slide-primary)", color: "#fff" },
  secondary: { background: "var(--slide-secondary)", color: "#fff" },
  accent: { background: "var(--slide-accent)", color: "#fff" },
  muted: { background: "var(--slide-surface-alt)", color: "var(--slide-text-muted)" },
};

export function Badge({ children, variant = "primary" }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[1.2rem] font-semibold"
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
}
