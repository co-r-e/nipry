import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Card.module.css";

type CardVariant = "default" | "filled" | "outlined";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({
  children,
  variant = "default",
  padding,
  className,
  style,
}: CardProps) {
  return (
    <div
      className={cn(styles.card, styles[variant], className)}
      style={{
        ...(padding ? { padding } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
