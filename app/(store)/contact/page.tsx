import { ContactForm } from "@/components/contact/contact-form"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Get in Touch
        </p>
        <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
          Contact Us
        </h1>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl font-bold text-foreground">Send us a message</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Have a question about our collections, sizing, or orders? We would love to hear
            from you.
          </p>
          <ContactForm />
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-foreground">Contact Information</h2>
          <div className="mt-6 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <p className="text-sm font-medium text-foreground">Address</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  1750 Finch Ave<br />
                  North York, CA M2J 2X5
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  info@seaofstyle.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
