"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/format"
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, ShieldCheck, Truck, MessageCircle } from "lucide-react"

export default function CartDrawer() {
    const {
        items,
        isOpen,
        closeCart,
        updateQuantity,
        removeFromCart,
        subtotal,
        shipping,
        total,
        freeShippingRemaining,
        freeShippingThreshold,
    } = useCart()

    if (!isOpen) return null

    const progressPercentage = Math.min(100, Math.round(((freeShippingThreshold - freeShippingRemaining) / freeShippingThreshold) * 100))

    // Génération du message WhatsApp récapitulatif pour commande rapide
    const generateWhatsAppOrderUrl = () => {
        const itemsList = items
            .map((item) => `- ${item.product.name} (Taille ${item.size}) x${item.quantity} : ${formatPrice(item.product.price * item.quantity)}`)
            .join("\n")
        const message = `Bonjour Nova Togo !\nJe souhaite passer commande de mon panier :\n\n${itemsList}\n\nSous-total : ${formatPrice(subtotal)}\nLivraison : ${shipping === 0 ? "Offerte" : formatPrice(shipping)}\nTOTAL : ${formatPrice(total)}\n\nJe suis situé(e) à Lomé.`
        return `https://wa.me/22890000000?text=${encodeURIComponent(message)}`
    }

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop sombre */}
            <div
                onClick={closeCart}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-up"
            />

            {/* Volet coulissant Néo-brutaliste */}
            <aside className="relative z-10 w-full max-w-md bg-white border-l-4 border-black h-full flex flex-col shadow-[-8px_0px_0px_#000] overflow-hidden">
                
                {/* En-tête du volet */}
                <div className="p-5 border-b-4 border-black bg-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#BAE6FD] border-2 border-black p-1.5 shadow-[2px_2px_0px_#000]">
                            <ShoppingBag className="w-5 h-5 stroke-[2.5px]" />
                        </div>
                        <div>
                            <h2 className="text-base font-black uppercase tracking-tight">MON PANIER</h2>
                            <span className="text-[11px] font-bold text-black/60 uppercase">
                                {items.length} {items.length > 1 ? "articles différents" : "article"}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={closeCart}
                        aria-label="Fermer le panier"
                        className="w-10 h-10 border-3 border-black bg-white text-black font-black text-sm flex items-center justify-center shadow-[3px_3px_0px_#000] hover:bg-[#FF4D4D] hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5 stroke-[3px]" />
                    </button>
                </div>

                {/* Barre de progression livraison offerte */}
                <div className="p-4 border-b-3 border-black bg-[#F0F9FF]">
                    <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider mb-2">
                        {freeShippingRemaining > 0 ? (
                            <span>
                                Plus que <strong className="text-[#0284C7] font-black">{formatPrice(freeShippingRemaining)}</strong> pour la livraison offerte à Lomé !
                            </span>
                        ) : (
                            <span className="text-black flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4 fill-[#7DD3FC]" />
                                🎉 Livraison offerte débloquée pour Lomé !
                            </span>
                        )}
                        <span>{progressPercentage}%</span>
                    </div>
                    <div className="w-full h-3 border-2 border-black bg-white overflow-hidden p-0.5 shadow-[2px_2px_0px_#000]">
                        <div
                            className="h-full bg-[#7DD3FC] border-r-2 border-black transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>

                {/* Corps : Liste des articles ou État vide */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                            <div className="p-4 bg-[#BAE6FD] border-3 border-black shadow-[4px_4px_0px_#000] -rotate-3">
                                <ShoppingBag className="w-10 h-10 stroke-[2.5px]" />
                            </div>
                            <h3 className="text-lg font-black uppercase">VOTRE PANIER EST VIDE</h3>
                            <p className="text-xs font-bold text-black/70 max-w-xs">
                                Découvrez nos paires et vêtements streetwear authentifiés en stock à Lomé.
                            </p>
                            <button
                                onClick={closeCart}
                                className="mt-2"
                            >
                                <Link
                                    href="/collections/sneakers"
                                    className="inline-block bg-[#7DD3FC] text-black border-3 border-black px-6 py-3 font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                                >
                                    DÉCOUVRIR LES SNEAKERS →
                                </Link>
                            </button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={`${item.product.id}-${item.size}`}
                                className="border-3 border-black bg-white p-3.5 shadow-[4px_4px_0px_#000] flex gap-3 items-start"
                            >
                                {/* Miniature */}
                                <div className="relative w-20 h-20 bg-[#F0F9FF] border-2 border-black shrink-0 flex items-center justify-center p-1">
                                    <Image
                                        src={item.product.image}
                                        alt={item.product.name}
                                        fill
                                        sizes="80px"
                                        className="object-contain p-1"
                                    />
                                </div>

                                {/* Détails */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <span className="bg-black text-white text-[9px] font-black uppercase px-1.5 py-0.5 border border-black inline-block mb-1">
                                                {item.product.brand}
                                            </span>
                                            <h4 className="text-xs font-black uppercase truncate text-black">
                                                {item.product.name}
                                            </h4>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.product.id, item.size)}
                                            aria-label="Supprimer l'article"
                                            className="text-black/50 hover:text-[#FF4D4D] transition-colors p-1"
                                        >
                                            <Trash2 className="w-4 h-4 stroke-[2.5px]" />
                                        </button>
                                    </div>

                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="text-[11px] font-bold bg-[#BAE6FD] border border-black px-1.5 py-0.2">
                                            {item.size}
                                        </span>
                                        {item.product.is24h && (
                                            <span className="text-[10px] font-black text-black">⚡ EN STOCK LOMÉ</span>
                                        )}
                                    </div>

                                    {/* Contrôleur de quantité & Prix */}
                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="flex items-center border-2 border-black bg-white shadow-[2px_2px_0px_#000]">
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                                                className="w-6 h-6 flex items-center justify-center border-r-2 border-black font-black text-xs hover:bg-[#BAE6FD]"
                                                aria-label="Diminuer"
                                            >
                                                <Minus className="w-3 h-3 stroke-[3px]" />
                                            </button>
                                            <span className="w-7 text-center font-black text-xs">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                                                className="w-6 h-6 flex items-center justify-center border-l-2 border-black font-black text-xs hover:bg-[#BAE6FD]"
                                                aria-label="Augmenter"
                                            >
                                                <Plus className="w-3 h-3 stroke-[3px]" />
                                            </button>
                                        </div>

                                        <span className="text-xs sm:text-sm font-black text-black">
                                            {formatPrice(item.product.price * item.quantity)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Pied de tiroir : Résumé et Checkout */}
                {items.length > 0 && (
                    <div className="p-5 border-t-4 border-black bg-white space-y-3">
                        <div className="space-y-1.5 text-xs font-bold uppercase tracking-wider">
                            <div className="flex justify-between text-black/70">
                                <span>Sous-total</span>
                                <span className="font-black text-black">{formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-black/70">
                                <span>Livraison Lomé</span>
                                <span className="font-black text-black">
                                    {shipping === 0 ? "OFFERTE (0 FCFA)" : formatPrice(shipping)}
                                </span>
                            </div>
                            <div className="pt-2 border-t-2 border-black flex justify-between text-sm font-black text-black">
                                <span>TOTAL</span>
                                <span className="text-base font-black">{formatPrice(total)}</span>
                            </div>
                        </div>

                        {/* Bouton Commander */}
                        <Link
                            href="/checkout"
                            onClick={closeCart}
                            className="w-full py-3.5 bg-[#7DD3FC] text-black border-4 border-black font-black text-xs uppercase tracking-widest shadow-[5px_5px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
                        >
                            <span>FINALISER LA COMMANDE</span>
                            <ArrowRight className="w-4 h-4 stroke-[3px]" />
                        </Link>

                        {/* Bouton Option WhatsApp Direct */}
                        <a
                            href={generateWhatsAppOrderUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white border-3 border-black font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>COMMANDER SUR WHATSAPP</span>
                        </a>

                        {/* Badges de réassurance */}
                        <div className="pt-2 flex items-center justify-between text-[10px] font-black uppercase text-black/70 border-t border-black/20">
                            <span className="flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5px]" /> 100% Authentique
                            </span>
                            <span className="flex items-center gap-1">
                                <Truck className="w-3.5 h-3.5 stroke-[2.5px]" /> Coursier Lomé 24H
                            </span>
                        </div>
                    </div>
                )}

            </aside>
        </div>
    )
}
