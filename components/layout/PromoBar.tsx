"use client"

export default function PromoBar() {
    return (
        <div className="bg-[#7DD3FC] text-black text-xs md:text-sm font-black uppercase tracking-widest py-3.5 overflow-hidden border-y-4 border-black select-none shadow-[0px_4px_0px_#000]">
            <div className="flex whitespace-nowrap animate-ticker items-center">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-10 mx-6">
                        <span className="bg-black text-white px-2 py-0.5 text-xs font-black">
                            SPECIAL DROP
                        </span>
                        <span>FRENCH MONTH // JUSQU'À -50%</span>
                        <span className="text-black font-black text-base">✦</span>
                        <span>LIVRAISON 24H DISPONIBLE SUR LES SNEAKERS</span>
                        <span className="text-black font-black text-base">✦</span>
                        <span>100% AUTHENTIQUE CERTIFIÉ NOVA</span>
                        <span className="text-black font-black text-base">✦</span>
                    </div>
                ))}
            </div>
        </div>
    )
}