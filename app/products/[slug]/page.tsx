"use client"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { allProducts, sneakersProducts } from "@/lib/data"
import ProductCarousel from "@/components/product/ProductCarousel"
import { useCart } from "@/context/CartContext"
import { useWishlist } from "@/context/WishlistContext"
import { 
    ShieldCheck, 
    Truck, 
    CreditCard, 
    Tag, 
    Timer, 
    ShoppingBag, 
    Sparkles, 
    ChevronDown, 
    Share2, 
    Heart,
    Check
} from "lucide-react"

const DEFAULT_SNEAKER_SIZES = ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"]

export default function ProductDetailPage() {
    const params = useParams()
    const slug = params?.slug as string

    const product = allProducts.find((p) => p.slug === slug) || allProducts[0]

    const availableSizes = product.sizes && product.sizes.length > 0 
        ? product.sizes 
        : (product.category === "clothes" ? ["S", "M", "L", "XL"] : DEFAULT_SNEAKER_SIZES)

    const [selectedSize, setSelectedSize] = useState<string>(availableSizes[0] || "EU 42")
    const [isAdded, setIsAdded] = useState(false)
    const [openAccordion, setOpenAccordion] = useState<string | null>("details")

    const { addToCart } = useCart()
    const { isWishlisted, toggleWishlist } = useWishlist()
    const favorited = isWishlisted(product.id)

    const handleAddToCart = () => {
        addToCart(product, selectedSize, 1)
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    // Suggestions similaires
    const similarProducts = allProducts.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 6)
    const fallbackSimilar = similarProducts.length > 0 ? similarProducts : sneakersProducts

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

            {/* Fil d'Ariane Néo-brutaliste */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap mb-10">
                <Link
                    href="/"
                    className="bg-white text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] transition-colors"
                >
                    ACCUEIL
                </Link>
                <span className="font-black text-black">/</span>
                <Link
                    href={product.category === "clothes" ? "/collections/clothes" : "/collections/sneakers"}
                    className="bg-white text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] transition-colors uppercase"
                >
                    {product.category === "clothes" ? "CLOTHES" : "SNEAKERS"}
                </Link>
                <span className="font-black text-black">/</span>
                <span className="bg-[#BAE6FD] text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] -rotate-1">
                    {product.brand} // {product.name}
                </span>
            </nav>

            {/* Grille principale 2 colonnes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

                {/* COLONNE GAUCHE : Galerie Image Néo-brutaliste */}
                <div className="lg:col-span-7 space-y-4">
                    
                    {/* Cadre principal de l'image */}
                    <div className="relative w-full aspect-[4/3] bg-white border-4 border-black shadow-[8px_8px_0px_#000] flex items-center justify-center p-8 overflow-hidden">
                        {/* Stickers d'accroche */}
                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                            {product.discount > 0 && (
                                <span className="bg-[#BAE6FD] text-black border-3 border-black font-black text-xs md:text-sm px-3 py-1 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 -rotate-3">
                                    <Tag className="w-4 h-4 stroke-[3px]" />
                                    -{product.discount}% DROP SPÉCIAL
                                </span>
                            )}
                            {product.is24h && (
                                <span className="bg-[#7DD3FC] text-black border-3 border-black font-black text-xs px-3 py-1 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 rotate-1">
                                    <Timer className="w-4 h-4 stroke-[3px]" />
                                    EXPÉDITION 24H DISPONIBLE
                                </span>
                            )}
                        </div>

                        <div className="absolute top-4 right-4 z-10">
                            <span className="bg-white text-black border-2 border-black font-black text-xs px-2.5 py-1 shadow-[2px_2px_0px_#000] flex items-center gap-1">
                                <Sparkles className="w-3.5 h-3.5" />
                                CERTIFIÉ NOVA
                            </span>
                        </div>

                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-contain p-8 hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Miniatures d'angles alternatifs */}
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((idx) => (
                            <div
                                key={idx}
                                className={`relative aspect-square bg-white border-3 border-black p-2 shadow-[3px_3px_0px_#000] cursor-pointer transition-all hover:bg-[#BAE6FD] ${
                                    idx === 1 ? "border-black bg-[#BAE6FD] shadow-[4px_4px_0px_#000]" : ""
                                }`}
                            >
                                <Image
                                    src={product.image}
                                    alt={`${product.name} vue ${idx}`}
                                    fill
                                    sizes="120px"
                                    className="object-contain p-2"
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* COLONNE DROITE : Détails d'achat et Sélecteurs */}
                <div className="lg:col-span-5 space-y-6">

                    {/* Marque et Badges */}
                    <div className="flex items-center justify-between gap-3">
                        <span className="bg-black text-white font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#7DD3FC]">
                            {product.brand}
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => toggleWishlist(product.id)}
                                aria-label="Favoris"
                                className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] transition-colors cursor-pointer"
                            >
                                <Heart
                                    className={`w-4 h-4 stroke-[2.5px] transition-colors ${
                                        favorited ? "fill-[#FF4D4D] text-[#FF4D4D]" : "text-black"
                                    }`}
                                />
                            </button>
                            <button
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({ title: product.name, url: window.location.href })
                                    }
                                }}
                                aria-label="Partager"
                                className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] transition-colors cursor-pointer"
                            >
                                <Share2 className="w-4 h-4 stroke-[2.5px]" />
                            </button>
                        </div>
                    </div>

                    {/* Titre Produit */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black leading-tight">
                        {product.name}
                    </h1>

                    {/* Bloc Prix & Économie */}
                    <div className="p-4 bg-white border-4 border-black shadow-[6px_6px_0px_#000] flex items-center justify-between">
                        <div>
                            <span className="text-xs font-black uppercase tracking-wider text-black/60 block mb-0.5">
                                PRIX DIRECT ARCHIVE
                            </span>
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl sm:text-4xl font-black text-black">
                                    {product.price.toFixed(2)} €
                                </span>
                                {product.discount > 0 && (
                                    <span className="text-base line-through font-bold text-black/40">
                                        {product.originalPrice.toFixed(2)} €
                                    </span>
                                )}
                            </div>
                        </div>

                        {product.discount > 0 && (
                            <span className="bg-[#BAE6FD] text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] -rotate-2">
                                ÉCONOMISEZ {(product.originalPrice - product.price).toFixed(0)} €
                            </span>
                        )}
                    </div>

                    {/* Sélecteur de pointures / tailles mécanique */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-black uppercase tracking-wider text-black">
                                {product.category === "clothes" ? "CHOISIR UNE TAILLE :" : "CHOISIR UNE POINTURE (EU) :"}
                            </span>
                            <Link
                                href="/guide-des-tailles"
                                className="text-xs font-black underline uppercase cursor-pointer hover:text-black"
                            >
                                GUIDE DES TAILLES
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                            {availableSizes.map((size) => {
                                const isSelected = selectedSize === size
                                return (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-3 text-xs font-black uppercase border-3 border-black transition-all cursor-pointer ${
                                            isSelected
                                                ? "bg-[#7DD3FC] text-black shadow-[4px_4px_0px_#000] -translate-y-1"
                                                : "bg-white text-black shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Bouton d'action principal CTA */}
                    <div className="pt-2">
                        <button
                            onClick={handleAddToCart}
                            className={`w-full py-5 px-8 border-4 border-black font-black text-sm md:text-base uppercase tracking-[0.15em] flex items-center justify-center gap-3 transition-all cursor-pointer shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none ${
                                isAdded
                                    ? "bg-[#BAE6FD] text-black"
                                    : "bg-[#7DD3FC] text-black hover:bg-[#BAE6FD] hover:shadow-[8px_8px_0px_#000]"
                            }`}
                        >
                            {isAdded ? (
                                <>
                                    <Check className="w-5 h-5 stroke-[3px]" />
                                    <span>AJOUTÉ AU PANIER !</span>
                                </>
                            ) : (
                                <>
                                    <ShoppingBag className="w-5 h-5 stroke-[3px]" />
                                    <span>AJOUTER AU PANIER — {product.price.toFixed(2)} €</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Cartes de réassurance Néo-brutalistes */}
                    <div className="space-y-3 pt-4">
                        <Link
                            href="/authenticite"
                            className="border-3 border-black bg-white p-3.5 shadow-[3px_3px_0px_#000] flex items-center gap-3 hover:bg-[#F0F9FF] transition-colors block"
                        >
                            <span className="p-2 bg-[#BAE6FD] border-2 border-black">
                                <ShieldCheck className="w-4 h-4 stroke-[2.5px]" />
                            </span>
                            <div>
                                <h4 className="text-xs font-black uppercase">AUTHENTICITÉ PHYSIQUE 100% VÉRIFIÉE</h4>
                                <p className="text-[11px] font-bold text-black/70">Scellé d'inviolabilité Nova apposé sur chaque paire.</p>
                            </div>
                        </Link>

                        <div className="border-3 border-black bg-white p-3.5 shadow-[3px_3px_0px_#000] flex items-center gap-3">
                            <span className="p-2 bg-[#7DD3FC] border-2 border-black">
                                <Truck className="w-4 h-4 stroke-[2.5px]" />
                            </span>
                            <div>
                                <h4 className="text-xs font-black uppercase">EXPÉDITION EXPRESS DEPUIS LA FRANCE</h4>
                                <p className="text-[11px] font-bold text-black/70">Livraison offerte dès 180€ en 24h à 48h ouvrées.</p>
                            </div>
                        </div>

                        <div className="border-3 border-black bg-white p-3.5 shadow-[3px_3px_0px_#000] flex items-center gap-3">
                            <span className="p-2 bg-white border-2 border-black">
                                <CreditCard className="w-4 h-4 stroke-[2.5px]" />
                            </span>
                            <div>
                                <h4 className="text-xs font-black uppercase">PAIEMENT 3X OU 4X SANS FRAIS</h4>
                                <p className="text-[11px] font-bold text-black/70">Disponible à l'étape du paiement via Alma & CB.</p>
                            </div>
                        </div>
                    </div>

                    {/* Accordéons d'informations produit */}
                    <div className="border-4 border-black bg-white divide-y-3 divide-black shadow-[4px_4px_0px_#000]">
                        
                        <div>
                            <button
                                onClick={() => setOpenAccordion(openAccordion === "details" ? null : "details")}
                                className="w-full p-4 flex items-center justify-between text-xs font-black uppercase tracking-wider text-left hover:bg-[#F0F9FF] cursor-pointer"
                            >
                                <span>DESCRIPTION & DÉTAILS</span>
                                <ChevronDown className={`w-4 h-4 stroke-[3px] transition-transform ${openAccordion === "details" ? "rotate-180" : ""}`} />
                            </button>
                            {openAccordion === "details" && (
                                <div className="p-4 pt-0 text-xs font-bold text-black/80 leading-relaxed border-t-2 border-black/10">
                                    {product.description || "Modèle iconique sélectionné par Nova Archive. Boîte d'origine, accessoires inclus et certificat d'authenticité papier numéroté fourni avec la commande."}
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                onClick={() => setOpenAccordion(openAccordion === "returns" ? null : "returns")}
                                className="w-full p-4 flex items-center justify-between text-xs font-black uppercase tracking-wider text-left hover:bg-[#F0F9FF] cursor-pointer"
                            >
                                <span>RETOURS & ÉCHANGES SOUS 14 JOURS</span>
                                <ChevronDown className={`w-4 h-4 stroke-[3px] transition-transform ${openAccordion === "returns" ? "rotate-180" : ""}`} />
                            </button>
                            {openAccordion === "returns" && (
                                <div className="p-4 pt-0 text-xs font-bold text-black/80 leading-relaxed border-t-2 border-black/10">
                                    Vous disposez de 14 jours après réception pour effectuer un retour ou un échange gratuitement si le scellé de sécurité n'a pas été retiré.
                                </div>
                            )}
                        </div>

                    </div>

                </div>

            </div>

            {/* Recommandations : Carrousel Néo-brutaliste */}
            <div className="mt-16 pt-8 border-t-4 border-black">
                <ProductCarousel
                    title="VOUS POURRIEZ AUSSI AIMER"
                    products={fallbackSimilar}
                    href={product.category === "clothes" ? "/collections/clothes" : "/collections/sneakers"}
                />
            </div>

        </div>
    )
}
