"use client";

import { MDXRenderer } from "@/lib/mdx-runtime";
import type { SlideData, SlideType, DeckConfig } from "@/types/deck";
import { slideComponents } from "@/components/mdx";

/** Slide types that already handle their own vertical centering in SlideFrame. */
const SELF_CENTERED_TYPES: ReadonlySet<SlideType> = new Set([
  "cover",
  "ending",
  "section",
  "quote",
  "image-full",
]);

interface SlideContentProps {
  slide: SlideData;
  config: DeckConfig;
  deckName: string;
}

/** Replace relative `./assets/` references with the deck's API asset path. */
function resolveAssetPaths(rawContent: string, deckName: string): string {
  const apiBase = `/api/decks/${encodeURIComponent(deckName)}/assets/`;
  return rawContent
    .replace(/\(\.\/assets\//g, `(${apiBase}`)
    .replace(/"\.\/assets\//g, `"${apiBase}`)
    .replace(/'\.\/assets\//g, `'${apiBase}`);
}

function buildThemeStyle(
  slide: SlideData,
  config: DeckConfig,
): React.CSSProperties {
  const { colors, fonts, spacing, radius } = config.theme;

  return {
    "--slide-primary": colors.primary,
    "--slide-secondary": colors.secondary ?? colors.primary,
    "--slide-accent": colors.accent ?? colors.primary,
    "--slide-bg":
      slide.frontmatter.background ?? colors.background ?? "#FFFFFF",
    "--slide-text": colors.text ?? "#1a1a1a",
    "--slide-text-muted": colors.textMuted ?? "#6b7280",
    "--slide-text-subtle": colors.textSubtle ?? "#9ca3af",
    "--slide-surface": colors.surface ?? "#f8f9fa",
    "--slide-surface-alt": colors.surfaceAlt ?? "#f0f2f5",
    "--slide-border": colors.border ?? "#e5e7eb",
    "--slide-border-light": colors.borderLight ?? "#f3f4f6",
    "--slide-font-heading": fonts?.heading ?? "Inter, sans-serif",
    "--slide-font-body": fonts?.body ?? "Noto Sans JP, sans-serif",
    "--slide-font-mono": fonts?.mono ?? "Fira Code, monospace",
    "--slide-heading-weight": String(fonts?.headingWeight ?? 700),
    "--slide-heading-tracking": fonts?.headingLetterSpacing ?? "-0.025em",
    "--slide-body-leading": String(fonts?.bodyLineHeight ?? 1.7),
    "--slide-radius": radius ?? "1rem",
    "--slide-space-xs": `${spacing?.xs ?? 8}px`,
    "--slide-space-sm": `${spacing?.sm ?? 16}px`,
    "--slide-space-md": `${spacing?.md ?? 24}px`,
    "--slide-space-lg": `${spacing?.lg ?? 32}px`,
    "--slide-space-xl": `${spacing?.xl ?? 48}px`,
    "--slide-space-xxl": `${spacing?.xxl ?? 64}px`,
  } as React.CSSProperties;
}

export function SlideContent({
  slide,
  config,
  deckName,
}: SlideContentProps): React.JSX.Element {
  const themeStyle = buildThemeStyle(slide, config);

  const { type, verticalAlign } = slide.frontmatter;
  const shouldCenter =
    verticalAlign === "center" ||
    (verticalAlign !== "top" && !SELF_CENTERED_TYPES.has(type));

  return (
    <div
      data-slide-content=""
      data-vertical-align={shouldCenter ? "center" : undefined}
      className="w-full flex-1 min-h-0"
      style={{
        ...themeStyle,
        color: "var(--slide-text)",
        fontFamily: "var(--slide-font-body)",
      }}
    >
      <MDXRenderer
        source={resolveAssetPaths(slide.rawContent, deckName)}
        components={slideComponents}
      />
    </div>
  );
}
