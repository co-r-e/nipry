import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "filled" | "outlined";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    background: "var(--slide-surface)",
    border: "1px solid var(--slide-border)",
  },
  filled: {
    background: "var(--slide-primary)",
    color: "#FFFFFF",
  },
  outlined: {
    background: "transparent",
    border: "2px solid var(--slide-border)",
  },
};

export function Card({
  children,
  variant = "default",
  padding = "var(--slide-space-lg)",
  className,
  style,
}: CardProps) {
  return (
    <div
      className={cn("flex flex-col", className)}
      style={{
        borderRadius: "var(--slide-radius)",
        padding,
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </div>
  );
}
