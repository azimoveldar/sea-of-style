import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-bold">Sea of Style</h3>
            <p className="mt-3 text-sm leading-relaxed opacity-80">
              Modern fashion inspired by the ocean. Timeless pieces crafted with care for the
              style-conscious.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest opacity-60">
              Shop
            </h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/shop?category=men" className="text-sm opacity-80 transition-opacity hover:opacity-100">Men</Link></li>
              <li><Link href="/shop?category=women" className="text-sm opacity-80 transition-opacity hover:opacity-100">Women</Link></li>
              <li><Link href="/shop?category=accessories" className="text-sm opacity-80 transition-opacity hover:opacity-100">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest opacity-60">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-sm opacity-80 transition-opacity hover:opacity-100">About Us</Link></li>
              <li><Link href="/contact" className="text-sm opacity-80 transition-opacity hover:opacity-100">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest opacity-60">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="opacity-80 transition-opacity hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="opacity-80 transition-opacity hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="opacity-80 transition-opacity hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-xs opacity-60">
          2026 Sea of Style. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
