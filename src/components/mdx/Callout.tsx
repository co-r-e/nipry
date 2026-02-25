import type { ReactNode } from "react";

interface CalloutProps {
  title?: string;
  children: ReactNode;
}

export function Callout({ title, children }: CalloutProps) {
  return (
    <div
      className="rounded-lg"
      style={{
        background: "var(--slide-surface)",
        padding: "var(--slide-space-lg)",
        margin: "var(--slide-space-sm) 0",
      }}
    >
      {title && (
        <p
          className="text-[2rem] font-bold"
          style={{ color: "var(--slide-text)", marginBottom: "var(--slide-space-xs)" }}
        >
          {title}
        </p>
      )}
      <div
        className="text-[1.8rem]"
        style={{ color: "var(--slide-text-muted)", lineHeight: "var(--slide-body-leading)" }}
      >
        {children}
      </div>
    </div>
  );
}
