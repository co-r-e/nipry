import type { ReactNode } from "react";
import styles from "./Callout.module.css";

interface CalloutProps {
  title?: string;
  children: ReactNode;
}

export function Callout({ title, children }: CalloutProps) {
  return (
    <div className={styles.callout}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
