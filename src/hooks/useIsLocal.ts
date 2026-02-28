"use client";

import { useSyncExternalStore } from "react";

const LOCALHOST_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);

const noop = () => () => {};

function getSnapshot(): boolean {
  return LOCALHOST_HOSTNAMES.has(window.location.hostname);
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Returns true when the app is accessed from localhost.
 * SSR-safe: returns false during server rendering (conservative default).
 * Uses useSyncExternalStore to avoid set-state-in-effect issues.
 */
export function useIsLocal(): boolean {
  return useSyncExternalStore(noop, getSnapshot, getServerSnapshot);
}
