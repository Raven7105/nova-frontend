"use client"
import React, { useState } from "react"
import Link from "next/link"
import { HelpCircle, ChevronDown, MessageSquare, MessageCircle } from "lucide-react"
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config"

const FAQ_ITEMS = [
    {
        q: "COMMENT VOUS ASSUREZ-VOUS QUE LES PAIRES SONT 100% AUTHENTIQUES ?",
        a: "Chaque paire reçue dans notre boutique à Lomé fait l'objet d'une analyse physique minutieuse : boîte, coutures, étiquettes, matériaux, passage sous lampe UV. Un scellé d'inviolabilité Nova Togo et un certificat d'authenticité sont remis avec chaque paire.",
        cat: "AUTHENTICITÉ"
    },
    {
        q: "QUELS SONT LES DÉLAIS ET MODES DE LIVRAISON AU TOGO ?",
        a: "À Lomé, la livraison s'effectue le jour même ou sous 24h par coursier moto dédié (à domicile ou à votre lieu de travail). Pour les villes de l'intérieur du Togo (Kara, Sokodé, Kpalimé, Atakpamé, Dapaong), l'envoi est acheminé sous 24h à 48h via les compagnies de transport fiables.",
        cat: "LIVRAISON"
    },
    {
        q: "LA LIVRAISON EST-ELLE GRATUITE À LOMÉ ?",
        a: "Oui ! La livraison à Lomé est 100% offerte dès 50 000 FCFA d'achats. Pour les commandes inférieures à ce montant à Lomé, les frais de coursier ne sont que de 1 500 FCFA. Le retrait direct en boutique à Lomé est toujours 100% gratuit.",
        cat: "LIVRAISON"
    },
    {
        q: "COMMENT PUIS-JE PAYER (T-MONEY, FLOOZ, CASH) ?",
        a: "Vous pouvez payer en toute sécurité via T-Money (Togocom *145#), Moov Money (Flooz *155#), en espèces directement au coursier lors de la remise de votre commande (Cash à la livraison), ou par Carte Bancaire (Visa / Mastercard).",
        cat: "PAIEMENT"
    },
    {
        q: "PUIS-JE ESSAYER LA PAIRE EN BOUTIQUE OU DEMANDER UN ÉCHANGE ?",
        a: "Bien sûr ! Vous pouvez passer à notre boutique située à Lomé pour essayer vos modèles. En cas de livraison par coursier, vous disposez de 48h pour demander un échange de pointure si le scellé de sécurité est intact.",
        cat: "RETOURS"
    },
    {
        q: "OÙ EST SITUÉE LA BOUTIQUE NOVA TOGO ET QUELS SONT LES HORAIRES ?",
        a: `Notre boutique physique et nos stocks sont situés sur le Boulevard du 13 Janvier à Tokoin, Lomé, Togo. Nous sommes ouverts du lundi au samedi de 09h à 19h. Vous pouvez aussi nous écrire à tout moment sur WhatsApp au ${SITE_CONFIG.whatsapp.displayPhone}.`,
        cat: "BOUTIQUE"
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">

            {/* Fil d'Ariane */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap mb-10">
                <Link
                    href="/"
                    className="bg-white text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] transition-colors"
                >
                    ACCUEIL
                </Link>
                <span className="font-black text-black">/</span>
                <span className="bg-[#BAE6FD] text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] -rotate-1">
                    SUPPORT // FAQ TOGO 🇹🇬
                </span>
            </nav>

            {/* En-tête */}
            <div className="relative mb-12 p-8 md:p-12 border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
                <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#000]">
                    <HelpCircle className="w-3.5 h-3.5 stroke-[2.5px]" />
                    <span>QUESTIONS FRÉQUENTES • TOGO</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 text-black">
                    BESOIN D&apos;AIDE ? <span className="bg-[#7DD3FC] px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0px_#000]">FAQ NOVA TOGO</span>
                </h1>

                <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-2xl">
                    Retrouvez les réponses à toutes vos questions sur nos stocks à Lomé, la livraison par coursier, les paiements T-Money / Flooz et les retraits en boutique.
                </p>
            </div>

            {/* Accordéon Néo-brutaliste */}
            <div className="space-y-4 mb-16">
                {FAQ_ITEMS.map((item, idx) => {
                    const isOpen = openIndex === idx
                    return (
                        <div
                            key={idx}
                            className="border-4 border-black bg-white shadow-[4px_4px_0px_#000] transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F0F9FF] transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-0.5 border border-black shrink-0">
                                        {item.cat}
                                    </span>
                                    <span className="font-black text-xs sm:text-sm uppercase tracking-tight text-black">
                                        {item.q}
                                    </span>
                                </div>
                                <div className={`w-8 h-8 border-2 border-black flex items-center justify-center shrink-0 transition-transform ${isOpen ? "bg-[#7DD3FC] rotate-180" : "bg-white"}`}>
                                    <ChevronDown className="w-4 h-4 stroke-[3px]" />
                                </div>
                            </button>

                            {isOpen && (
                                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm font-bold text-black/80 leading-relaxed border-t-2 border-black/10 pt-4 animate-fade-up">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Contact Banner avec WhatsApp */}
            <div className="border-4 border-black bg-[#F0F9FF] p-8 shadow-[6px_6px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase">VOUS AVEZ UNE AUTRE QUESTION ?</h3>
                    <p className="text-xs font-bold text-black/70">
                        Notre équipe à Lomé vous répond en moins de 15 minutes sur WhatsApp ou par formulaire.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href={getWhatsAppUrl("Bonjour Nova Togo ! J'ai une question.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white border-3 border-black px-6 py-3 font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#000] transition-all"
                    >
                        <MessageCircle className="w-4 h-4 stroke-[2.5px]" />
                        <span>WHATSAPP TOGO</span>
                    </a>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-[#7DD3FC] text-black border-3 border-black px-6 py-3 font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                    >
                        <MessageSquare className="w-4 h-4 stroke-[2.5px]" />
                        <span>FORMULAIRE DE CONTACT</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
