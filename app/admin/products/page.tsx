import Image from "next/image"
import { products } from "@/lib/data"

export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">Products</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your product catalog
        </p>
      </div>

      <div className="rounded-lg border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-6 py-3 font-semibold text-muted-foreground">Product</th>
                <th className="px-6 py-3 font-semibold text-muted-foreground">Category</th>
                <th className="px-6 py-3 font-semibold text-muted-foreground">Sizes</th>
                <th className="px-6 py-3 text-right font-semibold text-muted-foreground">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-border last:border-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm bg-secondary">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <span className="font-medium text-foreground">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="capitalize text-muted-foreground">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {product.sizes.join(", ")}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-foreground">
                    ${product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
