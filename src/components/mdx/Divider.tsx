import styles from "./Divider.module.css";

interface DividerProps {
  width?: number;
  color?: string;
}

export function Divider({ width = 120, color }: DividerProps) {
  return (
    <div
      className={styles.divider}
      style={{
        width,
        ...(color ? { background: color } : {}),
      }}
    />
  );
}
