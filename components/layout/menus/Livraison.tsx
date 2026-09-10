"use client"
import { Truck, Clock, Store } from "lucide-react"
import Link from "next/link"

const deliveryOptions = [
    {
        icon: Clock,
        title: "COURSIER EXPRESS LOMÉ",
        desc: "Livraison directe à domicile ou bureau dans tous les quartiers de Lomé (Agoè, Tokoin, Bè, etc.).",
        badge: "OFFERTE DÈS 50 000 FCFA",
        color: "bg-[#7DD3FC]",
        href: "/collections/livraison-24h",
    },
    {
        icon: Truck,
        title: "EXPÉDITION INTÉRIEUR TOGO",
        desc: "Envoi rapide et sécurisé vers Kara, Sokodé, Kpalimé, Atakpamé et Dapaong via transporteurs.",
        badge: "TOUT LE TOGO 🇹🇬",
        color: "bg-[#BAE6FD]",
        href: "/faq",
    },
    {
        icon: Store,
        title: "RETRAIT EN BOUTIQUE À LOMÉ",
        desc: "Venez essayer votre paire et régler en boutique à Lomé en toute sérénité.",
        badge: "100% GRATUIT",
        color: "bg-white",
        href: "/contact",
    },
]

export default function MegaMenu() {
    return (
        <div className="w-full bg-white text-black py-8 px-8 md:px-16 border-t-2 border-black">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {deliveryOptions.map((opt, i) => (
                        <div
                            key={opt.title}
                            className="border-3 border-black p-5 shadow-[4px_4px_0px_#000] bg-white animate-fade-up opacity-0"
                            style={{
                                animationDelay: `${i * 60}ms`,
                                animationFillMode: "forwards",
                                animationDuration: "250ms"
                            }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="p-2 bg-[#BAE6FD] border-2 border-black shadow-[2px_2px_0px_#000]">
                                    <opt.icon className="w-5 h-5 stroke-[2.5px]" />
                                </span>
                                <span className={`text-[10px] font-black uppercase px-2 py-0.5 border border-black ${opt.color}`}>
                                    {opt.badge}
                                </span>
                            </div>
                            <h4 className="font-black text-sm uppercase mb-1.5">{opt.title}</h4>
                            <p className="text-xs font-bold text-black/70 leading-relaxed mb-4">{opt.desc}</p>
                            <Link
                                href={opt.href}
                                className="inline-block text-xs font-black uppercase bg-black text-white px-3 py-1.5 border border-black hover:bg-[#7DD3FC] hover:text-black transition-colors"
                            >
                                En savoir plus →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}