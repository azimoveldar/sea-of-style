import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured)

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Curated Selection
        </p>
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Featured Pieces
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
