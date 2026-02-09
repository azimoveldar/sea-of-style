"use client"

import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

export function Navbar() {
  const { totalItems } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
          Sea of Style
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/cart" className="relative text-foreground transition-colors hover:text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            <span className="sr-only">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-foreground">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/login" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            Login
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Home</Link>
            <Link href="/shop" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Shop</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Contact</Link>
            <Link href="/cart" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
            <Link href="/login" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Login</Link>
          </div>
        </div>
      )}
    </header>
  )
}
