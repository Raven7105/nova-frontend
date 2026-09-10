import React from "react"
import Link from "next/link"
import { Lock } from "lucide-react"

export const metadata = {
    title: "Politique de Confidentialité & RGPD | Nova",
    description: "Protection des données personnelles et respect de votre vie privée chez Nova.",
}

export default function PrivacyPolicyPage() {
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
                    LÉGAL // CONFIDENTIALITÉ
                </span>
            </nav>

            <div className="border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_#000] space-y-8">
                <div className="border-b-3 border-black pb-4">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_#000]">
                        <Lock className="w-3.5 h-3.5 stroke-[2.5px]" />
                        <span>DONNÉES PERSONNELLES & RGPD</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                        POLITIQUE DE CONFIDENTIALITÉ
                    </h1>
                </div>

                <div className="space-y-6 text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">1. COLLECTE DES DONNÉES</h2>
                        <p>
                            Les données personnelles collectées (nom, adresse de livraison, email, numéro de téléphone) sont strictement nécessaires au traitement, à l'expédition et au suivi de vos commandes.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">2. PAIEMENT SÉCURISÉ & AUCUN STOCKAGE DE CARTE</h2>
                        <p>
                            Nova n'a jamais accès à vos numéros de cartes bancaires. Toutes les transactions sont cryptées et traitées par nos partenaires bancaires certifiés PCI-DSS et Alma.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">3. VOS DROITS (ACCÈS, RECTIFICATION, EFFACEMENT)</h2>
                        <p>
                            Conformément au RGPD, vous bénéficiez d'un droit d'accès, de rectification et de suppression de vos données sur simple demande par email à dpo@nova-archive.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
