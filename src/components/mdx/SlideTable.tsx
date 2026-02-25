import type { ComponentPropsWithoutRef } from "react";

export function SlideTable(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div
      data-growable=""
      className="overflow-x-auto rounded-xl"
      style={{ border: "1px solid var(--slide-border)", margin: "var(--slide-space-sm) 0" }}
    >
      <table className="w-full border-collapse text-[1.75rem]" {...props} />
    </div>
  );
}

export function SlideTh(props: ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className="px-8 py-5 text-left text-[1.5rem] font-semibold uppercase tracking-wider"
      style={{
        background: "var(--slide-surface)",
        color: "var(--slide-text-muted)",
        borderBottom: "2px solid var(--slide-border)",
      }}
      {...props}
    />
  );
}

export function SlideTd(props: ComponentPropsWithoutRef<"td">) {
  return (
    <td
      className="px-8 py-5"
      style={{
        borderBottom: "1px solid var(--slide-border-light)",
        color: "var(--slide-text)",
      }}
      {...props}
    />
  );
}
