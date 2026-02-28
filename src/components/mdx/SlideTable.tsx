import type { ComponentPropsWithoutRef } from "react";
import styles from "./SlideTable.module.css";

export function SlideTable(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div data-growable="" className={styles.container}>
      <table className={styles.table} {...props} />
    </div>
  );
}

export function SlideTh(props: ComponentPropsWithoutRef<"th">) {
  return <th className={styles.th} {...props} />;
}

export function SlideTd(props: ComponentPropsWithoutRef<"td">) {
  return <td className={styles.td} {...props} />;
}
