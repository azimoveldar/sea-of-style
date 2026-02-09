import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Our Story
        </p>
        <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
          About Sea of Style
        </h1>
      </div>

      <div className="relative mb-12 aspect-[2/1] overflow-hidden rounded-lg">
        <Image
          src="/images/hero.jpg"
          alt="Sea of Style coastal inspiration"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="prose-custom mx-auto max-w-2xl">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Sea of Style was born from a simple idea: that the calm, beauty, and timelessness
          of the ocean should be woven into the fabric of everyday life. Founded on the
          sun-washed shores where land meets sea, our brand draws inspiration from the
          ever-changing palette of coastal landscapes.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">Our Mission</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          We believe fashion should feel as natural as a sea breeze. Every piece in our
          collection is thoughtfully designed to combine modern aesthetics with lasting
          quality. We source sustainable materials, partner with ethical manufacturers, and
          create garments that transcend seasons and trends.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">Craftsmanship</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          From premium European linens to hand-selected natural fibers, our materials are
          chosen for their beauty, durability, and comfort. Each garment is crafted with
          meticulous attention to detail, ensuring that every stitch reflects our commitment
          to excellence.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">Our Promise</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          When you wear Sea of Style, you carry a piece of the coast with you. Our clothes
          are designed for the moments that matter most, whether you are walking along the
          shore at sunset or stepping into a sunlit room. We promise quality, sustainability,
          and a style that is uniquely, effortlessly yours.
        </p>
      </div>
    </div>
  )
}
