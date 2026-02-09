import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import { ProductDetail } from "@/components/shop/product-detail"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
