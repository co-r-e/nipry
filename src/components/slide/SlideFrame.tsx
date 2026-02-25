"use client";

import type { SlideData, SlideType, DeckConfig } from "@/types/deck";
import { SlideOverlay } from "@/components/slide/SlideOverlay";
import { SlideContent } from "@/components/slide/SlideContent";

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
      return { padding: "96px 96px 80px", className: "flex-col items-center justify-center" };
    case "section":
      return { padding: "96px 96px 80px", className: "flex-col justify-center" };
    case "quote":
      return { padding: "120px 140px 100px", className: "flex-col items-center justify-center" };
    case "image-full":
      return { padding: "0", className: "flex-col" };
    default:
      return { padding: "80px 72px 64px", className: "flex-col" };
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
  const { primary, secondary } = theme.colors;
  const slideType = slide.frontmatter.type;
  const layout = getTypeLayout(slideType);

  const defaultGradient = accentLine
    ? `linear-gradient(to bottom, transparent, ${primary}80 15%, ${primary} 50%, ${secondary ?? primary} 85%, transparent)`
    : undefined;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Subtle background decoration for section slides */}
      {slideType === "section" && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, ${primary} 0%, transparent 50%)`,
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
          }}
        />
      )}

      <div className="absolute inset-0 z-10 pointer-events-none">
        <SlideOverlay
          config={config}
          currentPage={currentPage}
          slideType={slideType}
          deckName={deckName}
        />
      </div>

      <div
        className={`flex h-full w-full ${layout.className}`}
        style={{ padding: layout.padding }}
      >
        <SlideContent slide={slide} config={config} deckName={deckName} />
      </div>
    </div>
  );
}
