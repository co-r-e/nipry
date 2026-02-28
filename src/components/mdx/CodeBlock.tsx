import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./CodeBlock.module.css";

export function SlideCode(props: ComponentPropsWithoutRef<"code">) {
  return <code className={styles.code} {...props} />;
}

export function SlidePreCode(props: ComponentPropsWithoutRef<"pre">) {
  return (
    <div data-growable="" className={styles.preContainer}>
      {/* Terminal title bar */}
      <div className={styles.terminalBar}>
        <div className={styles.terminalDots}>
          <div className={cn(styles.dot, styles.dotRed)} />
          <div className={cn(styles.dot, styles.dotYellow)} />
          <div className={cn(styles.dot, styles.dotGreen)} />
        </div>
        <span className={styles.terminalTitle}>Terminal</span>
      </div>
      {/* Code area */}
      <pre className={styles.pre} {...props} />
    </div>
  );
}
