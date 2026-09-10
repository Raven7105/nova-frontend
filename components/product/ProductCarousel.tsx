"use client"
import { useRef } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import ProductCard from "./ProductCard"
import { Product } from "@/types"

type Props = {
    title: string
    products: Product[]
    href?: string
}

export default function ProductCarousel({ title, products, href }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return
        const scrollAmount = 340
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <section className="py-14 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Header Néo-brutaliste avec stickers et commandes */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 pb-4 border-b-4 border-black">
                <div>
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] text-black border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#000] -rotate-1">
                        <Sparkles className="w-3.5 h-3.5 stroke-[3px]" />
                        <span>SÉLECTION ARCHIVE</span>
                    </div>

                    {href ? (
                        <Link href={href} className="group flex items-center gap-3">
                            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black group-hover:text-black group-hover:underline">
                                {title}
                            </h2>
                            <span className="bg-[#7DD3FC] text-black border-2 border-black px-2 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000] group-hover:translate-x-1 transition-transform">
                                VOIR TOUT →
                            </span>
                        </Link>
                    ) : (
                        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
                            {title}
                        </h2>
                    )}
                </div>

                {/* Boutons flèches tactiles néo-brutalistes */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                        onClick={() => scroll("left")}
                        aria-label="Défiler à gauche"
                        className="w-11 h-11 border-3 border-black bg-white text-black shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                    >
                        <ArrowLeft className="w-5 h-5 stroke-[3px]" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        aria-label="Défiler à droite"
                        className="w-11 h-11 border-3 border-black bg-[#7DD3FC] text-black shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                    >
                        <ArrowRight className="w-5 h-5 stroke-[3px]" />
                    </button>
                </div>
            </div>

            {/* Piste de défilement */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-hide scroll-smooth"
            >
                {products.map((product) => (
                    <div key={product.id} className="min-w-[270px] sm:min-w-[290px] flex-shrink-0">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    )
}
