import type { ComponentPropsWithoutRef } from "react";
import styles from "./Headings.module.css";

export function SlideH1(props: ComponentPropsWithoutRef<"h1">) {
  return <h1 className={styles.h1} {...props} />;
}

export function SlideH2(props: ComponentPropsWithoutRef<"h2">) {
  return <h2 className={styles.h2} {...props} />;
}

export function SlideH3(props: ComponentPropsWithoutRef<"h3">) {
  return <h3 className={styles.h3} {...props} />;
}
