"use client"
import { Package, Phone, ThumbsUp, CreditCard, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-16 border-t-4 border-black bg-white">

            {/* Trust bar — 4 garanties en cartes Néo-brutalistes */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
                <div className="text-center mb-10">
                    <span className="bg-[#BAE6FD] text-black font-black uppercase text-xs px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000] inline-block -rotate-1">
                        ENGAGEMENTS // NOVA TOGO 🇹🇬
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mt-3">
                        POURQUOI COMMANDER CHEZ NOVA TOGO ?
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all">
                        <div className="border-2 border-black bg-[#BAE6FD] p-3 w-fit mb-4 shadow-[2px_2px_0px_#000]">
                            <Package className="w-6 h-6 stroke-[2.5px]" />
                        </div>
                        <h3 className="text-sm font-black uppercase mb-2 tracking-wide">LIVRAISON COURSIER</h3>
                        <p className="text-xs font-bold text-black/70 leading-relaxed">
                            Livraison express partout à Lomé, offerte dès <strong className="text-black font-black">50 000 FCFA</strong> d&apos;achats avec suivi en temps réel.
                        </p>
                    </div>

                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all">
                        <div className="border-2 border-black bg-[#7DD3FC] p-3 w-fit mb-4 shadow-[2px_2px_0px_#000]">
                            <MessageCircle className="w-6 h-6 stroke-[2.5px]" />
                        </div>
                        <h3 className="text-sm font-black uppercase mb-2 tracking-wide">SUPPORT WHATSAPP 7J/7</h3>
                        <p className="text-xs font-bold text-black/70 leading-relaxed">
                            Une équipe réactive à Lomé joignable directement sur WhatsApp au <strong className="text-black font-black">+228 90 00 00 00</strong>.
                        </p>
                    </div>

                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all">
                        <div className="border-2 border-black bg-[#BAE6FD] p-3 w-fit mb-4 shadow-[2px_2px_0px_#000]">
                            <ThumbsUp className="w-6 h-6 stroke-[2.5px]" />
                        </div>
                        <h3 className="text-sm font-black uppercase mb-2 tracking-wide">100% AUTHENTIQUE</h3>
                        <p className="text-xs font-bold text-black/70 leading-relaxed">
                            Chaque paire disponible chez <strong className="text-black font-black">Nova Togo</strong> fait l&apos;objet d&apos;un contrôle physique avec scellé garanti.
                        </p>
                    </div>

                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all">
                        <div className="border-2 border-black bg-[#7DD3FC] p-3 w-fit mb-4 shadow-[2px_2px_0px_#000]">
                            <CreditCard className="w-6 h-6 stroke-[2.5px]" />
                        </div>
                        <h3 className="text-sm font-black uppercase mb-2 tracking-wide">T-MONEY, FLOOZ & CASH</h3>
                        <p className="text-xs font-bold text-black/70 leading-relaxed">
                            Réglez par Mobile Money ou directement en <strong className="text-black font-black">espèces à la livraison</strong> après réception de votre colis.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer principal sombre */}
            <div className="bg-black text-white pt-16 pb-12 px-6 md:px-12 border-t-4 border-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Collections */}
                    <div>
                        <div className="inline-block bg-[#7DD3FC] text-black border-2 border-white px-2 py-0.5 font-black text-xs uppercase tracking-wider mb-5">
                            COLLECTIONS
                        </div>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-gray-300">
                            <li><Link href="/collections/sneakers" className="hover:text-[#7DD3FC] transition-colors">✦ Sneakers Exclusives</Link></li>
                            <li><Link href="/collections/livraison-24h" className="hover:text-[#7DD3FC] transition-colors">✦ Stock Immédiat Lomé</Link></li>
                            <li><Link href="/collections/clothes" className="hover:text-[#7DD3FC] transition-colors">✦ Streetwear Archive</Link></li>
                            <li><Link href="/collections/nouveautes" className="hover:text-[#7DD3FC] transition-colors">✦ Nouveautés & Drops</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <div className="inline-block bg-[#BAE6FD] text-black border-2 border-white px-2 py-0.5 font-black text-xs uppercase tracking-wider mb-5">
                            INFORMATIONS
                        </div>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-gray-300">
                            <li><Link href="/faq" className="hover:text-[#BAE6FD] transition-colors">✦ FAQ & Livraisons Togo</Link></li>
                            <li><Link href="/authenticite" className="hover:text-[#BAE6FD] transition-colors">✦ Authenticité Certifiée</Link></li>
                            <li><Link href="/guide-des-tailles" className="hover:text-[#BAE6FD] transition-colors">✦ Guide des Pointures</Link></li>
                            <li><Link href="/retours" className="hover:text-[#BAE6FD] transition-colors">✦ Échanges & Retours Lomé</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <div className="inline-block bg-white text-black border-2 border-white px-2 py-0.5 font-black text-xs uppercase tracking-wider mb-5">
                            NOVA CLUB TOGO
                        </div>
                        <p className="text-xs font-bold text-gray-300 mb-4 leading-relaxed">
                            Inscrivez-vous pour débloquer <strong className="text-white">5 000 FCFA offerts</strong> sur votre première commande et recevoir les alertes des arrivages à Lomé.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-stretch shadow-[4px_4px_0px_#7DD3FC]">
                            <input
                                type="email"
                                placeholder="Votre email ou numéro..."
                                className="bg-white text-black font-bold text-xs px-3 py-2.5 border-2 border-black outline-none flex-1 placeholder:text-black/50"
                            />
                            <button
                                type="submit"
                                aria-label="S'inscrire"
                                className="bg-[#7DD3FC] text-black border-2 border-l-0 border-black px-4 font-black hover:bg-white active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center cursor-pointer"
                            >
                                <ArrowRight className="w-4 h-4 stroke-[3px]" />
                            </button>
                        </form>
                    </div>

                    {/* Boutique & Contact */}
                    <div>
                        <div className="inline-block bg-[#7DD3FC] text-black border-2 border-white px-2 py-0.5 font-black text-xs uppercase tracking-wider mb-5">
                            BOUTIQUE LOMÉ
                        </div>
                        <p className="text-xs font-bold text-gray-300 mb-2 leading-relaxed">
                            📍 Boulevard du 13 Janvier, Tokoin / Lomé, TOGO
                        </p>
                        <p className="text-xs font-bold text-gray-300 mb-4 leading-relaxed">
                            📞 +228 90 00 00 00 • Ouvert du Lun au Sam (9h - 19h)
                        </p>
                        <div className="flex gap-2">
                            <span className="bg-white text-black text-[10px] font-black px-2 py-1 border border-white">
                                T-MONEY
                            </span>
                            <span className="bg-[#008751] text-white text-[10px] font-black px-2 py-1 border border-white">
                                FLOOZ
                            </span>
                            <span className="bg-[#25D366] text-white text-[10px] font-black px-2 py-1 border border-white">
                                CASH
                            </span>
                        </div>
                    </div>

                </div>

                {/* Bas du footer */}
                <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-gray-400 gap-4">
                    <span>© {new Date().getFullYear()} NOVA TOGO — SNEAKERS & STREETWEAR LOMÉ — TOUS DROITS RÉSERVÉS.</span>
                    <span className="bg-white text-black px-2 py-0.5 border border-white font-black text-[10px]">
                        LOMÉ // TOGO 🇹🇬
                    </span>
                </div>
            </div>

            {/* Liens légaux Néo-brutalistes */}
            <div className="bg-[#BAE6FD] py-4 px-6 border-t-4 border-black flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-black uppercase text-black tracking-wider">
                <Link href="/mentions-legales" className="hover:underline">MENTIONS LÉGALES</Link>
                <span>✦</span>
                <Link href="/cgv" className="hover:underline">CGV TOGO</Link>
                <span>✦</span>
                <Link href="/retours" className="hover:underline">RETOURS & ÉCHANGES</Link>
                <span>✦</span>
                <Link href="/politique-de-confidentialite" className="hover:underline">CONFIDENTIALITÉ</Link>
                <span>✦</span>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <span>✦</span>
                <Link href="/contact" className="hover:underline">CONTACT</Link>
            </div>

        </footer>
    )
}