"use client"
import { useMemo } from "react"
import { allProducts } from "@/lib/data"
import { useWishlist } from "@/context/WishlistContext"
import ProductGrid from "@/components/product/ProductGrid"
import { Heart, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
    const { wishlist } = useWishlist()

    const favoritedProducts = useMemo(() => {
        return allProducts.filter((p) => wishlist.includes(p.id))
    }, [wishlist])

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

            {/* Fil d'Ariane Néo-brutaliste */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap mb-10">
                <Link
                    href="/"
                    className="bg-white text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] transition-colors"
                >
                    ACCUEIL
                </Link>
                <span className="font-black text-black">/</span>
                <span className="bg-[#BAE6FD] text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] -rotate-1">
                    MES FAVORIS // WISHLIST
                </span>
            </nav>

            {/* En-tête */}
            <div className="relative mb-12 p-8 md:p-12 border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#000]">
                        <Heart className="w-3.5 h-3.5 fill-[#FF4D4D] text-[#FF4D4D]" />
                        <span>SÉLECTION PERSONNELLE</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-black">
                        MES <span className="bg-[#7DD3FC] px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0px_#000]">FAVORIS</span>
                    </h1>

                    <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-2xl">
                        Retrouvez toutes les pièces que vous avez enregistrées pour suivre leur disponibilité et passer commande rapidement.
                    </p>
                </div>

                <div className="mt-6 pt-6 border-t-3 border-black">
                    <span className="bg-black text-white font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#7DD3FC]">
                        {favoritedProducts.length} {favoritedProducts.length > 1 ? "ARTICLES ENREGISTRÉS" : "ARTICLE ENREGISTRÉ"}
                    </span>
                </div>
            </div>

            {/* Grille ou État vide */}
            {favoritedProducts.length > 0 ? (
                <ProductGrid products={favoritedProducts} />
            ) : (
                <div className="text-center py-20 border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-8 space-y-4">
                    <div className="inline-block bg-[#BAE6FD] border-3 border-black p-4 shadow-[4px_4px_0px_#000] -rotate-3">
                        <Heart className="w-10 h-10 stroke-[2.5px] text-black" />
                    </div>
                    <h3 className="text-2xl font-black uppercase">AUCUN FAVORIS POUR L'INSTANT</h3>
                    <p className="text-xs sm:text-sm font-bold text-black/70 max-w-md mx-auto">
                        Cliquez sur l'icône de cœur sur n'importe quel article de la boutique pour le sauvegarder dans votre liste.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/collections/sneakers"
                            className="inline-flex items-center gap-2 bg-[#7DD3FC] text-black border-3 border-black px-6 py-3 font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                        >
                            <span>EXPLORER LES SNEAKERS</span>
                            <ArrowRight className="w-4 h-4 stroke-[3px]" />
                        </Link>
                    </div>
                </div>
            )}

        </div>
    )
}
