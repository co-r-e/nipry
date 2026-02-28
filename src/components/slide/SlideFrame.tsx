"use client";

import type { SlideData, SlideType, DeckConfig } from "@/types/deck";
import { SlideOverlay } from "@/components/slide/SlideOverlay";
import { SlideContent } from "@/components/slide/SlideContent";
import { cn } from "@/lib/utils";
import { createThemeVariables } from "@/lib/theme";
import styles from "./SlideFrame.module.css";

interface SlideFrameProps {
  slide: SlideData;
  config: DeckConfig;
  deckName: string;
  currentPage: number;
}

interface TypeLayout {
  padding: string;
  className: string;
}

function getTypeLayout(type: SlideType): TypeLayout {
  switch (type) {
    case "cover":
    case "ending":
      return { padding: "96px 96px 80px", className: styles.layoutCover };
    case "section":
      return { padding: "96px 96px 80px", className: styles.layoutSection };
    case "quote":
      return { padding: "120px 140px 100px", className: styles.layoutQuote };
    case "image-full":
      return { padding: "0", className: styles.layoutImageFull };
    default:
      return { padding: "80px 72px 64px", className: styles.layoutDefault };
  }
}

/**
 * Shared layout for a single slide: overlay layer (logo, copyright, page number)
 * on top of content rendered inside the safe zone with type-aware padding.
 */
export function SlideFrame({
  slide,
  config,
  deckName,
  currentPage,
}: SlideFrameProps): React.JSX.Element {
  const { accentLine, theme } = config;
  const slideType = slide.frontmatter.type;
  const layout = getTypeLayout(slideType);

  const themeVars = createThemeVariables(theme, slide.frontmatter.background);

  const defaultGradient = accentLine
    ? `linear-gradient(to bottom, transparent, color-mix(in srgb, var(--slide-primary) 50%, transparent) 15%, var(--slide-primary) 50%, var(--slide-secondary) 85%, transparent)`
    : undefined;

  return (
    <div
      className={styles.frame}
      style={{
        ...themeVars,
        background: "var(--slide-bg)",
        color: "var(--slide-text)",
        fontFamily: "var(--slide-font-body)",
      }}
    >
      {/* Subtle background decoration for section slides */}
      {slideType === "section" && (
        <div
          className={styles.sectionDeco}
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, var(--slide-primary) 0%, transparent 50%)`,
          }}
        />
      )}

      {accentLine && (
        <div
          style={{
            position: "absolute",
            [accentLine.position === "right" ? "right" : "left"]: 0,
            top: 0,
            bottom: 0,
            width: accentLine.width ?? 6,
            background: accentLine.gradient ?? defaultGradient,
            zIndex: 20,
            pointerEvents: "none",
          }}
        />
      )}

      <div className={styles.overlayContainer}>
        <SlideOverlay
          config={config}
          currentPage={currentPage}
          slideType={slideType}
          deckName={deckName}
        />
      </div>

      <div
        className={cn(styles.contentContainer, layout.className)}
        style={{ padding: layout.padding }}
      >
        <SlideContent slide={slide} config={config} deckName={deckName} />
      </div>
    </div>
  );
}
