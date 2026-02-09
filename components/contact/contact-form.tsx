"use client"

import React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-6 text-center">
        <p className="font-medium text-foreground">Thank you for your message!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We will get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full resize-none border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
      >
        Send Message
      </button>
    </form>
  )
}
