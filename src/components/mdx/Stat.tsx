interface StatProps {
  value: string;
  label: string;
  trend?: "up" | "down";
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: { value: "text-[2.5rem]", label: "text-[1.8rem]" },
  md: { value: "text-[3.2rem]", label: "text-[1.8rem]" },
  lg: { value: "text-[5rem]", label: "text-[2rem]" },
};

const trendIndicator: Record<string, string> = {
  up: "\u2191 ",
  down: "\u2193 ",
};

export function Stat({ value, label, trend, size = "md" }: StatProps) {
  const s = sizeConfig[size];

  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{
        padding: "var(--slide-space-lg)",
        background: "var(--slide-surface)",
        borderRadius: "var(--slide-radius)",
      }}
    >
      <p
        className={`${s.value} mb-1 font-bold leading-none`}
        style={{ color: "var(--slide-primary)" }}
      >
        {trend && trendIndicator[trend]}
        {value}
      </p>
      <p
        className={s.label}
        style={{ color: "var(--slide-text-muted)" }}
      >
        {label}
      </p>
    </div>
  );
}
