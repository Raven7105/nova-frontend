"use client"
import Link from "next/link"

const brands = [
    { name: "NIKE", links: ["Dunk Low", "Nike SB", "Nike Mind 001", "Nike x Travis Scott", "Dunk High", "Air Force 1", "Air Max 1", "Voir Tout"] },
    { name: "ADIDAS", links: ["Adidas Campus 00S", "Adidas Samba", "Adidas Gazelle", "Adidas Spezial", "Voir Tout"] },
    { name: "UGG", links: ["Ugg Tazz", "Ugg Tasman", "Ugg Lowmel", "Ugg Ultra Mini", "Voir Tout"] },
    { name: "ASICS", links: ["Asics Gel-NYC", "Asics Gel-Kayano", "Asics Gel-1130", "Voir Tout"] },
    { name: "NEW BALANCE", links: ["New Balance 2002R", "New Balance 9060", "New Balance 1906R", "New Balance 550", "Voir Tout"] },
    { name: "JORDAN", links: ["Jordan 1 Low", "Jordan 1 Mid", "Jordan 3", "Jordan 4", "Jordan 11", "Voir Tout"] },
    { name: "YEEZY", links: ["Yeezy 350", "Yeezy 500", "Yeezy 700", "Voir Tout"] },
    { name: "AUTRES", links: ["Birkenstock", "Salomon", "Voir Tout"] },
]

export default function MegaMenu() {
    return (
        <div className="w-full bg-white text-black py-8 px-8 md:px-16 border-t-2 border-black">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 max-w-7xl mx-auto">
                {brands.map((brand, i) => (
                    <div
                        key={brand.name}
                        className="animate-fade-up opacity-0"
                        style={{
                            animationDelay: `${i * 40}ms`,
                            animationFillMode: "forwards",
                            animationDuration: "250ms"
                        }}
                    >
                        <div className="inline-block bg-[#BAE6FD] border-2 border-black px-2 py-0.5 font-black text-xs uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#000]">
                            {brand.name}
                        </div>
                        <ul className="space-y-1.5">
                            {brand.links.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="/collections/sneakers"
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