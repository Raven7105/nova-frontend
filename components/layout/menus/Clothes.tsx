"use client"
import Link from "next/link"

const sections = [
    { 
        name: "MARQUES CLÉS", 
        links: ["Denim Tears", "Fear of God Essentials", "Stussy", "Kaws", "Ami Paris", "Corteiz", "Supreme", "Hellstar"] 
    },
    { 
        name: "T-SHIRTS", 
        links: ["T-Shirts Graphiques", "Boxy Fit", "Oversized", "Vintage Wash", "Voir Tout"] 
    },
    { 
        name: "HOODIES & SWEATS", 
        links: ["Hoodies Heavyweight", "Crewnecks", "Zippés", "Kangaroo Pocket", "Voir Tout"] 
    },
    { 
        name: "PANTALONS", 
        links: ["Cargo Pants", "Joggings Molleton", "Denim Baggy", "Shorts Streetwear", "Voir Tout"] 
    },
]

export default function MegaMenu() {
    return (
        <div className="w-full bg-white text-black py-8 px-8 md:px-16 border-t-2 border-black">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {sections.map((sec, i) => (
                    <div
                        key={sec.name}
                        className="animate-fade-up opacity-0"
                        style={{
                            animationDelay: `${i * 50}ms`,
                            animationFillMode: "forwards",
                            animationDuration: "250ms"
                        }}
                    >
                        <div className="inline-block bg-[#BAE6FD] border-2 border-black px-2.5 py-1 font-black text-xs uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#000]">
                            {sec.name}
                        </div>
                        <ul className="space-y-1.5">
                            {sec.links.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="/collections/clothes"
                                        className="text-xs font-bold text-black/80 hover:text-black hover:bg-[#BAE6FD] px-1 py-0.5 inline-block transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

