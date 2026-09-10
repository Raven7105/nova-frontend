import React from "react"
import Link from "next/link"
import { Shield } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export const metadata = {
    title: "Mentions Légales | Nova",
    description: "Mentions légales et informations juridiques relatives au site Nova Archive.",
}

export default function MentionsLegalesPage() {
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
                    LÉGAL // MENTIONS LÉGALES
                </span>
            </nav>

            <div className="border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_#000] space-y-8">
                <div className="border-b-3 border-black pb-4">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_#000]">
                        <Shield className="w-3.5 h-3.5 stroke-[2.5px]" />
                        <span>INFORMATIONS JURIDIQUES</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                        MENTIONS LÉGALES
                    </h1>
                </div>

                <div className="space-y-6 text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
                    <section className="space-y-1.5">
                        <h2 className="text-sm font-black uppercase text-black">ÉDITEUR DE LA PLATEFORME & BOUTIQUE</h2>
                        <p><strong>Dénomination :</strong> NOVA TOGO SARL</p>
                        <p><strong>Capital social :</strong> 5 000 000 FCFA</p>
                        <p><strong>RCCM :</strong> TG-LOM-2024-B-1284 (Tribunal de Commerce de Lomé)</p>
                        <p><strong>NIF :</strong> 1001894231</p>
                        <p><strong>Siège & Boutique :</strong> Boulevard du 13 Janvier, Tokoin, Lomé, Togo</p>
                        <p><strong>Téléphone & WhatsApp :</strong> {SITE_CONFIG.whatsapp.displayPhone}</p>
                        <p><strong>Contact :</strong> contact@nova-togo.com</p>
                    </section>

                    <section className="space-y-1.5">
                        <h2 className="text-sm font-black uppercase text-black">HÉBERGEMENT DU SITE</h2>
                        <p>Le site nova-archive.com est hébergé par des serveurs européens sécurisés conformes aux normes RGPD.</p>
                    </section>

                    <section className="space-y-1.5">
                        <h2 className="text-sm font-black uppercase text-black">PROPRIÉTÉ INTELLECTUELLE</h2>
                        <p>L'ensemble des visuels, logos, textes et identités graphiques composant ce site sont la propriété exclusive de NOVA ARCHIVE SAS ou de leurs propriétaires de marques respectifs cités à titre référentiel.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
