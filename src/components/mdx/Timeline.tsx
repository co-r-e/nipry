import type { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div
      className="relative mt-8 flex flex-1 flex-col justify-center gap-10 pl-16"
      style={{ borderLeft: "4px solid var(--slide-primary)" }}
    >
      {children}
    </div>
  );
}

interface TimelineItemProps {
  date: string;
  title: string;
  children?: ReactNode;
  color?: string;
  active?: boolean;
}

export function TimelineItem({
  date,
  title,
  children,
  color,
  active,
}: TimelineItemProps) {
  const dotColor =
    color ?? (active ? "var(--slide-accent)" : "var(--slide-primary)");

  return (
    <div className="relative">
      <div
        className="absolute top-1 h-7 w-7 rounded-full"
        style={{
          left: "calc(-1rem - 18px)",
          background: dotColor,
        }}
      />
      <p
        className="mb-1 text-[1.4rem] font-bold"
        style={{ color: dotColor }}
      >
        {date}
      </p>
      <p
        className="mb-1 text-[1.8rem] font-bold"
        style={{ color: "var(--slide-text)" }}
      >
        {title}
      </p>
      {children && (
        <div
          className="text-[1.5rem]"
          style={{ color: "var(--slide-text-muted)", lineHeight: "1.6" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
