import type { ReactNode } from "react";

interface ColumnsProps {
  children: ReactNode;
  gap?: string;
}

export function Columns({ children, gap = "var(--slide-space-lg)" }: ColumnsProps) {
  return (
    <div data-growable="" className="flex h-full w-full" style={{ gap }}>
      {children}
    </div>
  );
}

interface ColumnProps {
  children: ReactNode;
  width?: string;
}

export function Column({ children, width }: ColumnProps) {
  return (
    <div data-column="" className="flex-1" style={width ? { flex: `0 0 ${width}` } : undefined}>
      {children}
    </div>
  );
}
