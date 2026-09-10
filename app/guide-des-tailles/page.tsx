"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Ruler, Info, Check, ArrowRight } from "lucide-react"

export default function SizeGuidePage() {
    const [selectedBrand, setSelectedBrand] = useState<"nike" | "adidas" | "nb" | "asics">("nike")

    const SIZES_DATA = {
        nike: {
            name: "NIKE & AIR JORDAN",
            tip: "Taillent fidèlement à la pointure habituelle (True to Size). Si vous avez le pied large sur les Jordan 4, prenez une demi-taille au-dessus (+0.5 EU).",
            rows: [
                { eu: "38", usM: "5.5", usW: "7", uk: "5", cm: "24" },
                { eu: "39", usM: "6.5", usW: "8", uk: "6", cm: "24.5" },
                { eu: "40", usM: "7", usW: "8.5", uk: "6", cm: "25" },
                { eu: "41", usM: "8", usW: "9.5", uk: "7", cm: "26" },
                { eu: "42", usM: "8.5", usW: "10", uk: "7.5", cm: "26.5" },
                { eu: "42.5", usM: "9", usW: "10.5", uk: "8", cm: "27" },
                { eu: "43", usM: "9.5", usW: "11", uk: "8.5", cm: "27.5" },
                { eu: "44", usM: "10", usW: "11.5", uk: "9", cm: "28" },
                { eu: "44.5", usM: "10.5", usW: "12", uk: "9.5", cm: "28.5" },
                { eu: "45", usM: "11", usW: "12.5", uk: "10", cm: "29" },
                { eu: "46", usM: "12", usW: "13.5", uk: "11", cm: "30" },
            ]
        },
        adidas: {
            name: "ADIDAS & SAMBA",
            tip: "La Samba OG et la Gazelle taillent légèrement étroit. Nous conseillons de prendre une demi-pointure au-dessus si vous avez le pied fort.",
            rows: [
                { eu: "38", usM: "5.5", usW: "6.5", uk: "5", cm: "23.5" },
                { eu: "38 2/3", usM: "6", usW: "7", uk: "5.5", cm: "24" },
                { eu: "39 1/3", usM: "6.5", usW: "7.5", uk: "6", cm: "24.5" },
                { eu: "40", usM: "7", usW: "8", uk: "6.5", cm: "25" },
                { eu: "40 2/3", usM: "7.5", usW: "8.5", uk: "7", cm: "25.5" },
                { eu: "41 1/3", usM: "8", usW: "9", uk: "7.5", cm: "26" },
                { eu: "42", usM: "8.5", usW: "9.5", uk: "8", cm: "26.5" },
                { eu: "42 2/3", usM: "9", usW: "10", uk: "8.5", cm: "27" },
                { eu: "43 1/3", usM: "9.5", usW: "10.5", uk: "9", cm: "27.5" },
                { eu: "44", usM: "10", usW: "11", uk: "9.5", cm: "28" },
                { eu: "44 2/3", usM: "10.5", usW: "11.5", uk: "10", cm: "28.5" },
                { eu: "45 1/3", usM: "11", usW: "12", uk: "10.5", cm: "29" },
            ]
        },
        nb: {
            name: "NEW BALANCE (9060 / 2002R)",
            tip: "Très grand confort. Taillent fidèlement à votre taille habituelle. La boîte à orteils est naturellement plus généreuse que chez Nike.",
            rows: [
                { eu: "38.5", usM: "6", usW: "7.5", uk: "5.5", cm: "24" },
                { eu: "39.5", usM: "6.5", usW: "8", uk: "6", cm: "24.5" },
                { eu: "40", usM: "7", usW: "8.5", uk: "6.5", cm: "25" },
                { eu: "41", usM: "7.5", usW: "9", uk: "7", cm: "25.5" },
                { eu: "41.5", usM: "8", usW: "9.5", uk: "7.5", cm: "26" },
                { eu: "42", usM: "8.5", usW: "10", uk: "8", cm: "26.5" },
                { eu: "42.5", usM: "9", usW: "10.5", uk: "8.5", cm: "27" },
                { eu: "43", usM: "9.5", usW: "11", uk: "9", cm: "27.5" },
                { eu: "44", usM: "10", usW: "11.5", uk: "9.5", cm: "28" },
                { eu: "44.5", usM: "10.5", usW: "12", uk: "10", cm: "28.5" },
                { eu: "45", usM: "11", usW: "12.5", uk: "10.5", cm: "29" },
            ]
        },
        asics: {
            name: "ASICS (GEL-KAYANO / GEL-NYC)",
            tip: "Coupe ajustée et technique due au rembourrage épais de la cheville. Nous préconisons systématiquement +0.5 pointure au-dessus.",
            rows: [
                { eu: "39", usM: "6", usW: "7.5", uk: "5", cm: "24.5" },
                { eu: "39.5", usM: "6.5", usW: "8", uk: "5.5", cm: "25" },
                { eu: "40", usM: "7", usW: "8.5", uk: "6", cm: "25.25" },
                { eu: "40.5", usM: "7.5", usW: "9", uk: "6.5", cm: "25.5" },
                { eu: "41.5", usM: "8", usW: "9.5", uk: "7", cm: "26" },
                { eu: "42", usM: "8.5", usW: "10", uk: "7.5", cm: "26.5" },
                { eu: "42.5", usM: "9", usW: "10.5", uk: "8", cm: "27" },
                { eu: "43.5", usM: "9.5", usW: "11", uk: "8.5", cm: "27.5" },
                { eu: "44", usM: "10", usW: "11.5", uk: "9", cm: "28" },
                { eu: "44.5", usM: "10.5", usW: "12", uk: "9.5", cm: "28.25" },
                { eu: "45", usM: "11", usW: "12.5", uk: "10", cm: "28.5" },
            ]
        }
    }

    const currentBrand = SIZES_DATA[selectedBrand]

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
                    INFORMATIONS // GUIDE DES TAILLES
                </span>
            </nav>

            {/* En-tête */}
            <div className="relative mb-12 p-8 md:p-12 border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#000]">
                        <Ruler className="w-3.5 h-3.5 stroke-[2.5px]" />
                        <span>CONVERSION OFFICIELLE</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-black">
                        GUIDE DES <span className="bg-[#7DD3FC] px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0px_#000]">TAILLES</span>
                    </h1>

                    <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-2xl">
                        Consultez nos grilles officielles pour convertir vos pointures en EU, US Men, US Women, UK et Centimètres (CM). Un doute ? Notre support est joignable 6j/7.
                    </p>
                </div>
            </div>

            {/* Sélecteur de marque Néo-brutaliste */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8">
                {(["nike", "adidas", "nb", "asics"] as const).map((key) => {
                    const isSelected = selectedBrand === key
                    return (
                        <button
                            key={key}
                            onClick={() => setSelectedBrand(key)}
                            className={`px-5 py-3 border-3 border-black text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                                isSelected
                                    ? "bg-[#7DD3FC] text-black shadow-[4px_4px_0px_#000] -translate-y-0.5"
                                    : "bg-white text-black shadow-[2px_2px_0px_#000] hover:bg-[#BAE6FD]"
                            }`}
                        >
                            {SIZES_DATA[key].name}
                        </button>
                    )
                })}
            </div>

            {/* Boîte de conseil morphologique */}
            <div className="p-4 border-3 border-black bg-[#F0F9FF] shadow-[4px_4px_0px_#000] flex items-start gap-3 mb-8">
                <div className="p-1.5 bg-[#BAE6FD] border-2 border-black">
                    <Info className="w-4 h-4 stroke-[2.5px]" />
                </div>
                <div>
                    <h4 className="text-xs font-black uppercase mb-0.5">CONSEIL DE CHAUSSANT NOVA :</h4>
                    <p className="text-xs font-bold text-black/80">{currentBrand.tip}</p>
                </div>
            </div>

            {/* Tableau Néo-brutaliste */}
            <div className="border-4 border-black bg-white shadow-[8px_8px_0px_#000] overflow-x-auto mb-16">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-black text-white text-xs font-black uppercase border-b-3 border-black">
                            <th className="p-4 border-r-2 border-white/20">EU (FRANCE)</th>
                            <th className="p-4 border-r-2 border-white/20">US MEN</th>
                            <th className="p-4 border-r-2 border-white/20">US WOMEN</th>
                            <th className="p-4 border-r-2 border-white/20">UK</th>
                            <th className="p-4">CENTIMÈTRES (CM)</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs font-bold divide-y-2 divide-black/10">
                        {currentBrand.rows.map((row, idx) => (
                            <tr
                                key={row.eu}
                                className={`hover:bg-[#BAE6FD]/40 transition-colors ${
                                    idx % 2 === 0 ? "bg-white" : "bg-[#F0F9FF]/60"
                                }`}
                            >
                                <td className="p-4 font-black text-sm border-r-2 border-black/10">{row.eu}</td>
                                <td className="p-4 border-r-2 border-black/10">{row.usM}</td>
                                <td className="p-4 border-r-2 border-black/10">{row.usW}</td>
                                <td className="p-4 border-r-2 border-black/10">{row.uk}</td>
                                <td className="p-4 font-black">{row.cm} cm</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
