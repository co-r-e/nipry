import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Badge.module.css";

type BadgeVariant = "primary" | "secondary" | "accent" | "muted";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[variant])}>
      {children}
    </span>
  );
}
