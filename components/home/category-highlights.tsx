import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/data"

export function CategoryHighlights() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Collections
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Shop by Category
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src={cat.image || "/placeholder.svg"}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
