'use client'

import { useEffect, useState, type RefObject } from 'react'

const FADE_SECONDS = 0.6

/** Background videos loop, but the native `loop` attribute jump-cuts straight
 * back to frame 0 — jarring when the last frame doesn't match the first.
 * Handles looping manually instead: fades out just before the clip ends,
 * restarts it once fully faded, then fades back in. */
export function useLoopFade(videoRef: RefObject<HTMLVideoElement | null>) {
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.loop = false

    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= FADE_SECONDS) {
        setFaded(true)
      }
    }
    const handleEnded = () => {
      video.currentTime = 0
      void video.play()
      // Wait for the restarted frame to actually paint before fading back in,
      // otherwise the fade-in reveals the stale last frame for a beat.
      requestAnimationFrame(() => requestAnimationFrame(() => setFaded(false)))
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [videoRef])

  return { faded, fadeMs: FADE_SECONDS * 1000 }
}
