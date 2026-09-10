"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { ShieldCheck, Truck, CreditCard, Lock, ArrowLeft, CheckCircle2, Tag, Sparkles } from "lucide-react"

export default function CheckoutPage() {
    const router = useRouter()
    const { items, subtotal, shipping, clearCart } = useCart()

    // Formulaire client
    const [firstName, setFirstName] = useState("Alexandre")
    const [lastName, setLastName] = useState("Mercier")
    const [email, setEmail] = useState("alexandre.nova@example.com")
    const [address, setAddress] = useState("24 Rue de la Paix")
    const [postalCode, setPostalCode] = useState("75002")
    const [city, setCity] = useState("Paris")
    const [phone, setPhone] = useState("06 12 34 56 78")

    // Expédition & Paiement
    const [shippingOption, setShippingOption] = useState<"standard" | "express">("standard")
    const [paymentMethod, setPaymentMethod] = useState<"cb" | "alma" | "paypal">("cb")

    // Code promo
    const [promoCode, setPromoCode] = useState("")
    const [discountAmount, setDiscountAmount] = useState(0)
    const [promoApplied, setPromoApplied] = useState(false)
    const [promoError, setPromoError] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false)

    // Calculs
    const shippingCost = shippingOption === "express" ? 14.90 : shipping
    const totalOrder = Math.max(0, subtotal + shippingCost - discountAmount)

    const handleApplyPromo = (e: React.FormEvent) => {
        e.preventDefault()
        if (promoCode.trim().toUpperCase() === "NOVA10") {
            setDiscountAmount(10)
            setPromoApplied(true)
            setPromoError("")
        } else {
            setPromoError("Code invalide. Essayez NOVA10 pour 10€ de réduction !")
        }
    }

    const handleSubmitOrder = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const orderId = `NOV-${Math.floor(100000 + Math.random() * 900000)}`

        setTimeout(() => {
            clearCart()
            router.push(`/order/success?id=${orderId}&total=${totalOrder.toFixed(2)}`)
        }, 1200)
    }

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
                <div className="p-4 bg-[#BAE6FD] border-4 border-black shadow-[6px_6px_0px_#000] inline-block -rotate-2">
                    <Truck className="w-12 h-12 stroke-[2.5px]" />
                </div>
                <h1 className="text-3xl font-black uppercase">VOTRE PANIER EST VIDE</h1>
                <p className="text-sm font-bold text-black/70">
                    Ajoutez d'abord des articles à votre panier pour accéder au paiement.
                </p>
                <div>
                    <Link
                        href="/collections/sneakers"
                        className="inline-block bg-[#7DD3FC] text-black border-4 border-black px-8 py-4 font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_#000] hover:bg-[#BAE6FD] transition-all"
                    >
                        EXPLORER LA BOUTIQUE →
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

            {/* Fil de navigation */}
            <div className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase bg-white border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 stroke-[3px]" />
                    <span>RETOUR AU SHOP</span>
                </Link>
            </div>

            {/* En-tête Néo-brutaliste */}
            <div className="relative mb-10 p-6 sm:p-8 border-4 border-black bg-white shadow-[6px_6px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2 py-0.5 text-xs font-black uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#000]">
                        <Lock className="w-3.5 h-3.5 stroke-[3px]" />
                        <span>CHECKOUT SÉCURISÉ SSL 256-BIT</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                        FINALISER MA <span className="bg-[#7DD3FC] px-2 py-0.5 border-3 border-black inline-block -rotate-1">COMMANDE</span>
                    </h1>
                </div>

                <div className="flex items-center gap-2 text-xs font-black bg-[#F0F9FF] border-2 border-black p-2.5 shadow-[2px_2px_0px_#000]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>SCELLÉ INVIOLABLE INCLUS</span>
                </div>
            </div>

            {/* Formulaire principal 2 colonnes */}
            <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* COLONNE GAUCHE (7 colonnes) : Étapes Livraison & Paiement */}
                <div className="lg:col-span-7 space-y-8">

                    {/* Étape 1 : Adresse de livraison */}
                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
                        <div className="flex items-center gap-2 pb-4 mb-6 border-b-3 border-black">
                            <span className="w-7 h-7 bg-black text-white flex items-center justify-center font-black text-xs">
                                1
                            </span>
                            <h2 className="text-base font-black uppercase tracking-wide">
                                ADRESSE DE LIVRAISON
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-black uppercase mb-1">PRÉNOM *</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase mb-1">NOM *</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-black uppercase mb-1">E-MAIL DE SUIVI *</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-black uppercase mb-1">ADRESSE POSTALE *</label>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase mb-1">CODE POSTAL *</label>
                                <input
                                    type="text"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase mb-1">VILLE *</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-black uppercase mb-1">TÉLÉPHONE (POUR LE LIVREUR) *</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Étape 2 : Mode d'expédition */}
                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
                        <div className="flex items-center gap-2 pb-4 mb-6 border-b-3 border-black">
                            <span className="w-7 h-7 bg-black text-white flex items-center justify-center font-black text-xs">
                                2
                            </span>
                            <h2 className="text-base font-black uppercase tracking-wide">
                                CHOIX DU TRANSPORTEUR
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <label
                                onClick={() => setShippingOption("standard")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    shippingOption === "standard"
                                        ? "bg-[#7DD3FC] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${shippingOption === "standard" ? "bg-black text-white" : "bg-white"}`}>
                                        {shippingOption === "standard" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase">COLISSIMO SUIVI (48H À 72H)</div>
                                        <div className="text-[11px] font-bold text-black/70">Remise contre signature à domicile</div>
                                    </div>
                                </div>
                                <span className="font-black text-xs uppercase">
                                    {shipping === 0 ? "OFFERT" : `${shipping.toFixed(2)} €`}
                                </span>
                            </label>

                            <label
                                onClick={() => setShippingOption("express")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    shippingOption === "express"
                                        ? "bg-[#7DD3FC] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${shippingOption === "express" ? "bg-black text-white" : "bg-white"}`}>
                                        {shippingOption === "express" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase flex items-center gap-1.5">
                                            <span>CHRONOPOST 24H EXPRESS</span>
                                            <span className="bg-[#BAE6FD] text-black px-1 text-[10px] border border-black">PRIORITAIRE</span>
                                        </div>
                                        <div className="text-[11px] font-bold text-black/70">Livraison garantie dès le lendemain avant 13h</div>
                                    </div>
                                </div>
                                <span className="font-black text-xs uppercase">14.90 €</span>
                            </label>
                        </div>
                    </div>

                    {/* Étape 3 : Paiement */}
                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
                        <div className="flex items-center gap-2 pb-4 mb-6 border-b-3 border-black">
                            <span className="w-7 h-7 bg-black text-white flex items-center justify-center font-black text-xs">
                                3
                            </span>
                            <h2 className="text-base font-black uppercase tracking-wide">
                                MOYEN DE PAIEMENT SÉCURISÉ
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <label
                                onClick={() => setPaymentMethod("cb")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    paymentMethod === "cb"
                                        ? "bg-[#BAE6FD] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${paymentMethod === "cb" ? "bg-black text-white" : "bg-white"}`}>
                                        {paymentMethod === "cb" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div className="text-xs font-black uppercase">CARTE BANCAIRE (VISA / MASTERCARD)</div>
                                </div>
                                <CreditCard className="w-5 h-5 stroke-[2.5px]" />
                            </label>

                            <label
                                onClick={() => setPaymentMethod("alma")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    paymentMethod === "alma"
                                        ? "bg-[#BAE6FD] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${paymentMethod === "alma" ? "bg-black text-white" : "bg-white"}`}>
                                        {paymentMethod === "alma" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase">ALMA : 3X OU 4X SANS FRAIS</div>
                                        <div className="text-[11px] font-bold text-black/70">
                                            Payez 3x {(totalOrder / 3).toFixed(2)} € sans aucun surcoût
                                        </div>
                                    </div>
                                </div>
                                <span className="bg-black text-white text-[10px] font-black px-2 py-0.5 border border-black">
                                    0% INTÉRÊT
                                </span>
                            </label>

                            <label
                                onClick={() => setPaymentMethod("paypal")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    paymentMethod === "paypal"
                                        ? "bg-[#BAE6FD] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${paymentMethod === "paypal" ? "bg-black text-white" : "bg-white"}`}>
                                        {paymentMethod === "paypal" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div className="text-xs font-black uppercase">PAYPAL EXPRESS CHECKOUT</div>
                                </div>
                                <span className="font-black text-xs">PayPal</span>
                            </label>
                        </div>
                    </div>

                </div>

                {/* COLONNE DROITE (5 colonnes) : Récapitulatif Panier & Validation */}
                <div className="lg:col-span-5 space-y-6">

                    {/* Récapitulatif */}
                    <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000] space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b-3 border-black">
                            <h2 className="text-base font-black uppercase tracking-tight">RÉCAPITULATIF</h2>
                            <span className="bg-[#BAE6FD] text-black border border-black text-xs font-black px-2 py-0.5">
                                {items.length} {items.length > 1 ? "articles" : "article"}
                            </span>
                        </div>

                        {/* Liste des items */}
                        <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                            {items.map((item) => (
                                <div
                                    key={`${item.product.id}-${item.size}`}
                                    className="flex items-center gap-3 p-2 border-2 border-black bg-[#F0F9FF]"
                                >
                                    <div className="relative w-14 h-14 bg-white border border-black shrink-0 flex items-center justify-center p-1">
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            fill
                                            sizes="60px"
                                            className="object-contain p-1"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[10px] font-black uppercase text-black/60 truncate">
                                            {item.product.brand}
                                        </div>
                                        <div className="text-xs font-black uppercase truncate">
                                            {item.product.name}
                                        </div>
                                        <div className="text-[11px] font-bold text-black/70">
                                            Taille : {item.size} × {item.quantity}
                                        </div>
                                    </div>
                                    <div className="text-xs font-black">
                                        {(item.product.price * item.quantity).toFixed(2)} €
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Formulaire Code Promo */}
                        <div className="pt-2 border-t-2 border-black/20">
                            <label className="block text-xs font-black uppercase mb-1 flex items-center gap-1.5">
                                <Tag className="w-3.5 h-3.5" />
                                <span>CODE PROMO / CARTE CADEAU :</span>
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    placeholder="Ex: NOVA10"
                                    disabled={promoApplied}
                                    className="flex-1 border-2 border-black p-2 text-xs font-black uppercase outline-none shadow-[2px_2px_0px_#000]"
                                />
                                <button
                                    type="button"
                                    onClick={handleApplyPromo}
                                    disabled={promoApplied || !promoCode}
                                    className="px-4 py-2 bg-[#7DD3FC] text-black border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] disabled:opacity-50 cursor-pointer"
                                >
                                    {promoApplied ? "APPLIQUÉ ✓" : "APPLIQUER"}
                                </button>
                            </div>
                            {promoApplied && (
                                <p className="text-[11px] font-black text-[#0284C7] mt-1 flex items-center gap-1">
                                    <Sparkles className="w-3.5 h-3.5" /> 10€ de remise appliqués avec succès !
                                </p>
                            )}
                            {promoError && (
                                <p className="text-[11px] font-bold text-[#FF4D4D] mt-1">
                                    {promoError}
                                </p>
                            )}
                        </div>

                        {/* Totaux */}
                        <div className="space-y-2 pt-3 border-t-2 border-black text-xs font-bold uppercase">
                            <div className="flex justify-between text-black/70">
                                <span>Sous-total articles</span>
                                <span className="font-black text-black">{subtotal.toFixed(2)} €</span>
                            </div>
                            <div className="flex justify-between text-black/70">
                                <span>Frais de livraison</span>
                                <span className="font-black text-black">
                                    {shippingCost === 0 ? "OFFERTE (0.00 €)" : `${shippingCost.toFixed(2)} €`}
                                </span>
                            </div>
                            {discountAmount > 0 && (
                                <div className="flex justify-between text-[#0284C7]">
                                    <span>Remise code promo</span>
                                    <span className="font-black">- {discountAmount.toFixed(2)} €</span>
                                </div>
                            )}
                            <div className="pt-3 border-t-3 border-black flex justify-between text-base font-black text-black">
                                <span>TOTAL À RÉGLER</span>
                                <span className="text-xl sm:text-2xl">{totalOrder.toFixed(2)} €</span>
                            </div>
                        </div>

                        {/* Bouton de soumission */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 bg-[#7DD3FC] text-black border-4 border-black font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                        >
                            {isSubmitting ? (
                                <span>TRAITEMENT SÉCURISÉ EN COURS...</span>
                            ) : (
                                <span>PAYER LA COMMANDE — {totalOrder.toFixed(2)} €</span>
                            )}
                        </button>

                        <p className="text-[10px] font-bold text-center text-black/60 uppercase">
                            En validant, vous acceptez nos CGV et notre politique de retour sous 14 jours.
                        </p>
                    </div>

                </div>

            </form>

        </div>
    )
}
