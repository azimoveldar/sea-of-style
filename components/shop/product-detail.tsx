"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Product } from "@/lib/data"
import { useCart } from "@/lib/cart-context"

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product, selectedSize, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link
        href="/shop"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        Back to Shop
      </Link>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {product.category}
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-2xl font-semibold text-primary">
            ${product.price}
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Size selector */}
          <div className="mt-8">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Size
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[48px] rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quantity
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-secondary-foreground transition-colors hover:bg-muted"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-secondary-foreground transition-colors hover:bg-muted"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="mt-8 w-full bg-accent py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90 md:w-auto md:px-12"
          >
            {added ? "Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}
