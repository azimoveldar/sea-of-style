"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export function CartContent() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-muted-foreground">Your cart is empty.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center gap-2 bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div
            key={`${item.product.id}-${item.size}`}
            className="flex gap-6 rounded-lg border border-border bg-card p-4"
          >
            <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-sm bg-secondary">
              <Image
                src={item.product.image || "/placeholder.svg"}
                alt={item.product.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h3 className="font-medium text-foreground">{item.product.name}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Size: {item.size}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.size, item.quantity - 1)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-sm bg-secondary text-sm text-secondary-foreground transition-colors hover:bg-muted"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.size, item.quantity + 1)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-sm bg-secondary text-sm text-secondary-foreground transition-colors hover:bg-muted"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold text-primary">
                    ${item.product.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeItem(item.product.id, item.size)}
                    className="text-muted-foreground transition-colors hover:text-destructive"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="mt-10 rounded-lg border border-border bg-card p-6">
        <h2 className="font-serif text-xl font-bold text-foreground">Order Summary</h2>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="font-medium text-foreground">Free</span>
          </div>
          <div className="mt-3 border-t border-border pt-3">
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="text-lg font-bold text-primary">${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button className="mt-6 w-full bg-accent py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}
