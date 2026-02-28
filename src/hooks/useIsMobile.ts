"use client";

import { useSyncExternalStore } from "react";

const MOBILE_MQ = "(max-width: 767px)";

function subscribe(callback: () => void): () => void {
  const mql = window.matchMedia(MOBILE_MQ);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(MOBILE_MQ).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Returns true when the viewport width is < 768px.
 * SSR-safe: returns false during server rendering.
 * Reacts to viewport changes including device rotation.
 */
export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
