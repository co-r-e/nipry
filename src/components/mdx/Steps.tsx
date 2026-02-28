import type { ReactNode } from "react";
import styles from "./Steps.module.css";

interface StepsProps {
  children: ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div data-growable="" className={styles.steps}>
      {children}
    </div>
  );
}

interface StepProps {
  number: number;
  title: string;
  children?: ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.number}>
        {number}
      </div>
      <h3 className={styles.title}>
        {title}
      </h3>
      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
}
