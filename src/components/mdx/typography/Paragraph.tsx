import type { ComponentPropsWithoutRef } from "react";

// Renders as <div> instead of <p> to avoid HTML nesting violations.
// MDX wraps text content inside JSX elements with the `p` component,
// so if a user writes an explicit <p> in MDX, a <p>-based component
// would create invalid <p><p> nesting. <div> is valid in all contexts.
export function SlideParagraph(props: ComponentPropsWithoutRef<"div">) {
  return <div className="mb-6 text-4xl leading-relaxed" {...props} />;
}
