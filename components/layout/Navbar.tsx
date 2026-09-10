"use client"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Globe, Search, User, ShoppingBag, Menu, Heart, MessageCircle } from "lucide-react"
import { useState } from "react"
import SneakersMenu from "./menus/Sneakears"
import ClothesMenu from "./menus/Clothes"
import LivraisonMenu from "./menus/Livraison"
import NouveautesMenu from "./menus/Nouveautes"
import { useCart } from "@/context/CartContext"
import { useWishlist } from "@/context/WishlistContext"
import SearchModal from "@/components/search/SearchModal"
import AccountModal from "@/components/account/AccountModal"
import { getWhatsAppUrl } from "@/lib/config"

const navlinks = [
    { label: "SNEAKERS", href: "/collections/sneakers" },
    { label: "CLOTHES", href: "/collections/clothes" },
    { label: "24H CHRONO", href: "/collections/livraison-24h" },
    { label: "NOUVEAUTÉS", href: "/collections/nouveautes" },
]

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isAccountOpen, setIsAccountOpen] = useState(false)

    const { itemCount, openCart } = useCart()
    const { wishlistCount } = useWishlist()

    return (
        <div className="relative z-40 bg-white">

            <nav
                className="bg-white text-black border-b-4 border-black h-20 flex items-center justify-between px-6 md:px-12"
                onMouseEnter={() => setActiveMenu(null)}
            >

                {/* Logo Néo-brutaliste */}
                <Link
                    href="/"
                    className="flex items-center gap-2 border-3 border-black bg-white px-3.5 py-1.5 shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] -rotate-1 hover:rotate-0 transition-transform"
                >
                    <span className="font-black text-xs md:text-sm tracking-widest uppercase">WE</span>
                    <Image
                        src="/images/novalogo.svg"
                        alt="Nova"
                        width={80}
                        height={24}
                        className="h-6 w-auto"
                    />
                    <span className="bg-[#7DD3FC] text-black px-1.5 py-0.5 border border-black font-black text-xs tracking-wider uppercase">
                        HAVE IT
                    </span>
                </Link>

                {/* Liens de navigation */}
                <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
                    {navlinks.map((link) => {
                        const isActive = activeMenu === link.label
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onMouseEnter={(e) => {
                                    e.stopPropagation()
                                    setActiveMenu(link.label)
                                }}
                                className={`text-sm font-black uppercase tracking-wider px-3 py-1.5 transition-all border-2 ${
                                    isActive
                                        ? "bg-[#BAE6FD] border-black shadow-[3px_3px_0px_#000] -translate-y-0.5"
                                        : "border-transparent hover:border-black hover:bg-[#BAE6FD] hover:shadow-[3px_3px_0px_#000]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </div>

                {/* Icônes droite tactiles */}
                <div
                    className="flex items-center space-x-2.5 sm:space-x-3"
                    onMouseEnter={() => setActiveMenu(null)}
                >
                    <div className="hidden sm:flex items-center gap-1.5 text-xs font-black uppercase border-3 border-black bg-white px-2.5 py-1.5 shadow-[3px_3px_0px_#000]">
                        <Globe className="w-4 h-4 stroke-[2.5px]" />
                        <span>FCFA</span>
                    </div>

                    {/* Raccourci WhatsApp rapide */}
                    <a
                        href={getWhatsAppUrl("Bonjour Nova !")}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contacter sur WhatsApp"
                        className="hidden md:flex items-center gap-1.5 border-3 border-black bg-[#25D366] text-white px-2.5 py-1.5 text-xs font-black uppercase shadow-[3px_3px_0px_#000] hover:bg-[#1ebd5b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    >
                        <MessageCircle className="w-4 h-4 stroke-[2.5px]" />
                        <span>WHATSAPP</span>
                    </a>

                    {/* Bouton Recherche */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        aria-label="Recherche"
                        className="border-3 border-black bg-white p-2 shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                    >
                        <Search className="w-4 h-4 text-black stroke-[3px]" />
                    </button>

                    {/* Bouton Favoris / Wishlist */}
                    <Link
                        href="/wishlist"
                        aria-label="Mes favoris"
                        className="border-3 border-black bg-white p-2 shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer relative"
                    >
                        <Heart className={`w-4 h-4 text-black stroke-[2.5px] ${wishlistCount > 0 ? "fill-[#FF4D4D] text-[#FF4D4D]" : ""}`} />
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#FF4D4D] text-white text-[10px] font-black px-1.5 py-0.2 border border-black shadow-[1px_1px_0px_#000]">
                                {wishlistCount}
                            </span>
                        )}
                    </Link>

                    {/* Bouton Mon Compte */}
                    <button
                        onClick={() => setIsAccountOpen(true)}
                        aria-label="Mon compte"
                        className="border-3 border-black bg-white p-2 shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                    >
                        <User className="w-4 h-4 text-black stroke-[3px]" />
                    </button>

                    {/* Bouton Panier interactif */}
                    <button
                        onClick={openCart}
                        aria-label="Panier"
                        className="border-3 border-black bg-[#7DD3FC] p-2 shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer relative"
                    >
                        <ShoppingBag className="w-4 h-4 text-black stroke-[3px]" />
                        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-black px-1.5 py-0.2 border border-black shadow-[1px_1px_0px_#000]">
                            {itemCount}
                        </span>
                    </button>

                    {/* Bouton Menu Mobile Néo-brutaliste */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    aria-label="Ouvrir le menu"
                                    className="border-3 border-black bg-white p-2 shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                                >
                                    <Menu className="w-5 h-5 text-black stroke-[3px]" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-white flex flex-col justify-between">
                                <div>
                                    <div className="mb-6 pb-4 border-b-3 border-black flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
                                            <span>NOVA // NAVIGATION</span>
                                        </div>
                                    </div>

                                    {/* Liens Mobile */}
                                    <div className="flex flex-col gap-3">
                                        {navlinks.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="border-3 border-black bg-white p-3.5 font-black text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:bg-[#7DD3FC] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-between"
                                            >
                                                <span>{link.label}</span>
                                                <span className="text-xs bg-[#BAE6FD] px-1.5 py-0.5 border border-black">→</span>
                                            </Link>
                                        ))}
                                        <Link
                                            href="/wishlist"
                                            className="border-3 border-black bg-[#F0F9FF] p-3.5 font-black text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD] transition-all flex items-center justify-between"
                                        >
                                            <span className="flex items-center gap-2">
                                                <Heart className="w-4 h-4 fill-[#FF4D4D]" /> MES FAVORIS ({wishlistCount})
                                            </span>
                                            <span className="text-xs bg-white px-1.5 py-0.5 border border-black">→</span>
                                        </Link>
                                    </div>

                                    <div className="mt-8 p-4 border-3 border-black bg-[#F0F9FF] shadow-[3px_3px_0px_#000]">
                                        <div className="text-xs font-black uppercase mb-1">⚡ EXPÉDITION 24H</div>
                                        <div className="text-[11px] font-bold text-black/70">Toutes les paires en stock expédiées le jour même avant 14h.</div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t-3 border-black flex items-center justify-between text-xs font-black">
                                    <span>NOVA ARCHIVE</span>
                                    <span className="bg-black text-white px-2 py-0.5 border border-black">2026</span>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

            </nav>

            {/* Méga-Menus Néo-brutalistes */}
            <div
                onMouseLeave={() => setActiveMenu(null)}
                className={`transition-all duration-200 ease-in-out overflow-hidden border-b-4 border-black shadow-[8px_8px_0px_#000] ${
                    activeMenu && ["SNEAKERS", "CLOTHES", "LIVRAISON", "NOUVEAUTÉS"].includes(activeMenu)
                        ? "opacity-100 max-h-[500px]"
                        : "opacity-0 max-h-0 pointer-events-none border-b-0"
                }`}
            >
                {activeMenu === "SNEAKERS" && <SneakersMenu />}
                {activeMenu === "CLOTHES" && <ClothesMenu />}
                {activeMenu === "LIVRAISON" && <LivraisonMenu />}
                {activeMenu === "NOUVEAUTÉS" && <NouveautesMenu />}
            </div>

            {/* Modals globaux */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <AccountModal isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />

        </div>
    )
}