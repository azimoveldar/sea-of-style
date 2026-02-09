export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: "men" | "women" | "accessories"
  sizes: string[]
  featured: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Coastal Linen Shirt",
    price: 89,
    description:
      "Crafted from premium European linen, this relaxed-fit shirt captures the essence of coastal living. Its breathable fabric and timeless silhouette make it perfect for sun-drenched days and balmy evenings alike.",
    image: "/images/products/linen-shirt.jpg",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "2",
    name: "Wave Flow Dress",
    price: 145,
    description:
      "Inspired by the fluid movement of ocean waves, this elegant dress features a flowing silhouette that moves with you. Made from lightweight modal fabric with a subtle sheen that catches the light beautifully.",
    image: "/images/products/wave-dress.jpg",
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    featured: true,
  },
  {
    id: "3",
    name: "Ocean Blazer",
    price: 225,
    description:
      "A sophisticated structured blazer in deep navy that evokes the depth of the open sea. Tailored from premium wool blend with subtle nautical-inspired details and a modern slim fit.",
    image: "/images/products/ocean-blazer.jpg",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "4",
    name: "Woven Coastal Tote",
    price: 68,
    description:
      "Hand-woven from natural fibers, this spacious tote brings artisanal craftsmanship to your everyday carry. Features a reinforced base and interior pocket for essentials.",
    image: "/images/products/coastal-tote.jpg",
    category: "accessories",
    sizes: ["One Size"],
    featured: true,
  },
  {
    id: "5",
    name: "Shoreline Denim Shorts",
    price: 75,
    description:
      "Relaxed-fit denim shorts in a sun-faded wash that embodies effortless coastal style. Made from organic cotton with just the right amount of stretch for all-day comfort.",
    image: "/images/products/denim-shorts.jpg",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    featured: false,
  },
  {
    id: "6",
    name: "Shell Pendant Necklace",
    price: 52,
    description:
      "A delicate gold-plated necklace featuring a hand-selected natural shell pendant. Each piece is unique, carrying the beauty of the ocean wherever you go.",
    image: "/images/products/shell-necklace.jpg",
    category: "accessories",
    sizes: ["One Size"],
    featured: false,
  },
  {
    id: "7",
    name: "Tidal Silk Blouse",
    price: 135,
    description:
      "Luxurious silk blouse in a rich teal hue inspired by shallow tropical waters. Features a relaxed fit with delicate button details and a softly draping collar.",
    image: "/images/products/silk-blouse.jpg",
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    featured: false,
  },
  {
    id: "8",
    name: "Sandstone Chino Pants",
    price: 98,
    description:
      "Classic straight-leg chinos in a warm sandstone hue. Crafted from brushed cotton twill with a garment-washed finish for a soft, lived-in feel from day one.",
    image: "/images/products/chino-pants.jpg",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    featured: false,
  },
]

export const categories = [
  {
    name: "Men",
    slug: "men",
    image: "/images/categories/men.jpg",
    description: "Coastal-inspired essentials for the modern man",
  },
  {
    name: "Women",
    slug: "women",
    image: "/images/categories/women.jpg",
    description: "Elegant pieces that flow like the ocean",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "/images/categories/accessories.jpg",
    description: "Finishing touches inspired by the sea",
  },
]
