import type { ReactNode } from "react";
import styles from "./Columns.module.css";

interface ColumnsProps {
  children: ReactNode;
  gap?: string;
}

export function Columns({ children, gap }: ColumnsProps) {
  return (
    <div data-growable="" className={styles.columns} style={gap ? { gap } : undefined}>
      {children}
    </div>
  );
}

interface ColumnProps {
  children: ReactNode;
  width?: string;
}

export function Column({ children, width }: ColumnProps) {
  return (
    <div
      data-column=""
      className={styles.column}
      style={width ? { flex: `0 0 ${width}` } : undefined}
    >
      {children}
    </div>
  );
}
