import type { ComponentPropsWithoutRef } from "react";

export function SlideHr(_props: ComponentPropsWithoutRef<"hr">) {
  return (
    <hr
      className="border-t-2"
      style={{ borderColor: "var(--slide-border)", margin: "var(--slide-space-sm) 0" }}
    />
  );
}

export function SlideAnchor(props: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className="text-[2rem] underline decoration-2 underline-offset-4"
      style={{ color: "var(--slide-primary)" }}
      {...props}
    />
  );
}
