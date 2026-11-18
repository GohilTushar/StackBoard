"use client"

import { useCallback, useSyncExternalStore } from "react"

/** Matches the Tailwind `md` breakpoint: anything narrower is treated as mobile. */
export const MOBILE_MEDIA_QUERY = "(max-width: 767px)"

/**
 * Subscribes to a CSS media query. Returns `false` during SSR and the first
 * hydration render, then the real value on the client.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query)
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  )
}

export function useIsMobile(): boolean {
  return useMediaQuery(MOBILE_MEDIA_QUERY)
}

/** One-off, non-reactive check for use inside event handlers. */
export function isMobileViewport(): boolean {
  return typeof window !== "undefined" && window.matchMedia(MOBILE_MEDIA_QUERY).matches
}
