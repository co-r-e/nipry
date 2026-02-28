import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./TaggedCard.module.css";

interface TaggedCardProps {
  children: ReactNode;
  tag: string;
  tagColor?: "default" | "primary" | "muted";
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
}

const tagColorMap: Record<string, string> = {
  default: styles.tagDefault,
  primary: styles.tagPrimary,
  muted: styles.tagMuted,
};

export function TaggedCard({
  children,
  tag,
  tagColor = "default",
  padding,
  className,
  style,
}: TaggedCardProps) {
  return (
    <div
      className={cn(styles.card, className)}
      style={{
        ...(padding ? { padding } : {}),
        ...style,
      }}
    >
      <span className={cn(styles.tag, tagColorMap[tagColor])}>
        {tag}
      </span>
      {children}
    </div>
  );
}
