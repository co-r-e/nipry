import type { ComponentPropsWithoutRef } from "react";
import styles from "./Blockquote.module.css";

export function SlideBlockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return <blockquote className={styles.blockquote} {...props} />;
}
