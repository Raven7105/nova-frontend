"use client"
import { Package, Phone, ThumbsUp, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-16 border-t-4 border-black bg-white">

            {/* Trust bar — 4 garanties en cartes Néo-brutalistes */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
                <div className="text-center mb-10">
                    <span className="bg-[#BAE6FD] text-black font-black uppercase text-xs px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000] inline-block -rotate-1">
                        ENGAGEMENTS // NOVA
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mt-3">
                        POURQUOI COMMANDER CHEZ NOUS ?
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all">
                        <div className="border-2 border-black bg-[#BAE6FD] p-3 w-fit mb-4 shadow-[2px_2px_0px_#000]">
                            <Package className="w-6 h-6 stroke-[2.5px]" />
                        </div>
                        <h3 className="text-sm font-black uppercase mb-2 tracking-wide">LIVRAISON OFFERTE</h3>
                        <p className="text-xs font-bold text-black/70 leading-relaxed">
                            Livraison express offerte dans toute l'Europe dès <strong className="text-black font-black">180€</strong> d'achats avec suivi en temps réel.
                        </p>
                    </div>

                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all">
                        <div className="border-2 border-black bg-[#7DD3FC] p-3 w-fit mb-4 shadow-[2px_2px_0px_#000]">
                            <Phone className="w-6 h-6 stroke-[2.5px]" />
                        </div>
                        <h3 className="text-sm font-black uppercase mb-2 tracking-wide">SUPPORT DÉDIÉ</h3>
                        <p className="text-xs font-bold text-black/70 leading-relaxed">
                            Une équipe d'experts sneakers réactive et joignable du <strong className="text-black font-black">lundi au samedi</strong> par chat ou mail.
                        </p>
                    </div>

                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all">
                        <div className="border-2 border-black bg-[#BAE6FD] p-3 w-fit mb-4 shadow-[2px_2px_0px_#000]">
                            <ThumbsUp className="w-6 h-6 stroke-[2.5px]" />
                        </div>
                        <h3 className="text-sm font-black uppercase mb-2 tracking-wide">100% AUTHENTIQUE</h3>
                        <p className="text-xs font-bold text-black/70 leading-relaxed">
                            Chaque paire vendue sur <strong className="text-black font-black">Nova</strong> passe par un protocole strict d'authentification physique.
                        </p>
                    </div>

                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all">
                        <div className="border-2 border-black bg-[#7DD3FC] p-3 w-fit mb-4 shadow-[2px_2px_0px_#000]">
                            <CreditCard className="w-6 h-6 stroke-[2.5px]" />
                        </div>
                        <h3 className="text-sm font-black uppercase mb-2 tracking-wide">PAIEMENT SÉCURISÉ</h3>
                        <p className="text-xs font-bold text-black/70 leading-relaxed">
                            Réglez en toute sérénité en <strong className="text-black font-black">2, 3 ou 4 fois</strong> sans frais grâce à notre partenaire Alma.
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
                            <li><Link href="/collections/livraison-24h" className="hover:text-[#7DD3FC] transition-colors">✦ Livraison 24H</Link></li>
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
                            <li><Link href="/faq" className="hover:text-[#BAE6FD] transition-colors">✦ FAQ & Support</Link></li>
                            <li><Link href="/authenticite" className="hover:text-[#BAE6FD] transition-colors">✦ Authentification Nova</Link></li>
                            <li><Link href="/guide-des-tailles" className="hover:text-[#BAE6FD] transition-colors">✦ Guide des Pointures</Link></li>
                            <li><Link href="/retours" className="hover:text-[#BAE6FD] transition-colors">✦ Retours sous 14 jours</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <div className="inline-block bg-white text-black border-2 border-white px-2 py-0.5 font-black text-xs uppercase tracking-wider mb-5">
                            NEWSLETTER
                        </div>
                        <p className="text-xs font-bold text-gray-300 mb-4 leading-relaxed">
                            Inscrivez-vous pour débloquer <strong className="text-white">10€ offerts</strong> sur votre première commande et recevoir les alertes restocks.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-stretch shadow-[4px_4px_0px_#7DD3FC]">
                            <input
                                type="email"
                                placeholder="Votre email..."
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

                    {/* Logo & Réseaux */}
                    <div>
                        <div className="inline-block bg-[#7DD3FC] text-black border-2 border-white px-2 py-0.5 font-black text-xs uppercase tracking-wider mb-5">
                            NOVA CLUB
                        </div>
                        <p className="text-xs font-bold text-gray-300 mb-4 leading-relaxed">
                            Rejoignez la communauté streetwear la plus active et participez à nos giveaways mensuels.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="border-2 border-white bg-white text-black p-2 shadow-[3px_3px_0px_#7DD3FC] hover:bg-[#7DD3FC] hover:border-[#7DD3FC] transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bas du footer */}
                <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-gray-400 gap-4">
                    <span>© {new Date().getFullYear()} NOVA SNEAKERS & STREETWEAR — TOUS DROITS RÉSERVÉS.</span>
                    <span className="bg-white text-black px-2 py-0.5 border border-white font-black text-[10px]">
                        AUTHENTIC // ARCHIVE
                    </span>
                </div>
            </div>

            {/* Liens légaux Néo-brutalistes */}
            <div className="bg-[#BAE6FD] py-4 px-6 border-t-4 border-black flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-black uppercase text-black tracking-wider">
                <Link href="/mentions-legales" className="hover:underline">MENTIONS LÉGALES</Link>
                <span>✦</span>
                <Link href="/cgv" className="hover:underline">CGV</Link>
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