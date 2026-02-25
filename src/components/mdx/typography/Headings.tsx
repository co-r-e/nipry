import type { ComponentPropsWithoutRef } from "react";

export function SlideH1(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="text-[4.5rem] font-bold leading-[1.1]"
      style={{
        color: "var(--slide-primary)",
        fontFamily: "var(--slide-font-heading)",
        letterSpacing: "var(--slide-heading-tracking)",
        textWrap: "balance",
        marginBottom: "var(--slide-space-sm)",
      }}
      {...props}
    />
  );
}

export function SlideH2(props: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="text-[2.75rem] font-semibold leading-[1.2]"
      style={{
        color: "var(--slide-primary)",
        fontFamily: "var(--slide-font-heading)",
        letterSpacing: "-0.015em",
        textWrap: "balance",
        marginBottom: "var(--slide-space-sm)",
      }}
      {...props}
    />
  );
}

export function SlideH3(props: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className="text-[2rem] font-semibold leading-[1.3]"
      style={{
        fontFamily: "var(--slide-font-heading)",
        letterSpacing: "-0.01em",
        color: "var(--slide-text)",
        marginBottom: "var(--slide-space-xs)",
      }}
      {...props}
    />
  );
}
