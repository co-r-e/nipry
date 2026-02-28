import { cn } from "@/lib/utils";
import styles from "./Stat.module.css";

interface StatProps {
  value: string;
  label: string;
  trend?: "up" | "down";
  size?: "sm" | "md" | "lg";
}

const trendIndicator: Record<string, string> = {
  up: "\u2191 ",
  down: "\u2193 ",
};

export function Stat({ value, label, trend, size = "md" }: StatProps) {
  return (
    <div className={styles.stat}>
      <p className={cn(styles.value, styles[`${size}Value`])}>
        {trend && trendIndicator[trend]}
        {value}
      </p>
      <p className={cn(styles.label, styles[`${size}Label`])}>
        {label}
      </p>
    </div>
  );
}
