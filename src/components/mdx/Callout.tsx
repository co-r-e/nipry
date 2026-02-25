"use client";

import type { ReactNode } from "react";
import { Icon } from "./Icon";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error" | "tip";
  title?: string;
  children: ReactNode;
}

const CONFIG = {
  info: { icon: "info", bg: "#eff6ff", border: "#3b82f6", text: "#1e40af" },
  warning: { icon: "alert-triangle", bg: "#fffbeb", border: "#f59e0b", text: "#92400e" },
  success: { icon: "check-circle", bg: "#f0fdf4", border: "#22c55e", text: "#166534" },
  error: { icon: "x-circle", bg: "#fef2f2", border: "#ef4444", text: "#991b1b" },
  tip: { icon: "lightbulb", bg: "#fefce8", border: "#eab308", text: "#854d0e" },
} as const;

export function Callout({ type = "info", title, children }: CalloutProps) {
  const cfg = CONFIG[type];

  return (
    <div
      className="my-6 rounded-lg p-8"
      style={{
        background: cfg.bg,
      }}
    >
      <div className="mb-3 flex items-center gap-4">
        <Icon name={cfg.icon} size={32} color={cfg.border} />
        {title && (
          <span className="text-[1.6rem] font-bold" style={{ color: cfg.text }}>
            {title}
          </span>
        )}
      </div>
      <div
        className="text-[1.5rem]"
        style={{ color: cfg.text, lineHeight: "1.7" }}
      >
        {children}
      </div>
    </div>
  );
}
