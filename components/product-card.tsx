import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/data"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-primary">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}
