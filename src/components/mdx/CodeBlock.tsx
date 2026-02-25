import type { ComponentPropsWithoutRef } from "react";

export function SlideCode(props: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      className="rounded-md px-3 py-1.5 text-[1.75rem] font-semibold"
      style={{
        background: "var(--slide-surface-alt)",
        fontFamily: "var(--slide-font-mono)",
        color: "var(--slide-accent)",
      }}
      {...props}
    />
  );
}

export function SlidePreCode(props: ComponentPropsWithoutRef<"pre">) {
  return (
    <div data-growable="" className="flex flex-col overflow-hidden rounded-xl" style={{ border: "1px solid #3a3a4a", margin: "var(--slide-space-sm) 0" }}>
      {/* Terminal title bar */}
      <div
        className="flex items-center gap-3 px-5 py-3"
        style={{ background: "#2b2b3b" }}
      >
        <div className="flex gap-2">
          <div className="h-[14px] w-[14px] rounded-full" style={{ background: "#ff5f57" }} />
          <div className="h-[14px] w-[14px] rounded-full" style={{ background: "#febc2e" }} />
          <div className="h-[14px] w-[14px] rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span
          className="ml-2 text-[1.1rem]"
          style={{ color: "#6c6c80", fontFamily: "var(--slide-font-mono)" }}
        >
          Terminal
        </span>
      </div>
      {/* Code area */}
      <pre
        className="flex-1 overflow-x-auto px-8 py-7 text-[1.75rem] leading-snug"
        style={{
          background: "#1c1c1c",
          color: "#ffffff",
          fontFamily: "var(--slide-font-mono)",
          margin: 0,
        }}
        {...props}
      />
    </div>
  );
}
