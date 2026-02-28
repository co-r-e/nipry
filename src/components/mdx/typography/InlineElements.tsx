import type { ComponentPropsWithoutRef } from "react";
import styles from "./InlineElements.module.css";

export function SlideHr(props: ComponentPropsWithoutRef<"hr">) {
  return <hr className={styles.hr} {...props} />;
}

export function SlideAnchor(props: ComponentPropsWithoutRef<"a">) {
  return <a className={styles.a} {...props} />;
}
