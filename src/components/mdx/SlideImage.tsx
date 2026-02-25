import type { ComponentPropsWithoutRef } from "react";

export function SlideImage(props: ComponentPropsWithoutRef<"img">) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      data-growable=""
      className="rounded-xl object-contain"
      style={{ margin: "var(--slide-space-sm) 0" }}
      alt={props.alt ?? ""}
      {...props}
    />
  );
}
