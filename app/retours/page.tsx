import React from "react"
import Link from "next/link"
import { RefreshCw, ShieldCheck, ArrowRight } from "lucide-react"

export const metadata = {
    title: "Politique de Retours & Échanges sous 14 jours | Nova",
    description: "Conditions pour effectuer un retour ou un échange de taille chez Nova.",
}

export default function RetoursPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap mb-10">
                <Link
                    href="/"
                    className="bg-white text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD] transition-colors"
                >
                    ACCUEIL
                </Link>
                <span className="font-black text-black">/</span>
                <span className="bg-[#BAE6FD] text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[2px_2px_0px_#000]">
                    SUPPORT // RETOURS & ÉCHANGES
                </span>
            </nav>

            <div className="border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_#000] space-y-8">
                <div className="border-b-3 border-black pb-4">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_#000]">
                        <RefreshCw className="w-3.5 h-3.5 stroke-[2.5px]" />
                        <span>SATISFAIT OU ÉCHANGÉ</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                        RETOURS & ÉCHANGES SOUS 14 JOURS
                    </h1>
                </div>

                <div className="p-4 border-3 border-black bg-[#F0F9FF] shadow-[4px_4px_0px_#000] flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 stroke-[2.5px] text-black shrink-0" />
                    <p className="text-xs font-black uppercase">
                        CONDITION STRICTE : LE SCELLÉ DE SÉCURITÉ NOVA NE DOIT PAS AVOIR ÉTÉ RETIRÉ NI COUPÉ.
                    </p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">1. COMMENT INITIER UN RETOUR ?</h2>
                        <p>
                            Envoyez simplement un email à <strong>retours@nova-archive.com</strong> en indiquant votre numéro de commande (#NOV-XXXX) et le motif de votre retour (demande d'échange de taille ou remboursement).
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">2. ÉTAT DU PRODUIT RETOURNÉ</h2>
                        <p>
                            La paire ou le vêtement doit être retourné dans son état rigoureusement neuf, dans sa boîte d'origine non abîmée, avec l'ensemble des lacets de rechange ou accessoires, et impérativement avec le scellé plastique Nova scellé intact.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">3. DÉLAI DE REMBOURSEMENT</h2>
                        <p>
                            Dès réception et vérification physique par notre équipe d'authentification sous 48h ouvrées, votre remboursement est exécuté directement sur le moyen de paiement utilisé lors de la commande.
                        </p>
                    </section>
                </div>

                <div className="pt-4 border-t-3 border-black flex justify-between items-center flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#7DD3FC] text-black border-3 border-black px-6 py-3 font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD]"
                    >
                        <span>FORMULER UNE DEMANDE DE RETOUR</span>
                        <ArrowRight className="w-4 h-4 stroke-[3px]" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
