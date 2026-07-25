'use client'

import { useEffect, useRef } from 'react'
import { useLoopFade } from '@/components/useLoopFade'

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { faded, fadeMs } = useLoopFade(videoRef)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.75
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
      <div style={{ opacity: faded ? 0 : 1, transition: `opacity ${fadeMs}ms ease` }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src="/12085630_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dark wash so text stays legible over the footage */}
      <div className="absolute inset-0 bg-base/70" />
      {/* Fixed-pixel bottom fade — dissolves into the same dark base that
          Process's own top fade starts from, so the seam between sections
          blends instead of cutting hard between two different clips. */}
      <div
        className="absolute inset-x-0 bottom-0 h-[180px]"
        style={{ background: 'linear-gradient(to top, #07071a, transparent)' }}
      />
    </div>
  )
}
