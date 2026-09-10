"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/format"
import { ShieldCheck, Truck, CreditCard, Lock, ArrowLeft, CheckCircle2, Tag, Sparkles, Phone, Store, MessageCircle } from "lucide-react"

const TOGO_CITIES = [
    "Lomé",
    "Kara",
    "Sokodé",
    "Kpalimé",
    "Atakpamé",
    "Tsévié",
    "Dapaong",
    "Aného",
    "Autre ville"
]

const LOME_DISTRICTS = [
    "Agoè-Nyivé",
    "Adidogomé",
    "Tokoin",
    "Hedzranawoé",
    "Bè / Bè-Kpota",
    "Nyékonakpoé",
    "Baguida",
    "Totsi",
    "Klikamé",
    "Amoutiévé",
    "Kégué",
    "Aflao-Gakli",
    "Avépozo",
    "Autre quartier"
]

export default function CheckoutPage() {
    const router = useRouter()
    const { items, subtotal, clearCart } = useCart()

    // Formulaire client
    const [firstName, setFirstName] = useState("Koffi")
    const [lastName, setLastName] = useState("Mensah")
    const [email, setEmail] = useState("koffi.mensah@example.com")
    const [city, setCity] = useState("Lomé")
    const [district, setDistrict] = useState("Agoè-Nyivé")
    const [address, setAddress] = useState("Carrefour 2 Lions, près de la pharmacie")
    const [landmark, setLandmark] = useState("Maison à portail bleu face au supermarché")
    const [phone, setPhone] = useState("+228 90 12 34 56")

    // Expédition & Paiement
    const [shippingOption, setShippingOption] = useState<"lome_express" | "pickup" | "interior">("lome_express")
    const [paymentMethod, setPaymentMethod] = useState<"tmoney" | "flooz" | "cod" | "card">("cod")

    // Code promo
    const [promoCode, setPromoCode] = useState("")
    const [discountAmount, setDiscountAmount] = useState(0)
    const [promoApplied, setPromoApplied] = useState(false)
    const [promoError, setPromoError] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false)

    // Calcul des frais de livraison
    let shippingCost = 0
    if (shippingOption === "lome_express") {
        shippingCost = subtotal >= 50000 ? 0 : 1500
    } else if (shippingOption === "interior") {
        shippingCost = 3000
    } else if (shippingOption === "pickup") {
        shippingCost = 0
    }

    const totalOrder = Math.max(0, subtotal + shippingCost - discountAmount)

    const handleApplyPromo = (e: React.FormEvent) => {
        e.preventDefault()
        if (promoCode.trim().toUpperCase() === "NOVA5000") {
            setDiscountAmount(5000)
            setPromoApplied(true)
            setPromoError("")
        } else {
            setPromoError("Code invalide. Essayez NOVA5000 pour 5 000 FCFA de réduction !")
        }
    }

    const handleSubmitOrder = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const orderId = `NOV-TG-${Math.floor(100000 + Math.random() * 900000)}`

        setTimeout(() => {
            clearCart()
            router.push(`/order/success?id=${orderId}&total=${totalOrder}&payment=${paymentMethod}`)
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
                    Ajoutez d&apos;abord des articles à votre panier pour accéder au paiement.
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
                        <span>CHECKOUT SÉCURISÉ • TOGO 🇹🇬</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                        FINALISER MA <span className="bg-[#7DD3FC] px-2 py-0.5 border-3 border-black inline-block -rotate-1">COMMANDE</span>
                    </h1>
                </div>

                <div className="flex items-center gap-2 text-xs font-black bg-[#F0F9FF] border-2 border-black p-2.5 shadow-[2px_2px_0px_#000]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>STOCK DISPONIBLE À LOMÉ</span>
                </div>
            </div>

            {/* Formulaire principal 2 colonnes */}
            <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* COLONNE GAUCHE (7 colonnes) : Étapes Livraison & Paiement */}
                <div className="lg:col-span-7 space-y-8">

                    {/* Étape 1 : Adresse de livraison au Togo */}
                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
                        <div className="flex items-center gap-2 pb-4 mb-6 border-b-3 border-black">
                            <span className="w-7 h-7 bg-black text-white flex items-center justify-center font-black text-xs">
                                1
                            </span>
                            <h2 className="text-base font-black uppercase tracking-wide">
                                COORDONNÉES & ADRESSE DE LIVRAISON (TOGO)
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
                                <label className="block text-xs font-black uppercase mb-1">E-MAIL POUR LE REÇU *</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-black uppercase mb-1 flex items-center gap-1.5">
                                    <Phone className="w-3.5 h-3.5" />
                                    <span>NUMÉRO WHATSAPP / TÉLÉPHONE DU COURSIER *</span>
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+228 90 00 00 00"
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase mb-1">VILLE (TOGO) *</label>
                                <select
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD] bg-white cursor-pointer"
                                >
                                    {TOGO_CITIES.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            {city === "Lomé" ? (
                                <div>
                                    <label className="block text-xs font-black uppercase mb-1">QUARTIER (LOMÉ) *</label>
                                    <select
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD] bg-white cursor-pointer"
                                    >
                                        {LOME_DISTRICTS.map((d) => (
                                            <option key={d} value={d}>{d}</option>
                                        ))}
                                    </select>
                                </div>
                            ) : (
                                <div>
                                    <label className="block text-xs font-black uppercase mb-1">QUARTIER / SECTEUR *</label>
                                    <input
                                        type="text"
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        required
                                        className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                    />
                                </div>
                            )}

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-black uppercase mb-1">ADRESSE / LOCALISATION *</label>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Ex: Rue 45, Carrefour GTA, etc."
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-black uppercase mb-1">REPÈRE POUR LE COURSIER (IMPORTANT) *</label>
                                <input
                                    type="text"
                                    value={landmark}
                                    onChange={(e) => setLandmark(e.target.value)}
                                    placeholder="Ex: Face pharmacie, à côté de l'école, portail noir..."
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
                                MODE DE LIVRAISON AU TOGO
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <label
                                onClick={() => setShippingOption("lome_express")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    shippingOption === "lome_express"
                                        ? "bg-[#7DD3FC] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${shippingOption === "lome_express" ? "bg-black text-white" : "bg-white"}`}>
                                        {shippingOption === "lome_express" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase">COURSIER MOTO EXPRESS LOMÉ (2H À 24H)</div>
                                        <div className="text-[11px] font-bold text-black/70">Remise directe à votre domicile ou bureau</div>
                                    </div>
                                </div>
                                <span className="font-black text-xs uppercase">
                                    {subtotal >= 50000 ? "OFFERTE (0 FCFA)" : "1 500 FCFA"}
                                </span>
                            </label>

                            <label
                                onClick={() => setShippingOption("pickup")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    shippingOption === "pickup"
                                        ? "bg-[#7DD3FC] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${shippingOption === "pickup" ? "bg-black text-white" : "bg-white"}`}>
                                        {shippingOption === "pickup" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase flex items-center gap-1.5">
                                            <Store className="w-3.5 h-3.5" />
                                            <span>RETRAIT GRATUIT EN BOUTIQUE (LOMÉ)</span>
                                        </div>
                                        <div className="text-[11px] font-bold text-black/70">Disponible immédiatement dans notre boutique de Lomé</div>
                                    </div>
                                </div>
                                <span className="font-black text-xs uppercase bg-[#BAE6FD] px-2 py-0.5 border border-black">GRATUIT</span>
                            </label>

                            <label
                                onClick={() => setShippingOption("interior")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    shippingOption === "interior"
                                        ? "bg-[#7DD3FC] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${shippingOption === "interior" ? "bg-black text-white" : "bg-white"}`}>
                                        {shippingOption === "interior" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase">EXPÉDITION INTÉRIEUR DU TOGO (24H - 48H)</div>
                                        <div className="text-[11px] font-bold text-black/70">Kara, Sokodé, Kpalimé, Atakpamé, Dapaong via transporteur</div>
                                    </div>
                                </div>
                                <span className="font-black text-xs uppercase">3 000 FCFA</span>
                            </label>
                        </div>
                    </div>

                    {/* Étape 3 : Moyens de paiement au Togo */}
                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
                        <div className="flex items-center gap-2 pb-4 mb-6 border-b-3 border-black">
                            <span className="w-7 h-7 bg-black text-white flex items-center justify-center font-black text-xs">
                                3
                            </span>
                            <h2 className="text-base font-black uppercase tracking-wide">
                                CHOISIR LE MOYEN DE PAIEMENT
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {/* Option 1: T-Money */}
                            <label
                                onClick={() => setPaymentMethod("tmoney")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    paymentMethod === "tmoney"
                                        ? "bg-[#BAE6FD] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${paymentMethod === "tmoney" ? "bg-black text-white" : "bg-white"}`}>
                                        {paymentMethod === "tmoney" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase flex items-center gap-2">
                                            <span>T-MONEY (TOGOCOM)</span>
                                            <span className="bg-[#7DD3FC] px-1.5 py-0.2 border border-black text-[9px]">DIRECT</span>
                                        </div>
                                        <div className="text-[11px] font-bold text-black/70">
                                            Transfert mobile via syntaxe *145# vers notre compte marchand
                                        </div>
                                    </div>
                                </div>
                                <span className="font-black text-xs uppercase bg-black text-white px-2 py-0.5">TOGOCOM</span>
                            </label>

                            {/* Option 2: Moov Money (Flooz) */}
                            <label
                                onClick={() => setPaymentMethod("flooz")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    paymentMethod === "flooz"
                                        ? "bg-[#BAE6FD] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${paymentMethod === "flooz" ? "bg-black text-white" : "bg-white"}`}>
                                        {paymentMethod === "flooz" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase flex items-center gap-2">
                                            <span>MOOV MONEY (FLOOZ)</span>
                                            <span className="bg-[#7DD3FC] px-1.5 py-0.2 border border-black text-[9px]">DIRECT</span>
                                        </div>
                                        <div className="text-[11px] font-bold text-black/70">
                                            Paiement mobile instantané via *155#
                                        </div>
                                    </div>
                                </div>
                                <span className="font-black text-xs uppercase bg-[#008751] text-white px-2 py-0.5">MOOV</span>
                            </label>

                            {/* Option 3: Espèces / Cash à la livraison */}
                            <label
                                onClick={() => setPaymentMethod("cod")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    paymentMethod === "cod"
                                        ? "bg-[#BAE6FD] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${paymentMethod === "cod" ? "bg-black text-white" : "bg-white"}`}>
                                        {paymentMethod === "cod" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase flex items-center gap-2">
                                            <span>PAIEMENT EN ESPÈCES À LA LIVRAISON</span>
                                            <span className="bg-[#25D366] text-white px-1.5 py-0.2 border border-black text-[9px]">POPULAIRE</span>
                                        </div>
                                        <div className="text-[11px] font-bold text-black/70">
                                            Payez en mains propres au coursier après vérification de votre colis
                                        </div>
                                    </div>
                                </div>
                                <span className="font-black text-xs uppercase border-2 border-black px-2 py-0.5 bg-white">CASH</span>
                            </label>

                            {/* Option 4: Carte bancaire */}
                            <label
                                onClick={() => setPaymentMethod("card")}
                                className={`flex items-center justify-between p-4 border-3 border-black cursor-pointer transition-all ${
                                    paymentMethod === "card"
                                        ? "bg-[#BAE6FD] shadow-[4px_4px_0px_#000]"
                                        : "bg-white hover:bg-[#F0F9FF]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${paymentMethod === "card" ? "bg-black text-white" : "bg-white"}`}>
                                        {paymentMethod === "card" && <CheckCircle2 className="w-4 h-4 stroke-[3px]" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase">CARTE BANCAIRE (VISA / MASTERCARD)</div>
                                        <div className="text-[11px] font-bold text-black/70">Paiement international 3D-Secure sécurisé</div>
                                    </div>
                                </div>
                                <CreditCard className="w-5 h-5 stroke-[2.5px]" />
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
                                        {formatPrice(item.product.price * item.quantity)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Formulaire Code Promo */}
                        <div className="pt-2 border-t-2 border-black/20">
                            <label className="block text-xs font-black uppercase mb-1 flex items-center gap-1.5">
                                <Tag className="w-3.5 h-3.5" />
                                <span>CODE PROMO / BON D&apos;ACHAT :</span>
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    placeholder="Ex: NOVA5000"
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
                                    <Sparkles className="w-3.5 h-3.5" /> 5 000 FCFA de remise appliqués avec succès !
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
                                <span className="font-black text-black">{formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-black/70">
                                <span>Frais de livraison ({shippingOption === "interior" ? "Régions" : "Lomé"})</span>
                                <span className="font-black text-black">
                                    {shippingCost === 0 ? "OFFERTE (0 FCFA)" : formatPrice(shippingCost)}
                                </span>
                            </div>
                            {discountAmount > 0 && (
                                <div className="flex justify-between text-[#0284C7]">
                                    <span>Remise code promo</span>
                                    <span className="font-black">- {formatPrice(discountAmount)}</span>
                                </div>
                            )}
                            <div className="pt-3 border-t-3 border-black flex justify-between text-base font-black text-black">
                                <span>TOTAL À RÉGLER</span>
                                <span className="text-xl sm:text-2xl">{formatPrice(totalOrder)}</span>
                            </div>
                        </div>

                        {/* Bouton de soumission */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-[#7DD3FC] text-black border-4 border-black font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                        >
                            {isSubmitting ? (
                                <span>CONFIRMATION EN COURS...</span>
                            ) : (
                                <span>VALIDER LA COMMANDE — {formatPrice(totalOrder)}</span>
                            )}
                        </button>

                        {/* Option validation WhatsApp */}
                        <a
                            href={`https://wa.me/22890000000?text=${encodeURIComponent(`Bonjour Nova Togo !\nJe souhaite valider ma commande :\n- Client : ${firstName} ${lastName}\n- Téléphone : ${phone}\n- Ville / Quartier : ${city} (${district})\n- Repère : ${landmark}\n- Mode d'expédition : ${shippingOption}\n- Mode de règlement : ${paymentMethod}\n- Total : ${formatPrice(totalOrder)}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white border-3 border-black font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 transition-all"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>VALIDER DIRECTEMENT PAR WHATSAPP</span>
                        </a>

                        <p className="text-[10px] font-bold text-center text-black/60 uppercase">
                            En validant, vous acceptez nos CGV et notre garantie d&apos;authenticité certifiée à Lomé.
                        </p>
                    </div>

                </div>

            </form>

        </div>
    )
}
