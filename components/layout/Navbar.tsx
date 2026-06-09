"use client"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Search, User, ShoppingBag } from "lucide-react"
import { useState } from "react"
import SneakersMenu from "./menus/Sneakears"
import ClothesMenu from "./menus/Clothes"
import LivraisonMenu from "./menus/Livraison"
import NouveautesMenu from "./menus/Nouveautes"

const navlinks = [
    { label: "SNEAKERS", href: "/collections/sneakers" },
    { label: "CLOTHES", href: "/collections/clothes" },
    { label: "LIVRAISON", href: "collections/livraison" },
    { label: "NOUVEAUTÉS", href: "collections/nouveautes" },
]

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    return (
        <div className="relative">

            <nav
                className="bg-black text-white h-20 flex items-center justify-between px-16"
                onMouseEnter={() => setActiveMenu(null)}
            >

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg tracking-widest">
                    <span>WE</span>
                    <Image
                        src="images/novalogo.svg"
                        alt="Nova"
                        width={0}
                        height={0}
                        style={{ width: "auto", height: "30px" }}
                        className="invert"
                    />
                    <span>HAVE IT</span>
                </Link>

                {/* Liens */}
                <div className="flex space-x-8">
                    {navlinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={(e) => {
                                e.stopPropagation()
                                setActiveMenu(link.label)
                            }}
                            className="text-sm font-medium transition-all duration-200 pb-1 relative"
                        >
                            {link.label}
                            <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${activeMenu === link.label ? "w-full" : "w-0"
                                }`} />
                        </Link>
                    ))}
                </div>

                {/* Icônes droite */}
                <div
                    className="flex items-center space-x-6"
                    onMouseEnter={() => setActiveMenu(null)}
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-white text-sm cursor-pointer">
                            <Globe className="w-4 h-4" />
                            <span>Français</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
                            <DropdownMenuItem>🇬🇧 English</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Search className="w-5 h-5 text-white cursor-pointer" />
                    <User className="w-5 h-5 text-white cursor-pointer" />
                    <ShoppingBag className="w-5 h-5 text-white cursor-pointer" />
                </div>

            </nav>

            {/* Menus */}
            <div
                onMouseLeave={() => setActiveMenu(null)}
                className={`transition-all duration-200 ease-in-out overflow-hidden ${activeMenu && ["SNEAKERS", "CLOTHES", "LIVRAISON","NOUVEAUTÉS"].includes(activeMenu)
                        ? "opacity-100 max-h-96"
                        : "opacity-0 max-h-0 pointer-events-none"
                    }`}
            >
                {activeMenu === "SNEAKERS" && <SneakersMenu />}
                {activeMenu === "CLOTHES" && <ClothesMenu />}
                {activeMenu === "LIVRAISON" && <LivraisonMenu />}
                {activeMenu === "NOUVEAUTÉS" && <NouveautesMenu />}
            </div>

        </div>
    )
}