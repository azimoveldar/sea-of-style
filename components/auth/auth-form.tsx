"use client"

import React from "react"

import { useState } from "react"

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!isLogin && !formData.name.trim()) errs.name = "Name is required"
    if (!formData.email.trim()) errs.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email"
    if (!formData.password) errs.password = "Password is required"
    else if (formData.password.length < 6) errs.password = "At least 6 characters"
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      // Placeholder for future AWS Cognito integration
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          {isLogin ? "Welcome back" : "Create an account"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isLogin
            ? "Sign in to access your account"
            : "Join Sea of Style today"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        {!isLogin && (
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
        )}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            placeholder="At least 6 characters"
          />
          {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="mt-2 w-full bg-accent py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
        >
          {isLogin ? "Sign In" : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => {
            setIsLogin(!isLogin)
            setErrors({})
          }}
          className="font-medium text-accent underline underline-offset-2 transition-colors hover:text-foreground"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
  )
}
