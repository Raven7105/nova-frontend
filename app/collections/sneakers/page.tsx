"use client"
import { useState } from "react"
import { allSneakersProducts } from "@/lib/data"
import ProductGrid from "@/components/product/ProductGrid"
import Pagination from "@/components/product/Pagination"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import Link from "next/link"

const ITEMS_PER_PAGE = 30

export default function SneakersCollectionPage() {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(allSneakersProducts.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentProducts = allSneakersProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <div className="max-w-7xl mx-auto px-8 py-8">

            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-12">
                <Link href="/" className="hover:underline">Accueil</Link>
                <span className="mx-2">/</span>
                <span>Sneakers modernes et confortables</span>
            </div>

            {/* Titre */}
            <h1 className="text-5xl font-bold text-center uppercase tracking-wide mb-12 leading-tight">
                Sneakers Modernes et<br />Confortables
            </h1>

            {/* Barre filtres */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-sm font-medium">
                        <SlidersHorizontal className="w-4 h-4" />
                        Afficher les filtres
                    </button>
                    <span className="text-sm text-gray-500">
                        {allSneakersProducts.length} produits
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Trier par</span>
                    <button className="flex items-center gap-1 font-medium">
                        En vedette
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Grille produits */}
            <ProductGrid products={currentProducts} />

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </div>
    )
}