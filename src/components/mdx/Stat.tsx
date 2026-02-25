"use client";

import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface StatProps {
  value: string;
  label: string;
  icon?: string;
  trend?: "up" | "down";
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: { value: "text-[2.5rem]", label: "text-[1.3rem]", icon: 40 },
  md: { value: "text-[3.2rem]", label: "text-[1.5rem]", icon: 48 },
  lg: { value: "text-[5rem]", label: "text-[2rem]", icon: 64 },
};

const trendIndicator: Record<string, string> = {
  up: "↑ ",
  down: "↓ ",
};

export function Stat({ value, label, icon, trend, size = "md" }: StatProps) {
  const sizeStyles = sizeConfig[size];

  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{
        padding: "var(--slide-space-lg)",
        background: "var(--slide-surface)",
        borderRadius: "var(--slide-radius)",
      }}
    >
      {icon && (
        <span style={{ color: "var(--slide-primary)" }}>
          <Icon name={icon} size={sizeStyles.icon} />
        </span>
      )}
      <p
        className={cn(sizeStyles.value, "mt-3 mb-1 font-bold leading-none")}
        style={{ color: "var(--slide-primary)" }}
      >
        {trend && trendIndicator[trend]}
        {value}
      </p>
      <p
        className={sizeStyles.label}
        style={{ color: "var(--slide-text-muted)" }}
      >
        {label}
      </p>
    </div>
  );
}
