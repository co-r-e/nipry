import type { ReactNode } from "react";

interface StepsProps {
  children: ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div
      data-growable=""
      className="flex flex-1 items-center gap-10"
      style={{ marginTop: "var(--slide-space-sm)" }}
    >
      {children}
    </div>
  );
}

interface StepProps {
  number: number;
  title: string;
  children?: ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div
      className="flex flex-1 flex-col items-center text-center"
      style={{
        background: "var(--slide-surface)",
        borderRadius: "var(--slide-radius)",
        padding: "var(--slide-space-xl) var(--slide-space-lg)",
      }}
    >
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full text-[2.5rem] font-bold text-white"
        style={{ background: "var(--slide-primary)" }}
      >
        {number}
      </div>
      <h3
        className="mt-5 text-[2rem] font-bold"
        style={{ color: "var(--slide-text)" }}
      >
        {title}
      </h3>
      {children && (
        <div
          className="mt-3 text-[1.8rem]"
          style={{ color: "var(--slide-text-muted)", lineHeight: "1.6" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
