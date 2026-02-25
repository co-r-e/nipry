interface DividerProps {
  width?: number;
  color?: string;
}

export function Divider({ width = 120, color }: DividerProps) {
  return (
    <div
      className="h-1 rounded-full"
      style={{
        width,
        background: color ?? "var(--slide-primary)",
      }}
    />
  );
}
