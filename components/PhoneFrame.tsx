import Image from 'next/image'

interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
}

export default function PhoneFrame({ src, alt, className = '' }: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[1206/2622] w-full overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl shadow-black/40 transition-transform duration-300 hover:-translate-y-1.5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 26vw, 46vw"
        className="object-cover"
      />
    </div>
  )
}
