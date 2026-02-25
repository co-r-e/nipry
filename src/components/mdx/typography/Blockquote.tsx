import type { ComponentPropsWithoutRef } from "react";

export function SlideBlockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="rounded-lg py-6 px-8 text-[2rem] italic"
      style={{
        background: "var(--slide-surface)",
        color: "var(--slide-text-muted)",
        lineHeight: "var(--slide-body-leading)",
        margin: "var(--slide-space-sm) 0",
      }}
      {...props}
    />
  );
}
