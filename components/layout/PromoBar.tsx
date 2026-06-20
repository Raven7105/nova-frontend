"use client"


export default function PromoBar() {
    return (
        <div className="bg-black text-white text-xs font-medium py-3 overflow-hidden">
            <div className="flex whitespace-nowrap animate-ticker">
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="flex items-center gap-16 mx-8">
                        <span>FRENCH MONTH JUSQU'À -50%</span>
                        <span>✦</span>
                        <span>FRENCH MONTH JUSQU'À -50% + LIVRAISON OFFERTE</span>
                        <span>✦</span>
                    </span>
                ))}
            </div>
        </div>
    )
}