import Image from 'next/image'

interface BrowserFrameProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export default function BrowserFrame({ src, alt, priority = false, className = '' }: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-border-neutral bg-soft-white shadow-sm transition-transform duration-300 hover:scale-[1.015] ${className}`}>
      <div className="flex items-center gap-1.5 bg-ink/[0.04] px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes="(min-width: 1024px) 55vw, 92vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}
