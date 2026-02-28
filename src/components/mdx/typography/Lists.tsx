import type { ComponentPropsWithoutRef } from "react";
import styles from "./Lists.module.css";

export function SlideUl(props: ComponentPropsWithoutRef<"ul">) {
  return <ul className={styles.ul} {...props} />;
}

export function SlideOl(props: ComponentPropsWithoutRef<"ol">) {
  return <ol className={styles.ol} {...props} />;
}

export function SlideLi(props: ComponentPropsWithoutRef<"li">) {
  return <li className={styles.li} {...props} />;
}
