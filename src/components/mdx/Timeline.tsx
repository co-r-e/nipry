import type { ReactNode } from "react";

// Shared constants so the line and dots are always centered on the same axis
const TRACK_CENTER = 14; // px from container left edge
const DOT_DIAMETER = 14; // px
const LINE_WIDTH = 3; // px
const CONTENT_LEFT = 36; // px from container left edge to content

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div
      data-growable=""
      className="relative flex flex-1 flex-col justify-center gap-6"
      style={{ paddingLeft: CONTENT_LEFT }}
    >
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: TRACK_CENTER - LINE_WIDTH / 2,
          width: LINE_WIDTH,
          background: "var(--slide-primary)",
          borderRadius: LINE_WIDTH,
        }}
      />
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
        className="absolute rounded-full"
        style={{
          left: TRACK_CENTER - DOT_DIAMETER / 2 - CONTENT_LEFT,
          top: 2,
          width: DOT_DIAMETER,
          height: DOT_DIAMETER,
          background: dotColor,
        }}
      />
      <p
        className="mb-1 text-[1.6rem] font-bold"
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
          className="text-[1.8rem]"
          style={{ color: "var(--slide-text-muted)", lineHeight: "1.6" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
