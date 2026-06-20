"use client"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./ProductCard"
import { Product } from "@/types"

type Props = {
    title: string
    products: Product[]
}

export default function ProductCarousel({ title, products }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return
        const scrollAmount = 300
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <section className="py-12 px-8 relative max-w-7xl mx-auto">

            {/* Titre */}
            <h2 className="text-2xl font-bold text-center tracking-widest uppercase mb-8">
                {title}
            </h2>

            {/* Flèche gauche */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel scrollable */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            >
                {products.map((product) => (
                    <div key={product.id} className="min-w-[250px]">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {/* Flèche droite */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

        </section>
    )
}