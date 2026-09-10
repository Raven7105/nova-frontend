"use client"
import { ArrowLeft, ArrowRight } from "lucide-react"

type Props = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {

    // Génère les numéros à afficher : 1, 2, 3, ..., dernière page
    const getPages = () => {
        const pages: (number | "...")[] = []
        pages.push(1)
        if (currentPage > 3) pages.push("...")

        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i)
        }

        if (currentPage < totalPages - 2) pages.push("...")
        if (totalPages > 1) pages.push(totalPages)

        return pages
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t-4 border-black">
            {/* Indicateur de page */}
            <div className="bg-[#BAE6FD] text-black border-2 border-black px-3.5 py-1.5 font-black text-xs uppercase tracking-widest shadow-[3px_3px_0px_#000] -rotate-1">
                PAGE {currentPage} SUR {totalPages}
            </div>

            {/* Clavier mécanique de pagination */}
            <div className="flex items-center gap-2">
                {/* Bouton Précédent */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Page précédente"
                    className="flex items-center gap-1.5 border-3 border-black bg-white px-3 py-2 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 stroke-[3px]" />
                    <span className="hidden sm:inline">PRÉC</span>
                </button>

                {/* Numéros de page */}
                <div className="flex items-center gap-1.5">
                    {getPages().map((page, i) => (
                        page === "..." ? (
                            <span key={`dots-${i}`} className="px-2 font-black text-black select-none">
                                ...
                            </span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => onPageChange(page)}
                                className={`w-10 h-10 border-3 border-black text-xs font-black uppercase flex items-center justify-center transition-all cursor-pointer ${
                                    page === currentPage
                                        ? "bg-[#7DD3FC] text-black shadow-[4px_4px_0px_#000] -translate-y-0.5"
                                        : "bg-white text-black shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                                }`}
                            >
                                {page}
                            </button>
                        )
                    ))}
                </div>

                {/* Bouton Suivant */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Page suivante"
                    className="flex items-center gap-1.5 border-3 border-black bg-[#7DD3FC] px-3 py-2 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                >
                    <span className="hidden sm:inline">SUIV</span>
                    <ArrowRight className="w-4 h-4 stroke-[3px]" />
                </button>
            </div>
        </div>
    )
}