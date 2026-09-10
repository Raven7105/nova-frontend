import React from "react"
import Link from "next/link"
import { ShieldCheck, Sparkles, CheckCircle2, Eye, Sun, Box, Lock, Award } from "lucide-react"

export const metadata = {
    title: "Protocole d'Authenticité 100% Vérifié | Nova Archive",
    description: "Découvrez notre protocole physique d'authentification en 7 étapes strictes pour chaque paire et vêtement.",
}

const STEPS = [
    {
        num: "01",
        title: "INSPECTION DU PACKAGING & ÉTIQUETTES",
        desc: "Examen minutieux de la boîte d'origine : polices de caractères, étiquettes UPC/EAN, tampon de fabrication intérieur, papier de soie et code-barres de distribution officielle.",
        icon: Box,
    },
    {
        num: "02",
        title: "ANALYSE DES MATÉRIAUX & ODEURS",
        desc: "Les répliques utilisent des colles industrielles chimiques et des cuirs synthétiques de basse facture. Nos experts inspectent le grain du cuir, le suède et l'odeur caractéristique de l'usine d'origine.",
        icon: Eye,
    },
    {
        num: "03",
        title: "CONTRÔLE DES COUTURES & GÉOMÉTRIE",
        desc: "Vérification au millimètre des points de piqûre (densité, régularité, alignement). Évaluation des proportions exactes du talon, de la toe-box et des empiècements signature.",
        icon: Award,
    },
    {
        num: "04",
        title: "PASSAGE SOUS LAMPE ULTRAVIOLET (UV)",
        desc: "La lumière noire révèle instantanément les traces de colle dissimulées, les fils de couture anormaux et les tampons secrets invisibles à l'œil nu qui trahissent les contrefaçons.",
        icon: Sun,
    },
    {
        num: "05",
        title: "SEMELLES EXTÉRIEURES & COUSSIN D'AIR",
        desc: "Test de rigidité de la structure de torsion (torsion shank), flexibilité de la semelle en gomme et vérification de la pressurisation des unités Nike Air ou du gel amortissant Asics.",
        icon: Sparkles,
    },
    {
        num: "06",
        title: "DOUBLE CONTRÔLE PAR DEUX EXPERTS",
        desc: "Aucune pièce n'est validée par une seule personne. Deux spécialistes indépendants doivent apposer leur visa d'authenticité avant toute autorisation de mise en stock.",
        icon: CheckCircle2,
    },
    {
        num: "07",
        title: "SCELLÉ D'INVIOLABILITÉ NOVA SCELLÉ",
        desc: "Une fois 100% approuvée, la paire est équipée de notre scellé numéroté inviolable Nova et accompagnée de son certificat papier d'authenticité physique infalsifiable.",
        icon: Lock,
    },
]

export default function AuthenticityPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

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
                    PROTOCOLE // AUTHENTICITÉ
                </span>
            </nav>

            {/* En-tête Néo-brutaliste */}
            <div className="relative mb-16 p-8 md:p-14 border-4 border-black bg-white shadow-[10px_10px_0px_#000]">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#000]">
                        <ShieldCheck className="w-4 h-4 stroke-[2.5px]" />
                        <span>GARANTIE SANS FAILLE</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-black">
                        100% AUTHENTIQUE. <span className="bg-[#7DD3FC] px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0px_#000]">ZÉRO DOUTE.</span>
                    </h1>

                    <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-2xl">
                        Dans un marché saturé de contrefaçons toujours plus poussées, Nova applique une rigueur chirurgicale. Chaque produit proposé sur notre plateforme est physiquement contrôlé dans nos ateliers en France.
                    </p>
                </div>
            </div>

            {/* Grille des 7 étapes du protocole */}
            <div className="mb-20 space-y-6">
                <div className="border-b-4 border-black pb-4">
                    <span className="text-xs font-black uppercase tracking-wider bg-[#BAE6FD] px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000]">
                        MÉTHODOLOGIE OFFICIELLE
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-2">
                        LE PROTOCOLE DE VÉRIFICATION EN 7 ÉTAPES
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STEPS.map((step) => {
                        const Icon = step.icon
                        return (
                            <div
                                key={step.num}
                                className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-black bg-black text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#7DD3FC]">
                                            {step.num}
                                        </span>
                                        <div className="p-2.5 bg-[#BAE6FD] border-2 border-black">
                                            <Icon className="w-5 h-5 stroke-[2.5px]" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-black uppercase mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs font-bold text-black/70 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Bannière Scellé Nova */}
            <div className="border-4 border-black bg-[#F0F9FF] p-8 md:p-12 shadow-[8px_8px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                <div className="space-y-3 max-w-xl">
                    <span className="bg-black text-white text-xs font-black uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#7DD3FC]">
                        SCELLÉ DE SÉCURITÉ INVIOLABLE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                        NE COUPEZ PAS LE SCELLÉ AVANT D'AVOIR ESSAYÉ
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
                        Chaque article porte notre bague de sécurité scellée. Tant que ce scellé reste intact, vous bénéficiez de notre garantie de retour gratuit sous 14 jours sans poser de question.
                    </p>
                </div>

                <div>
                    <Link
                        href="/collections/sneakers"
                        className="inline-block bg-[#7DD3FC] text-black border-4 border-black px-8 py-4 font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-1 active:translate-y-1 transition-all"
                    >
                        COMMANDER EN TOUTE CONFIANCE →
                    </Link>
                </div>
            </div>

        </div>
    )
}
