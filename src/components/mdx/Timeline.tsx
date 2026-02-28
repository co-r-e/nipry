import type { ReactNode } from "react";
import styles from "./Timeline.module.css";

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div data-growable="" className={styles.timeline}>
      <div className={styles.track} />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  date: string;
  title: string;
  children?: ReactNode;
  color?: string;
  active?: boolean;
}

export function TimelineItem({
  date,
  title,
  children,
  color,
  active,
}: TimelineItemProps) {
  const dotColor = color ?? (active ? "var(--slide-accent)" : "var(--slide-primary)");

  return (
    <div className={styles.item}>
      <div
        className={styles.dot}
        style={{ background: dotColor }}
      />
      <p className={styles.date} style={{ color: dotColor }}>
        {date}
      </p>
      <p className={styles.title}>
        {title}
      </p>
      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
}
