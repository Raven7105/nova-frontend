"use client"
import { useMemo } from "react"
import { allProducts } from "@/lib/data"
import ProductGrid from "@/components/product/ProductGrid"
import { Zap, Truck, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function Livraison24hPage() {
    const products24h = useMemo(() => {
        return allProducts.filter((p) => p.is24h)
    }, [])

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
                    COLLECTIONS // EXPÉDITION 24H CHRONO
                </span>
            </nav>

            {/* En-tête Néo-brutaliste */}
            <div className="relative mb-12 p-8 md:p-12 border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
                <div className="hidden sm:block absolute -top-5 -right-3 z-10">
                    <span className="bg-[#7DD3FC] text-black border-3 border-black font-black text-xs uppercase px-4 py-1.5 shadow-[4px_4px_0px_#000] rotate-2 inline-block">
                        ⚡ STOCK PHYSIQUE À LOMÉ 🇹🇬
                    </span>
                </div>

                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#000]">
                        <Zap className="w-3.5 h-3.5 stroke-[2.5px] fill-black" />
                        <span>LIVRAISON EXPRESS LE JOUR MÊME</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-black">
                        LIVRAISON <span className="bg-[#7DD3FC] px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0px_#000]">24H CHRONO</span>
                    </h1>

                    <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-2xl">
                        Toutes les références listées ci-dessous sont déjà authentifiées, scellées et disponibles immédiatement dans notre boutique à Lomé. Commandez en ligne ou sur WhatsApp, livré chez vous par coursier.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t-3 border-black text-xs font-black">
                    <span className="flex items-center gap-1.5 bg-black text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#7DD3FC]">
                        <Truck className="w-4 h-4" /> COURSIER EXPRESS LOMÉ (2H À 24H)
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#BAE6FD] text-black px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
                        <ShieldCheck className="w-4 h-4" /> SCELLÉ INVIOLABLE DÉJÀ APPOSÉ
                    </span>
                </div>
            </div>

            {/* Grille */}
            <ProductGrid products={products24h} />

        </div>
    )
}
