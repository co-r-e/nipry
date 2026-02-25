import type { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  gap?: string;
}

export function CardGrid({ children, columns = 3, gap = "var(--slide-space-lg)" }: CardGridProps) {
  return (
    <div
      data-growable=""
      className="flex-1"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        alignContent: "center",
        marginTop: "var(--slide-space-sm)",
      }}
    >
      {children}
    </div>
  );
}
