"use client"

const brands = [
    { name: "NIKE", links: ["Dunk Low", "Nike SB", "Nike Mind 001", "Nike x Travis Scott", "Dunk High", "Air Force 1", "Air Max 1", "Voir Tout"] },
    { name: "ADIDAS", links: ["Adidas Campus 00S", "Adidas Samba", "Adidas Gazelle", "Adidas Spezial", "Voir Tout"] },
    { name: "UGG", links: ["Ugg Tazz", "Ugg Tasman", "Ugg Lowmel", "Ugg Ultra Mini", "Voir Tout"] },
    { name: "ASICS", links: ["Asics Gel-NYC", "Asics Gel-Kayano", "Asics Gel-1130", "Voir Tout"] },
    { name: "NEW BALANCE", links: ["New Balance 2002R", "New Balance 9060", "New Balance 1906R", "New Balance 550", "Voir Tout"] },
    { name: "JORDAN", links: ["Jordan 1 Low", "Jordan 1 Mid", "Jordan 3", "Jordan 4", "Jordan 11", "Voir Tout"] },
    { name: "YEEZY", links: ["Yeezy 350", "Yeezy 500", "Yeezy 700", "Voir Tout"] },
    { name: "OTHER", links: ["Birkenstock", "Salomon", "Voir Tout"] },
]

export default function MegaMenu() {
    return (
        <div className="absolute left-0 w-full bg-white text-black shadow-xl py-8 px-30 z-50">
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