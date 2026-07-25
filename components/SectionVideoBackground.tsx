'use client'

import { useEffect, useRef } from 'react'

interface SectionVideoBackgroundProps {
  src: string
  opacity?: number
  playbackRate?: number
}

export default function SectionVideoBackground({ src, opacity = 0.12, playbackRate = 0.75 }: SectionVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = playbackRate
  }, [playbackRate])

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Uniform dark wash so section content stays legible over the footage */}
      <div className="absolute inset-0 bg-base/80" />
      {/* Fixed-pixel edge fades (not a percentage of the section) — blend this
          section's footage into the shared dark base at the seam with the
          section above/below, so scrolling between sections dissolves through
          dark instead of cutting hard from one clip to the next. A percentage
          gradient would either swallow a short section whole or barely fade a
          tall one. */}
      <div
        className="absolute inset-x-0 top-0 h-[180px]"
        style={{ background: 'linear-gradient(to bottom, #07071a, transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[180px]"
        style={{ background: 'linear-gradient(to top, #07071a, transparent)' }}
      />
    </div>
  )
}
