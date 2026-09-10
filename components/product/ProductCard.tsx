"use client"
import Image from "next/image"
import Link from "next/link"
import { Timer, Tag, ArrowUpRight, Heart, ShoppingBag } from "lucide-react"
import { Product } from "@/types"
import { useWishlist } from "@/context/WishlistContext"
import { useCart } from "@/context/CartContext"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const { isWishlisted, toggleWishlist } = useWishlist()
    const { addToCart } = useCart()
    const favorited = isWishlisted(product.id)

    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : (product.category === "clothes" ? "M" : "EU 42")

    const handleWishlist = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        toggleWishlist(product.id)
    }

    const handleQuickAdd = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart(product, defaultSize, 1)
    }

    return (
        <Link
            href={`/products/${product.slug}`}
            className="group block bg-white border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#000] transition-all relative overflow-hidden"
        >
            {/* Zone Image encadrée */}
            <div className="relative w-full aspect-[4/3] bg-white border-b-4 border-black overflow-hidden flex items-center justify-center p-4">
                
                {/* Badges gauche */}
                <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5">
                    {product.discount > 0 && (
                        <span className="bg-[#BAE6FD] text-black border-2 border-black font-black text-xs px-2 py-0.5 shadow-[2px_2px_0px_#000] flex items-center gap-1 -rotate-3">
                            <Tag className="w-3 h-3 stroke-[3px]" />
                            -{product.discount}%
                        </span>
                    )}

                    {product.is24h && (
                        <span className="bg-white text-black border-2 border-black font-black text-xs px-2 py-0.5 shadow-[2px_2px_0px_#000] flex items-center gap-1 rotate-2">
                            <Timer className="w-3 h-3 stroke-[3px]" />
                            24H
                        </span>
                    )}
                </div>

                {/* Bouton Favoris haut droite */}
                <button
                    onClick={handleWishlist}
                    aria-label="Ajouter aux favoris"
                    className="absolute top-2.5 right-2.5 z-10 p-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                >
                    <Heart
                        className={`w-3.5 h-3.5 stroke-[2.5px] transition-colors ${
                            favorited ? "fill-[#FF4D4D] text-[#FF4D4D]" : "text-black"
                        }`}
                    />
                </button>

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-200"
                />
            </div>

            {/* Infos produit */}
            <div className="p-4 bg-white">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black bg-[#BAE6FD] px-1.5 py-0.5 border border-black">
                        {product.brand}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-[#7DD3FC] border border-black shadow-[1px_1px_0px_#000]">
                        <ArrowUpRight className="w-3 h-3 stroke-[3px]" />
                    </span>
                </div>

                <h3 className="text-xs md:text-sm font-black uppercase tracking-tight text-black line-clamp-1 group-hover:underline">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t-2 border-black/10">
                    <div className="flex items-baseline gap-2">
                        <span className="text-sm md:text-base font-black text-black">
                            {product.price.toFixed(2)} €
                        </span>
                        {product.discount > 0 && (
                            <span className="text-xs line-through font-bold text-black/40">
                                {product.originalPrice.toFixed(2)} €
                            </span>
                        )}
                    </div>

                    {/* Bouton ajout rapide */}
                    <button
                        onClick={handleQuickAdd}
                        aria-label="Ajouter au panier"
                        className="p-1.5 bg-[#7DD3FC] border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 transition-all text-black cursor-pointer"
                    >
                        <ShoppingBag className="w-3.5 h-3.5 stroke-[2.5px]" />
                    </button>
                </div>
            </div>
        </Link>
    )
}
