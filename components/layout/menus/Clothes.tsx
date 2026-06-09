"use client"
import link from "next/link"


const brands = [
    { name: "LES MARQUES", links: ["Denim Tears", "Fear of God Essentials", "Stussy", "Kaws", "Ami paris", "Corteiz", "Voir Tout"] },
    { name: "T-SHIRTS", links: [] },
    {name: "SWEATSHIRTS", links: []},
    {name: "JOGGINGS", links: []}
    
]

export default function MegaMenu() {
    return (
        <div className="absolute left-0 w-full bg-white text-black shadow-xl py-8 px-70 z-50">
            <div className="flex justify-between">
                {brands.map((brand, i) => (
                    <div
                        key={brand.name}
                        className="animate-fade-up opacity-0"
                        style={{
                            animationDelay: `${i * 60}ms`,
                            animationFillMode: "forwards",
                            animationDuration: "350ms"
                        }}
                    >
                        <h3 className="font-bold text-sm mb-3">{brand.name}</h3>
                        <ul className="space-y-2">
                            {brand.links.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

