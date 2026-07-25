export default function HeroVideoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src="/12954605-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
      {/* Dark wash so text stays legible over the footage */}
      <div className="absolute inset-0 bg-base/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-base/20 via-transparent to-base" />
    </div>
  )
}
