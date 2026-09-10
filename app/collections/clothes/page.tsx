"use client"
import { useState, useMemo } from "react"
import { clothesProducts } from "@/lib/data"
import ProductGrid from "@/components/product/ProductGrid"
import Pagination from "@/components/product/Pagination"
import { SlidersHorizontal, Sparkles, Check, RefreshCw, Zap, Shirt } from "lucide-react"
import Link from "next/link"

const ITEMS_PER_PAGE = 12
const BRANDS = ["TOUTES", "STÜSSY", "SUPREME", "CORTEIZ", "DENIM TEARS", "SP5DER", "TRAVIS SCOTT"]

export default function ClothesCollectionPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedBrand, setSelectedBrand] = useState("TOUTES")
    const [only24h, setOnly24h] = useState(false)
    const [onlyDiscount, setOnlyDiscount] = useState(false)
    const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "discount">("featured")

    const filteredProducts = useMemo(() => {
        let list = [...clothesProducts]

        if (selectedBrand !== "TOUTES") {
            list = list.filter((p) => p.brand.toUpperCase() === selectedBrand)
        }

        if (only24h) {
            list = list.filter((p) => p.is24h)
        }

        if (onlyDiscount) {
            list = list.filter((p) => p.discount > 0)
        }

        if (sortBy === "price-asc") {
            list.sort((a, b) => a.price - b.price)
        } else if (sortBy === "price-desc") {
            list.sort((a, b) => b.price - a.price)
        } else if (sortBy === "discount") {
            list.sort((a, b) => b.discount - a.discount)
        }

        return list
    }, [selectedBrand, only24h, onlyDiscount, sortBy])

    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE))
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    const resetFilters = () => {
        setSelectedBrand("TOUTES")
        setOnly24h(false)
        setOnlyDiscount(false)
        setSortBy("featured")
        setCurrentPage(1)
    }

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
                    COLLECTIONS // STREETWEAR & CLOTHES
                </span>
            </nav>

            {/* En-tête Néo-brutaliste */}
            <div className="relative mb-12 p-8 md:p-12 border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
                <div className="hidden sm:block absolute -top-5 -right-3 z-10">
                    <span className="bg-[#7DD3FC] text-black border-3 border-black font-black text-xs uppercase px-4 py-1.5 shadow-[4px_4px_0px_#000] rotate-2 inline-block">
                        ✦ 100% AUTHENTIQUE
                    </span>
                </div>

                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#000]">
                        <Shirt className="w-3.5 h-3.5 stroke-[2.5px]" />
                        <span>STREETWEAR ARCHIVE</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-black">
                        CLOTHES <span className="bg-[#7DD3FC] px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0px_#000]">ARCHIVE</span>
                    </h1>

                    <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-2xl">
                        Stüssy, Supreme, Corteiz, Denim Tears, Sp5der, Travis Scott. Pièces rares, hoodies épais et éditions limitées introuvables en boutique traditionnelle.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t-3 border-black">
                    <span className="bg-black text-white font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#7DD3FC]">
                        {filteredProducts.length} PIÈCES TROUVÉES
                    </span>
                    <span className="bg-white text-black font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 fill-[#7DD3FC]" />
                        EXPÉDITION 24H DISPONIBLE
                    </span>
                </div>
            </div>

            {/* Barre de filtres */}
            <div className="mb-10 space-y-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2.5 py-1.5 border-2 border-black whitespace-nowrap">
                        MARQUES :
                    </span>
                    {BRANDS.map((brand) => {
                        const isSelected = selectedBrand === brand
                        return (
                            <button
                                key={brand}
                                onClick={() => {
                                    setSelectedBrand(brand)
                                    setCurrentPage(1)
                                }}
                                className={`text-xs font-black uppercase tracking-wider px-3.5 py-1.5 border-3 border-black transition-all whitespace-nowrap cursor-pointer ${
                                    isSelected
                                        ? "bg-[#7DD3FC] text-black shadow-[3px_3px_0px_#000] -translate-y-0.5"
                                        : "bg-white text-black shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                                }`}
                            >
                                {brand}
                            </button>
                        )
                    })}
                </div>

                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 border-3 border-black bg-[#F0F9FF] shadow-[4px_4px_0px_#000]">
                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            onClick={() => {
                                setOnly24h(!only24h)
                                setCurrentPage(1)
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase border-2 border-black cursor-pointer transition-all ${
                                only24h
                                    ? "bg-[#7DD3FC] text-black shadow-[2px_2px_0px_#000]"
                                    : "bg-white text-black hover:bg-white/80"
                            }`}
                        >
                            <span className={`w-4 h-4 border-2 border-black flex items-center justify-center ${only24h ? "bg-black text-white" : "bg-white"}`}>
                                {only24h && <Check className="w-3 h-3 stroke-[3px]" />}
                            </span>
                            <span>⚡ EXPÉDITION 24H</span>
                        </button>

                        <button
                            onClick={() => {
                                setOnlyDiscount(!onlyDiscount)
                                setCurrentPage(1)
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase border-2 border-black cursor-pointer transition-all ${
                                onlyDiscount
                                    ? "bg-[#BAE6FD] text-black shadow-[2px_2px_0px_#000]"
                                    : "bg-white text-black hover:bg-white/80"
                            }`}
                        >
                            <span className={`w-4 h-4 border-2 border-black flex items-center justify-center ${onlyDiscount ? "bg-black text-white" : "bg-white"}`}>
                                {onlyDiscount && <Check className="w-3 h-3 stroke-[3px]" />}
                            </span>
                            <span>🏷️ EN PROMOTION</span>
                        </button>

                        {(selectedBrand !== "TOUTES" || only24h || onlyDiscount || sortBy !== "featured") && (
                            <button
                                onClick={resetFilters}
                                className="flex items-center gap-1.5 text-xs font-black uppercase text-black bg-white px-3 py-1.5 border-2 border-black hover:bg-[#FF4D4D] hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_#000]"
                            >
                                <RefreshCw className="w-3.5 h-3.5" />
                                <span>RÉINITIALISER</span>
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-2 self-end md:self-auto">
                        <label htmlFor="sort-select" className="text-xs font-black uppercase tracking-wider text-black">
                            TRIER PAR :
                        </label>
                        <select
                            id="sort-select"
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value as any)
                                setCurrentPage(1)
                            }}
                            className="bg-white text-black font-black text-xs uppercase px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_#000] outline-none cursor-pointer focus:bg-[#BAE6FD]"
                        >
                            <option value="featured">✦ EN VEDETTE</option>
                            <option value="price-asc">PRIX CROISSANT (€ → €€€)</option>
                            <option value="price-desc">PRIX DÉCROISSANT (€€€ → €)</option>
                            <option value="discount">MEILLEURES REMISES (%)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Grille */}
            {currentProducts.length > 0 ? (
                <>
                    <ProductGrid products={currentProducts} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </>
            ) : (
                <div className="text-center py-20 border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-8">
                    <div className="inline-block bg-[#BAE6FD] border-2 border-black p-4 mb-4 shadow-[4px_4px_0px_#000] rotate-3">
                        <SlidersHorizontal className="w-8 h-8 stroke-[3px]" />
                    </div>
                    <h3 className="text-2xl font-black uppercase mb-2">AUCUN VÊTEMENT TROUVÉ</h3>
                    <p className="text-sm font-bold text-black/70 mb-6">
                        Essayez de réinitialiser vos filtres pour découvrir toutes nos pièces streetwear.
                    </p>
                    <button
                        onClick={resetFilters}
                        className="bg-[#7DD3FC] text-black border-3 border-black px-6 py-3 font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer transition-all"
                    >
                        VOIR TOUT LE STREETWEAR
                    </button>
                </div>
            )}

        </div>
    )
}
