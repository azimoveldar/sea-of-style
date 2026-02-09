"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $75", min: 0, max: 75 },
  { label: "$75 - $150", min: 75, max: 150 },
  { label: "Over $150", min: 150, max: Infinity },
]

export function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState(0)

  const filtered = products.filter((p) => {
    const matchCategory = category === "all" || p.category === category
    const matchPrice =
      p.price >= priceRanges[priceRange].min &&
      p.price < priceRanges[priceRange].max
    return matchCategory && matchPrice
  })

  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      {/* Filters sidebar */}
      <aside className="w-full shrink-0 lg:w-56">
        <div className="sticky top-24">
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Category
            </h3>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {["all", "men", "women", "accessories"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-sm px-3 py-1.5 text-left text-sm font-medium capitalize transition-colors ${
                    category === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Price
            </h3>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {priceRanges.map((range, i) => (
                <button
                  key={range.label}
                  onClick={() => setPriceRange(i)}
                  className={`rounded-sm px-3 py-1.5 text-left text-sm font-medium transition-colors ${
                    priceRange === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Product grid */}
      <div className="flex-1">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No products match your filters.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
