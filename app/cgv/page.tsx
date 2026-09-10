import React from "react"
import Link from "next/link"
import { FileText } from "lucide-react"

export const metadata = {
    title: "Conditions Générales de Vente (CGV) | Nova",
    description: "Conditions générales de vente de la boutique Nova Archive.",
}

export default function CGVPage() {
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
                    LÉGAL // CGV
                </span>
            </nav>

            <div className="border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_#000] space-y-8">
                <div className="border-b-3 border-black pb-4">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_#000]">
                        <FileText className="w-3.5 h-3.5 stroke-[2.5px]" />
                        <span>DOCUMENT CONTRACTUEL</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                        CONDITIONS GÉNÉRALES DE VENTE
                    </h1>
                    <p className="text-xs font-bold text-black/60 mt-1">Dernière mise à jour : 10 Septembre 2026</p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 1 — OBJET & CHAMP D'APPLICATION</h2>
                        <p>
                            Les présentes Conditions Générales de Vente régissent l'ensemble des ventes conclues entre NOVA TOGO SARL et tout client effectuant un achat sur le site ou dans notre boutique située à Lomé, Togo.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 2 — GARANTIE D'AUTHENTICITÉ</h2>
                        <p>
                            Tous les produits commercialisés chez Nova Togo sont garantis 100% neufs, authentiques et munis de leur emballage d'origine. Chaque article fait l'objet d'un contrôle rigoureux avec scellé d'inviolabilité et certificat d'authenticité.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 3 — PRIX ET MODALITÉS DE PAIEMENT</h2>
                        <p>
                            Les prix sont indiqués en Franc CFA (FCFA / XOF) Toutes Taxes Comprises (TTC). Le règlement s'effectue par T-Money (Togocom *145#), Moov Money (Flooz *155#), paiement en espèces à la livraison (Cash on delivery) ou carte bancaire sécurisée (Visa / Mastercard).
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 4 — LIVRAISON & DÉLAIS AU TOGO</h2>
                        <p>
                            Les articles signalés en stock immédiat (⚡ 24H) sont disponibles immédiatement dans notre boutique à Lomé et livrés par coursier express le jour même ou sous 24h. La livraison à Lomé est 100% offerte dès 50 000 FCFA d'achats. Les expéditions dans les villes de l'intérieur du Togo (Kara, Sokodé, Kpalimé, etc.) s'effectuent sous 24h à 48h via les services de transport routier.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 5 — ÉCHANGES & DROIT DE RETOUR</h2>
                        <p>
                            Vous disposez d'un délai pour essayer votre paire et demander un échange de pointure ou un retour direct à notre boutique de Lomé. Pour préserver l'inviolabilité du produit, le scellé de sécurité Nova ne doit en aucun cas être coupé ou retiré.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
