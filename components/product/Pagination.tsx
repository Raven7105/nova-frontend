"use client"
import { ArrowRight } from "lucide-react"

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
        <div className="flex justify-center mt-12">
            <div className="flex border border-gray-200 rounded-full overflow-hidden">
                {getPages().map((page, i) => (
                    <button
                        key={i}
                        onClick={() => typeof page === "number" && onPageChange(page)}
                        disabled={page === "..."}
                        className={`px-4 py-3 text-sm font-medium border-r border-gray-200 last:border-r-0 transition-colors ${page === currentPage
                            ? "border-2 border-black rounded-full"
                            : "hover:bg-gray-50"
                            }`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}