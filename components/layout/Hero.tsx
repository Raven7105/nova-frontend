"use client"
import Link from "next/link"
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react"

export default function Hero() {
    return (
        <div className="relative w-full h-[82vh] min-h-[580px] overflow-hidden border-b-4 border-black">

            {/* Vidéo fond */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
            >
                <source src="/vidéos/hero.mp4" type="video/mp4" />
            </video>

            {/* Overlay sombre avec texture */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Badges stickers flottants */}
            <div className="absolute top-8 left-6 md:left-12 z-20 hidden sm:flex items-center gap-3">
                <div className="bg-[#BAE6FD] text-black border-3 border-black px-3 py-1.5 shadow-[4px_4px_0px_#000] font-black uppercase tracking-wider text-xs -rotate-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 stroke-[3px]" />
                    <span>NOVA ARCHIVE // 2026</span>
                </div>
                <div className="bg-white text-black border-3 border-black px-3 py-1.5 shadow-[4px_4px_0px_#000] font-black uppercase tracking-wider text-xs rotate-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 stroke-[3px]" />
                    <span>AUTHENTICITÉ 100% VÉRIFIÉE</span>
                </div>
            </div>

            {/* Badge sticker haut droit */}
            <div className="absolute top-8 right-6 md:right-12 z-20 hidden md:block">
                <div className="bg-[#7DD3FC] text-black border-3 border-black px-3.5 py-1.5 shadow-[4px_4px_0px_#000] font-black uppercase tracking-widest text-xs rotate-2">
                    LIVRAISON 24H EN EUROPE
                </div>
            </div>

            {/* Contenu central */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                <div className="bg-white/90 border-3 border-black px-4 py-1 shadow-[4px_4px_0px_#000] text-black font-black text-xs uppercase tracking-widest mb-4">
                    AUTHENTIQUE SNEAKERS & STREETWEAR
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none max-w-5xl drop-shadow-[4px_4px_0px_#000]">
                    WE HAVE <span className="bg-[#7DD3FC] text-black px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[6px_6px_0px_#000]">WHAT OTHERS</span> CAN'T GET
                </h1>

                <p className="mt-6 text-sm sm:text-base font-bold text-gray-200 max-w-xl bg-black/80 p-2.5 border-2 border-white/40 shadow-[4px_4px_0px_#000]">
                    Dunk, Jordan, Samba, Gel-Kayano, Ugg : accédez aux paires les plus rares du marché, vérifiées et garanties à 100%.
                </p>

                {/* Bouton CTA Néo-brutaliste tactile */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                        href="/collections/sneakers"
                        className="bg-[#7DD3FC] text-black border-4 border-black px-10 py-4 font-black text-sm sm:text-base tracking-[0.2em] uppercase shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-3 cursor-pointer"
                    >
                        <span>EXPLORER LA COLLECTION</span>
                        <ArrowRight className="w-5 h-5 stroke-[3px]" />
                    </Link>
                </div>
            </div>

            {/* Ruban ticker bas de hero */}
            <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 px-4 border-t-4 border-black z-20 flex justify-between items-center text-xs font-black uppercase tracking-wider">
                <span>STOCK DISPONIBLE À LOMÉ 🇹🇬</span>
                <span className="hidden sm:inline">✦ COURSIER EXPRESS 24H ✦</span>
                <span>T-MONEY • FLOOZ • CASH</span>
            </div>

        </div>
    )
}