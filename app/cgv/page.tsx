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
                            Les présentes Conditions Générales de Vente régissent l'ensemble des ventes conclues entre la société NOVA ARCHIVE SAS et tout consommateur effectuant un achat sur le site nova-archive.com.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 2 — GARANTIE D'AUTHENTICITÉ</h2>
                        <p>
                            Tous les produits commercialisés sur Nova sont garantis neufs, authentiques et munis de leur emballage d'origine. Chaque article est soumis à un protocole physique d'authentification et scellé par nos experts avant son expédition.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 3 — PRIX ET MODALITÉS DE PAIEMENT</h2>
                        <p>
                            Les prix sont indiqués en euros (€) Toutes Taxes Comprises (TTC). Le règlement s'effectue par carte bancaire sécurisée (3D Secure), Alma (paiement en 2x, 3x ou 4x sans frais) ou PayPal.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 4 — LIVRAISON & DÉLAIS</h2>
                        <p>
                            Les articles signalés en stock immédiat (⚡ 24H) sont expédiés le jour même pour toute commande passée avant 14h. La livraison est offerte en France et en Europe dès 180 € d'achats.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-sm font-black uppercase text-black">ARTICLE 5 — DROIT DE RÉTRACTATION & SCELLÉ</h2>
                        <p>
                            Conformément au Code de la consommation, vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation. Pour des raisons évidentes de protection contre la contrefaçon, le scellé de sécurité Nova ne doit en aucun cas être coupé ou endommagé.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
