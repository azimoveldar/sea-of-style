import { CartContent } from "@/components/cart/cart-content"

export default function CartPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-4xl font-bold text-foreground">Your Cart</h1>
      <CartContent />
    </div>
  )
}
