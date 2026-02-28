import type { ComponentPropsWithoutRef } from "react";
import styles from "./Media.module.css";

export function SlideImage(props: ComponentPropsWithoutRef<"img">) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      data-growable=""
      className={styles.image}
      alt={props.alt ?? ""}
      {...props}
    />
  );
}
