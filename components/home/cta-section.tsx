import Link from "next/link"

export function CtaSection() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Dive into your new wardrobe
        </h2>
        <p className="mt-4 leading-relaxed text-primary-foreground/80">
          Every piece in our collection tells a story of craftsmanship, quality materials, and
          the timeless beauty of the coast.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
        >
          Explore the Collection
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
