import type { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
  gap?: string;
}

export function Center({ children, gap = "var(--slide-space-lg)" }: CenterProps) {
  return (
    <div
      data-growable=""
      className="flex flex-1 flex-col items-center justify-center text-center"
      style={{ gap }}
    >
      {children}
    </div>
  );
}
