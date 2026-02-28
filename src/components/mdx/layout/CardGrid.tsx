import type { ReactNode } from "react";
import styles from "./CardGrid.module.css";

interface CardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  gap?: string;
}

export function CardGrid({ children, columns = 3, gap }: CardGridProps) {
  return (
    <div
      data-growable=""
      className={styles.grid}
      style={{
        "--columns": columns,
        ...(gap ? { gap } : {}),
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
