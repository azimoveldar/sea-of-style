import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Coastal fashion lifestyle"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
          Premium Coastal Fashion
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-7xl text-balance">
          Where the ocean meets style
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/85">
          Discover timeless pieces inspired by the rhythm of the sea. Crafted for those who
          carry the calm of the coast wherever they go.
        </p>
        <Link
          href="/shop"
          className="mt-10 inline-flex items-center gap-2 bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
        >
          Shop Now
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
