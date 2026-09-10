"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X, Sparkles, ArrowRight, Zap, Tag } from "lucide-react"
import { allProducts } from "@/lib/data"
import { Product } from "@/types"

type SearchModalProps = {
    isOpen: boolean
    onClose: () => void
}

const QUICK_FILTERS = ["TOUT", "NIKE", "JORDAN", "ASICS", "NEW BALANCE", "STÜSSY", "24H", "PROMOS"]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState("TOUT")
    const inputRef = useRef<HTMLInputElement>(null)

    // Raccourci Ctrl+K / Cmd+K et touche Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                // Toggle via callback if needed
            }
            if (e.key === "Escape" && isOpen) {
                onClose()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose])

    // Focus automatique à l'ouverture
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50)
        } else {
            setQuery("")
            setActiveFilter("TOUT")
        }
    }, [isOpen])

    if (!isOpen) return null

    // Filtrage dynamique
    const filteredResults = allProducts.filter((product) => {
        const matchesQuery =
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase()) ||
            (product.category && product.category.toLowerCase().includes(query.toLowerCase()))

        if (!matchesQuery) return false

        if (activeFilter === "24H") return product.is24h
        if (activeFilter === "PROMOS") return product.discount > 0
        if (activeFilter !== "TOUT") {
            return product.brand.toUpperCase().includes(activeFilter)
        }
        return true
    })

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            />

            {/* Modal Néo-brutaliste */}
            <div className="relative z-10 w-full max-w-2xl bg-white border-4 border-black shadow-[10px_10px_0px_#000] overflow-hidden animate-fade-up">
                
                {/* Barre de recherche */}
                <div className="p-4 sm:p-6 border-b-4 border-black bg-white flex items-center gap-3">
                    <div className="bg-[#BAE6FD] border-2 border-black p-2 shadow-[2px_2px_0px_#000]">
                        <Search className="w-5 h-5 stroke-[3px] text-black" />
                    </div>

                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="RECHERCHER UNE PAIRE, MARQUE, STREETWEAR..."
                        className="flex-1 bg-transparent text-black placeholder:text-black/50 font-black text-sm sm:text-base outline-none uppercase"
                    />

                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="text-xs font-black uppercase text-black/60 hover:text-black"
                        >
                            EFFACER
                        </button>
                    )}

                    <button
                        onClick={onClose}
                        aria-label="Fermer la recherche"
                        className="w-9 h-9 border-2 border-black bg-white text-black font-black flex items-center justify-center shadow-[2px_2px_0px_#000] hover:bg-[#FF4D4D] hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4 stroke-[3px]" />
                    </button>
                </div>

                {/* Filtres rapides en puces */}
                <div className="p-3 border-b-3 border-black bg-[#F0F9FF] flex items-center gap-2 overflow-x-auto scrollbar-hide">
                    <span className="text-[10px] font-black uppercase tracking-wider text-black/70 whitespace-nowrap pl-2">
                        TAGS :
                    </span>
                    {QUICK_FILTERS.map((tag) => {
                        const isSelected = activeFilter === tag
                        return (
                            <button
                                key={tag}
                                onClick={() => setActiveFilter(tag)}
                                className={`text-[11px] font-black uppercase px-2.5 py-1 border-2 border-black transition-all whitespace-nowrap cursor-pointer ${
                                    isSelected
                                        ? "bg-[#7DD3FC] text-black shadow-[2px_2px_0px_#000] -translate-y-0.5"
                                        : "bg-white text-black hover:bg-[#BAE6FD]"
                                }`}
                            >
                                {tag}
                            </button>
                        )
                    })}
                </div>

                {/* Résultats de recherche */}
                <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
                    {filteredResults.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="inline-block bg-[#BAE6FD] border-2 border-black p-3 mb-3 shadow-[3px_3px_0px_#000]">
                                <Search className="w-6 h-6 stroke-[3px]" />
                            </div>
                            <h4 className="text-sm font-black uppercase mb-1">AUCUN RÉSULTAT TROUVÉ</h4>
                            <p className="text-xs font-bold text-black/60">
                                Essayez avec des termes plus généraux comme "Jordan", "Dunk", "Hoodie" ou "Samba".
                            </p>
                        </div>
                    ) : (
                        filteredResults.slice(0, 10).map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                onClick={onClose}
                                className="border-3 border-black bg-white p-3 shadow-[3px_3px_0px_#000] flex items-center justify-between gap-4 hover:bg-[#BAE6FD] hover:shadow-[5px_5px_0px_#000] transition-all group"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="relative w-14 h-14 bg-[#F0F9FF] border-2 border-black shrink-0 flex items-center justify-center p-1">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            sizes="60px"
                                            className="object-contain p-1"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <span className="bg-black text-white text-[9px] font-black uppercase px-1.5 py-0.2 border border-black">
                                                {product.brand}
                                            </span>
                                            {product.is24h && (
                                                <span className="bg-[#7DD3FC] text-black text-[9px] font-black uppercase px-1.5 py-0.2 border border-black flex items-center gap-0.5">
                                                    <Zap className="w-2.5 h-2.5 fill-black" /> 24H
                                                </span>
                                            )}
                                        </div>
                                        <h4 className="text-xs font-black uppercase truncate mt-0.5 group-hover:text-black">
                                            {product.name}
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 shrink-0">
                                    <div className="text-right">
                                        <div className="text-sm font-black text-black">
                                            {product.price.toFixed(2)} €
                                        </div>
                                        {product.discount > 0 && (
                                            <span className="text-[10px] font-bold text-black/50 line-through">
                                                {product.originalPrice.toFixed(2)} €
                                            </span>
                                        )}
                                    </div>
                                    <div className="w-7 h-7 border-2 border-black bg-white flex items-center justify-center group-hover:bg-[#7DD3FC] transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5 stroke-[3px]" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                {/* Footer du modal */}
                <div className="p-3 border-t-3 border-black bg-white flex items-center justify-between text-[11px] font-black uppercase text-black/70">
                    <span>
                        {filteredResults.length} {filteredResults.length > 1 ? "résultats" : "résultat"}
                    </span>
                    <span className="hidden sm:inline">APPPUYEZ SUR ÉCHAP POUR FERMER</span>
                </div>

            </div>
        </div>
    )
}
