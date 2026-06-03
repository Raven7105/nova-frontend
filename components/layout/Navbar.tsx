"use client"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Search, User, ShoppingBag } from "lucide-react"
import { useState } from "react"
import MegaMenu from "./MegaMenu"

const navlinks = [
    { label: "SNEAKERS", href: "/collections/sneakers" },
    { label: "STREETWEAR", href: "/collections/streetwear" },
    { label: "COLLECTIBLES", href: "/collections/collectibles" },
    { label: "LIVRAISON 48H", href: "/livraison" },
    { label: "NOUVEAUTÉS", href: "/nouveautes" },
]

export default function Navbar() {
    const [megaMenuOpen, setMegaMenuOpen] = useState(false)

    return (
        <div className="relative">
            <nav className="bg-black text-white h-20 flex items-center justify-between px-16">

                {/* Logo — ferme le megamenu au hover */}
                <Link
                    href="/"
                    onMouseEnter={() => setMegaMenuOpen(false)}
                    className="flex items-center gap-2 text-white font-bold text-lg tracking-widest"
                >
                    <span>WE</span>
                    <Image
                        src="/novalogo.svg"
                        alt="Nova"
                        width={0}
                        height={0}
                        style={{ width: "auto", height: "30px" }}
                        className="invert"
                    />
                    <span>HAVE IT</span>
                </Link>
                {/* Liens */}
                <div
                    className="flex space-x-8"
                    onMouseEnter={() => setMegaMenuOpen(false)}
                >
                    {navlinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={(e) => {
                                e.stopPropagation()
                                link.label === "SNEAKERS"
                                    ? setMegaMenuOpen(true)
                                    : setMegaMenuOpen(false)
                            }}
                            className="text-sm font-medium transition-all duration-200 pb-1 relative"
                        >
                            {link.label}
                            {link.label === "SNEAKERS" && (
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${megaMenuOpen ? "w-full" : "w-0"
                                    }`} />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Icônes droite — ferme le megamenu au hover */}
                <div
                    className="flex items-center space-x-6"
                    onMouseEnter={() => setMegaMenuOpen(false)}
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

            {/* MegaMenu */}
            <div
                onMouseLeave={() => setMegaMenuOpen(false)}
                className={`transition-all duration-200 ease-in-out overflow-hidden ${megaMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 pointer-events-none"
                    }`}
            >
                <MegaMenu />
            </div>

        </div>
    )
}