import type { ReactNode } from "react";
import styles from "./Center.module.css";

interface CenterProps {
  children: ReactNode;
  gap?: string;
}

export function Center({ children, gap }: CenterProps) {
  return (
    <div
      data-growable=""
      className={styles.center}
      style={gap ? { gap } : undefined}
    >
      {children}
    </div>
  );
}
