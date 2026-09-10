"use client"
import { Sparkles, Flame, Zap } from "lucide-react"
import Link from "next/link"

const highlights = [
    {
        icon: Flame,
        tag: "HOT DROP",
        title: "JORDAN 4 BRED REIMAGINED",
        desc: "Restock limité en pointures 40 à 46.",
        price: "171 €",
        link: "/products/air-jordan-4-retro-bred"
    },
    {
        icon: Zap,
        tag: "NOUVEAU",
        title: "ASICS GEL-KAYANO 14",
        desc: "Coloris Midnight White disponible maintenant.",
        price: "144 €",
        link: "/products/asics-gel-kayano-14"
    },
    {
        icon: Sparkles,
        tag: "POPULAIRE",
        title: "ADIDAS SAMBA OG CLOUD",
        desc: "Le classique intemporel enfin de retour en stock.",
        price: "166 €",
        link: "/products/adidas-samba-og"
    },
]

export default function MegaMenu() {
    return (
        <div className="w-full bg-white text-black py-8 px-8 md:px-16 border-t-2 border-black">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-black text-xs uppercase bg-[#7DD3FC] px-2 py-1 border border-black shadow-[2px_2px_0px_#000]">
                        DROPS RÉCENTS & EXCLUSIVITÉS
                    </span>
                    <Link
                        href="/collections/nouveautes"
                        className="text-xs font-black uppercase underline hover:text-black"
                    >
                        Tout voir (30+ paires) →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, i) => (
                        <Link
                            key={item.title}
                            href={item.link}
                            className="group block border-3 border-black p-4 bg-white shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all animate-fade-up opacity-0"
                            style={{
                                animationDelay: `${i * 50}ms`,
                                animationFillMode: "forwards",
                                animationDuration: "250ms"
                            }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="p-1.5 bg-[#BAE6FD] border border-black">
                                    <item.icon className="w-4 h-4 stroke-[2.5px]" />
                                </span>
                                <span className="text-[10px] font-black uppercase bg-black text-white px-1.5 py-0.5">
                                    {item.tag}
                                </span>
                            </div>
                            <h4 className="font-black text-xs uppercase group-hover:underline mb-1">
                                {item.title}
                            </h4>
                            <p className="text-[11px] font-medium text-black/70 mb-3">{item.desc}</p>
                            <div className="font-black text-sm bg-[#BAE6FD] inline-block px-2 py-0.5 border border-black">
                                {item.price}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}