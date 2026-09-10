"use client"
import React, { useState } from "react"
import Link from "next/link"
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from "lucide-react"

const FAQ_ITEMS = [
    {
        q: "COMMENT VOUS ASSUREZ-VOUS QUE LES PAIRES SONT 100% AUTHENTIQUES ?",
        a: "Chaque produit reçu dans nos locaux fait l'objet d'une analyse physique approfondie par deux experts certifiés : inspection des boîtes, étiquettes, coutures, passage sous lampe UV, contrôle des odeurs d'usines et des matériaux. Un scellé d'inviolabilité Nova est ensuite posé sur chaque paire.",
        cat: "AUTHENTICITÉ"
    },
    {
        q: "QUELS SONT LES DÉLAIS DE LIVRAISON ?",
        a: "Les articles portant le badge '⚡ 24H' sont déjà en stock dans notre entrepôt en France et expédiés le jour même si la commande est passée avant 14h (livraison sous 24h ouvrées via Chronopost). Pour les autres articles rares sous approvisionnement, comptez 3 à 5 jours ouvrés.",
        cat: "LIVRAISON"
    },
    {
        q: "LA LIVRAISON EST-ELLE GRATUITE ?",
        a: "Oui, la livraison Colissimo avec suivi contre signature est 100% offerte dès 180 € d'achats pour la France métropolitaine et l'ensemble de l'Union Européenne. En dessous de ce montant, les frais s'élèvent à 9,90 €.",
        cat: "LIVRAISON"
    },
    {
        q: "PUIS-JE PAYER EN PLUSIEURS FOIS SANS FRAIS ?",
        a: "Absolument ! Grâce à notre partenaire bancaire Alma, vous pouvez régler vos commandes en 2x, 3x ou 4x par carte bancaire, sans aucun frais supplémentaire. Le premier versement s'effectue le jour de la commande.",
        cat: "PAIEMENT"
    },
    {
        q: "COMMENT EFFECTUER UN RETOUR OU UN ÉCHANGE ?",
        a: "Vous disposez d'un délai légal de 14 jours calendaires après réception de votre colis pour demander un retour ou un échange de pointure. La seule condition impérative est que le scellé de sécurité Nova ne doit pas avoir été coupé ou retiré de la paire.",
        cat: "RETOURS"
    },
    {
        q: "OÙ SONT SITUÉS VOS LOCAUX ET VOS STOCKS ?",
        a: "Nova est une entreprise 100% française. Notre centre logistique et notre atelier d'authentification sont basés en région parisienne.",
        cat: "GÉNÉRAL"
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
                    SUPPORT // FAQ
                </span>
            </nav>

            {/* En-tête */}
            <div className="relative mb-12 p-8 md:p-12 border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
                <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#000]">
                    <HelpCircle className="w-3.5 h-3.5 stroke-[2.5px]" />
                    <span>QUESTIONS FRÉQUENTES</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 text-black">
                    BESOIN D'AIDE ? <span className="bg-[#7DD3FC] px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0px_#000]">FAQ NOVA</span>
                </h1>

                <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-2xl">
                    Retrouvez les réponses à toutes vos questions concernant l'authenticité de nos paires, l'expédition 24h, les modes de paiement et la politique de retour.
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

            {/* Contact Banner */}
            <div className="border-4 border-black bg-[#F0F9FF] p-8 shadow-[6px_6px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase">VOUS N'AVEZ PAS TROUVÉ VOTRE RÉPONSE ?</h3>
                    <p className="text-xs font-bold text-black/70">
                        Notre équipe d'experts répond à vos questions en moins de 2h du lundi au samedi.
                    </p>
                </div>

                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#7DD3FC] text-black border-3 border-black px-6 py-3 font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                >
                    <MessageSquare className="w-4 h-4 stroke-[2.5px]" />
                    <span>CONTACTER LE SUPPORT →</span>
                </Link>
            </div>

        </div>
    )
}
