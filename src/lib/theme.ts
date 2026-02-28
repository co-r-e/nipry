import type { DeckTheme } from "@/types/deck";

export const DEFAULT_SLIDE_THEME: Required<DeckTheme> = {
    colors: {
        primary: "#000000",
        secondary: "#000000",
        accent: "#000000",
        background: "#FFFFFF",
        text: "#1a1a1a",
        textMuted: "#6b7280",
        textSubtle: "#9ca3af",
        surface: "#f8f9fa",
        surfaceAlt: "#f0f2f5",
        border: "#e5e7eb",
        borderLight: "#f3f4f6",
    },
    fonts: {
        heading: "Inter, sans-serif",
        body: "Noto Sans JP, sans-serif",
        mono: "Fira Code, monospace",
        headingWeight: 700,
        headingLetterSpacing: "-0.025em",
        bodyLineHeight: 1.7,
    },
    spacing: {
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
        xl: 48,
        xxl: 64,
    },
    radius: "1rem",
};

export function createThemeVariables(
    theme: DeckTheme,
    backgroundOverride?: string
): React.CSSProperties {
    const colors = { ...DEFAULT_SLIDE_THEME.colors, ...theme.colors };
    const fonts = { ...DEFAULT_SLIDE_THEME.fonts, ...theme.fonts };
    const spacing = { ...DEFAULT_SLIDE_THEME.spacing, ...theme.spacing };
    const radius = theme.radius ?? DEFAULT_SLIDE_THEME.radius;

    return {
        "--slide-primary": colors.primary,
        "--slide-secondary": colors.secondary ?? colors.primary,
        "--slide-accent": colors.accent ?? colors.primary,
        "--slide-heading-gradient": colors.headingGradient ?? colors.primary,
        "--slide-bg": backgroundOverride ?? colors.background,
        "--slide-text": colors.text,
        "--slide-text-muted": colors.textMuted,
        "--slide-text-subtle": colors.textSubtle,
        "--slide-surface": colors.surface,
        "--slide-surface-alt": colors.surfaceAlt,
        "--slide-border": colors.border,
        "--slide-border-light": colors.borderLight,
        "--slide-font-heading": fonts.heading,
        "--slide-font-body": fonts.body,
        "--slide-font-mono": fonts.mono,
        "--slide-heading-weight": String(fonts.headingWeight),
        "--slide-heading-tracking": fonts.headingLetterSpacing,
        "--slide-body-leading": String(fonts.bodyLineHeight),
        "--slide-radius": radius,
        "--slide-space-xs": `${spacing.xs}px`,
        "--slide-space-sm": `${spacing.sm}px`,
        "--slide-space-md": `${spacing.md}px`,
        "--slide-space-lg": `${spacing.lg}px`,
        "--slide-space-xl": `${spacing.xl}px`,
        "--slide-space-xxl": `${spacing.xxl}px`,
    } as React.CSSProperties;
}
