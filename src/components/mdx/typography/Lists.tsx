import type { ComponentPropsWithoutRef } from "react";

export function SlideUl(props: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      className="list-disc space-y-4 pl-10 text-[2rem]"
      style={{ lineHeight: "var(--slide-body-leading)", marginBottom: "var(--slide-space-sm)" }}
      {...props}
    />
  );
}

export function SlideOl(props: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className="list-decimal space-y-4 pl-10 text-[2rem]"
      style={{ lineHeight: "var(--slide-body-leading)", marginBottom: "var(--slide-space-sm)" }}
      {...props}
    />
  );
}

export function SlideLi(props: ComponentPropsWithoutRef<"li">) {
  return (
    <li
      className="pl-2"
      style={{ lineHeight: "var(--slide-body-leading)" }}
      {...props}
    />
  );
}
