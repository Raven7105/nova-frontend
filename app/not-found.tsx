import React from "react"
import Link from "next/link"
import { ArrowRight, Search, Home } from "lucide-react"

export default function NotFound() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20 text-center space-y-8 animate-fade-up">
            
            {/* Grand badge 404 Néo-brutaliste */}
            <div className="inline-block bg-[#BAE6FD] border-4 border-black p-8 sm:p-12 shadow-[10px_10px_0px_#000] -rotate-2">
                <span className="text-6xl sm:text-9xl font-black tracking-tighter text-black">
                    404
                </span>
            </div>

            <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#7DD3FC] border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
                    <span>PAGE OU ARTICLE INTROUVABLE</span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
                    CETTE RÉFÉRENCE N'EST PAS DANS L'ARCHIVE
                </h1>

                <p className="text-sm sm:text-base font-bold text-black/70 max-w-lg mx-auto">
                    Le lien que vous avez suivi a peut-être expiré, ou cette paire en édition limitée a été retirée de notre inventaire.
                </p>
            </div>

            {/* Actions de redirection */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7DD3FC] text-black border-4 border-black px-8 py-4 font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-1 active:translate-y-1 transition-all"
                >
                    <Home className="w-4 h-4 stroke-[3px]" />
                    <span>RETOURNER À L'ACCUEIL</span>
                </Link>

                <Link
                    href="/collections/sneakers"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black border-4 border-black px-8 py-4 font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_#000] hover:bg-[#F0F9FF] transition-all"
                >
                    <span>VOIR TOUTES LES SNEAKERS</span>
                    <ArrowRight className="w-4 h-4 stroke-[3px]" />
                </Link>
            </div>

        </div>
    )
}
