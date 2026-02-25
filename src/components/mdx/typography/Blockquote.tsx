import type { ComponentPropsWithoutRef } from "react";

export function SlideBlockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="rounded-r-lg py-6 pl-8 pr-6 text-[2rem] italic"
      style={{
        borderLeft: "5px solid var(--slide-primary)",
        background: "var(--slide-surface)",
        color: "var(--slide-text-muted)",
        lineHeight: "var(--slide-body-leading)",
        margin: "var(--slide-space-sm) 0",
      }}
      {...props}
    />
  );
}
