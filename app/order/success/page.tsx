"use client"
import React, { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, MessageCircle, Phone } from "lucide-react"
import { formatPrice } from "@/lib/format"
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config"

function SuccessContent() {
    const searchParams = useSearchParams()
    const orderId = searchParams.get("id") || "NOV-TG-948123"
    const rawTotal = searchParams.get("total") || "65000"
    const payment = searchParams.get("payment") || "cod"
    const totalNum = Number(rawTotal) || 65000

    const whatsappTrackUrl = getWhatsAppUrl(`Bonjour Nova Togo ! Je viens de passer la commande ${orderId} d'un montant de ${formatPrice(totalNum)}. Pouvez-vous me confirmer la prise en charge du coursier ?`)

    return (
        <div className="max-w-3xl mx-auto px-6 py-16 text-center space-y-8 animate-fade-up">
            
            {/* Badge icône succès */}
            <div className="inline-block p-6 bg-[#BAE6FD] border-4 border-black shadow-[8px_8px_0px_#000] rotate-2">
                <CheckCircle2 className="w-16 h-16 stroke-[2.5px] text-black" />
            </div>

            <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#7DD3FC] border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
                    <Sparkles className="w-4 h-4 fill-black" />
                    <span>COMMANDE VALIDÉE • NOVA TOGO 🇹🇬</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
                    MERCI POUR VOTRE <span className="bg-[#BAE6FD] px-3 py-0.5 border-4 border-black inline-block -rotate-1">CONFIANCE</span> !
                </h1>

                <p className="text-sm sm:text-base font-bold text-black/70 max-w-xl mx-auto">
                    Votre commande est bien reçue à notre boutique de Lomé. Notre équipe prépare votre colis pour remise immédiate au coursier.
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
                        <span className="text-black/60 block mb-0.5">MONTANT TOTAL</span>
                        <span className="text-sm font-black text-black">{formatPrice(totalNum)}</span>
                    </div>
                    <div>
                        <span className="text-black/60 block mb-0.5">LIVRAISON COURSIER</span>
                        <span className="text-sm font-black text-black">Aujourd&apos;hui ou 24H</span>
                    </div>
                </div>

                {/* Instructions selon mode de paiement */}
                {payment === "tmoney" && (
                    <div className="p-3.5 border-2 border-black bg-[#BAE6FD] text-xs font-bold space-y-1">
                        <div className="font-black uppercase flex items-center gap-1.5">
                            <Phone className="w-4 h-4" /> Instructions T-Money (Togocom) :
                        </div>
                        <p>Composez *145# et envoyez le montant de {formatPrice(totalNum)} vers le numéro marchand <strong>{SITE_CONFIG.whatsapp.displayPhone}</strong> en indiquant la référence <strong>{orderId}</strong>.</p>
                    </div>
                )}

                {payment === "flooz" && (
                    <div className="p-3.5 border-2 border-black bg-[#BAE6FD] text-xs font-bold space-y-1">
                        <div className="font-black uppercase flex items-center gap-1.5">
                            <Phone className="w-4 h-4" /> Instructions Moov Money (Flooz) :
                        </div>
                        <p>Composez *155# et effectuez le transfert de {formatPrice(totalNum)} vers le numéro <strong>+228 99 00 00 00</strong> avec en motif <strong>{orderId}</strong>.</p>
                    </div>
                )}

                {payment === "cod" && (
                    <div className="p-3.5 border-2 border-black bg-[#F0F9FF] text-xs font-bold space-y-1">
                        <div className="font-black uppercase">Paiement en espèces à la livraison :</div>
                        <p>Vous réglerez le montant exact de {formatPrice(totalNum)} en mains propres au coursier lors de la remise de votre commande.</p>
                    </div>
                )}

                <div className="p-3 border-2 border-black bg-white text-xs font-bold flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 stroke-[2.5px] shrink-0" />
                    <span>Scellé d&apos;inviolabilité et certificat d&apos;authenticité Nova inclus dans le colis.</span>
                </div>
            </div>

            {/* Actions : WhatsApp et Boutiques */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                    href={whatsappTrackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white border-4 border-black px-8 py-4 font-black text-sm uppercase tracking-wider shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all"
                >
                    <MessageCircle className="w-5 h-5 stroke-[2.5px]" />
                    <span>SUIVRE MON COURSIER SUR WHATSAPP</span>
                </a>

                <Link
                    href="/"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7DD3FC] text-black border-4 border-black px-8 py-4 font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] transition-all"
                >
                    <span>RETOURNER À L&apos;ACCUEIL</span>
                    <ArrowRight className="w-4 h-4 stroke-[3px]" />
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
