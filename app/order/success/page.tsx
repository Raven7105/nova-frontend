"use client"
import React, { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle2, Package, Truck, ShieldCheck, ArrowRight, Sparkles } from "lucide-react"

function SuccessContent() {
    const searchParams = useSearchParams()
    const orderId = searchParams.get("id") || "NOV-948123"
    const total = searchParams.get("total") || "171.00"

    return (
        <div className="max-w-3xl mx-auto px-6 py-16 text-center space-y-8 animate-fade-up">
            
            {/* Badge icône succès */}
            <div className="inline-block p-6 bg-[#BAE6FD] border-4 border-black shadow-[8px_8px_0px_#000] rotate-2">
                <CheckCircle2 className="w-16 h-16 stroke-[2.5px] text-black" />
            </div>

            <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#7DD3FC] border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
                    <Sparkles className="w-4 h-4 fill-black" />
                    <span>COMMANDE ENREGISTRÉE AVEC SUCCÈS</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
                    MERCI POUR VOTRE <span className="bg-[#BAE6FD] px-3 py-0.5 border-4 border-black inline-block -rotate-1">CONFIANCE</span> !
                </h1>

                <p className="text-sm sm:text-base font-bold text-black/70 max-w-xl mx-auto">
                    Votre commande a été transmise à notre centre logistique. Nos spécialistes procèdent à la vérification finale avant scellage et expédition.
                </p>
            </div>

            {/* Carte récapitulatif numéro de commande */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_#000] text-left space-y-4 max-w-xl mx-auto">
                <div className="flex items-center justify-between pb-4 border-b-3 border-black">
                    <div>
                        <span className="text-xs font-black uppercase text-black/60 block">NUMÉRO DE COMMANDE</span>
                        <span className="text-xl sm:text-2xl font-black">{orderId}</span>
                    </div>
                    <span className="bg-[#7DD3FC] text-black px-3 py-1 border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
                        CONFIRMÉE
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase pt-2">
                    <div>
                        <span className="text-black/60 block mb-0.5">MONTANT RÉGLÉ</span>
                        <span className="text-sm font-black text-black">{total} € TTC</span>
                    </div>
                    <div>
                        <span className="text-black/60 block mb-0.5">EXPÉDITION PRÉVUE</span>
                        <span className="text-sm font-black text-black">Sous 24h ouvrées</span>
                    </div>
                </div>

                <div className="p-3 border-2 border-black bg-[#F0F9FF] text-xs font-bold flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 stroke-[2.5px] shrink-0" />
                    <span>Un e-mail de confirmation avec votre facture et votre numéro de suivi vous a été envoyé.</span>
                </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7DD3FC] text-black border-4 border-black px-8 py-4 font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-1 active:translate-y-1 transition-all"
                >
                    <span>RETOURNER À L'ACCUEIL</span>
                    <ArrowRight className="w-4 h-4 stroke-[3px]" />
                </Link>

                <Link
                    href="/collections/sneakers"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black border-4 border-black px-8 py-4 font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_#000] hover:bg-[#F0F9FF] transition-all"
                >
                    <span>CONTINUER LE SHOPPING</span>
                </Link>
            </div>

        </div>
    )
}

export default function OrderSuccessPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center font-black">CHARGEMENT DE LA COMMANDE...</div>}>
            <SuccessContent />
        </Suspense>
    )
}
