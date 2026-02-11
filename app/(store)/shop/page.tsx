// import { ShopContent } from "@/components/shop/shop-content"

// export default function ShopPage() {
//   return (
//     <div className="mx-auto max-w-7xl px-6 py-12">
//       <div className="mb-10">
//         <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
//           Our Collection
//         </p>
//         <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
//           Shop
//         </h1>
//       </div>
//       <ShopContent />
//     </div>
//   )
// }

import { Suspense } from "react" // 1. Import Suspense
import { ShopContent } from "@/components/shop/shop-content"

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Our Collection
        </p>
        <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
          Shop
        </h1>
      </div>

      <Suspense fallback={<ShopLoadingSkeleton />}>
        <ShopContent />
      </Suspense>
    </div>
  )
}

function ShopLoadingSkeleton() {
  return <div className="animate-pulse py-10 text-center">Loading products...</div>
}
