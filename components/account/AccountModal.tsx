"use client"
import React, { useState } from "react"
import { X, User, Package, LogOut, CheckCircle2, ShieldCheck, Mail, Lock } from "lucide-react"

type AccountModalProps = {
    isOpen: boolean
    onClose: () => void
}

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [tab, setTab] = useState<"login" | "register">("login")
    const [email, setEmail] = useState("alexandre.nova@example.com")
    const [password, setPassword] = useState("••••••••")

    if (!isOpen) return null

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            />

            {/* Fenêtre modale Néo-brutaliste */}
            <div className="relative z-10 w-full max-w-lg bg-white border-4 border-black shadow-[10px_10px_0px_#000] overflow-hidden animate-fade-up">
                
                {/* En-tête */}
                <div className="p-5 border-b-4 border-black bg-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#BAE6FD] border-2 border-black p-1.5 shadow-[2px_2px_0px_#000]">
                            <User className="w-5 h-5 stroke-[2.5px]" />
                        </div>
                        <div>
                            <h2 className="text-base font-black uppercase tracking-tight">ESPACE CLIENT</h2>
                            <span className="text-[11px] font-bold text-black/60 uppercase">
                                {isLoggedIn ? "MEMBRE ARCHIVE CLUB" : "CONNEXION / INSCRIPTION"}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Fermer"
                        className="w-10 h-10 border-3 border-black bg-white text-black font-black flex items-center justify-center shadow-[3px_3px_0px_#000] hover:bg-[#FF4D4D] hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5 stroke-[3px]" />
                    </button>
                </div>

                {isLoggedIn ? (
                    /* Vue Connecté */
                    <div className="p-6 space-y-6">
                        <div className="p-4 border-3 border-black bg-[#F0F9FF] shadow-[4px_4px_0px_#000] flex items-center justify-between">
                            <div>
                                <span className="bg-[#BAE6FD] text-black text-[10px] font-black uppercase px-2 py-0.5 border border-black inline-block mb-1">
                                    ✦ STATUT : VIP ARCHIVE
                                </span>
                                <h3 className="text-base font-black uppercase">Alexandre Mercier</h3>
                                <p className="text-xs font-bold text-black/70">alexandre.nova@example.com</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="border-2 border-black bg-white px-3 py-1.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000] hover:bg-[#FF4D4D] hover:text-white transition-colors flex items-center gap-1.5"
                            >
                                <LogOut className="w-3.5 h-3.5 stroke-[2.5px]" />
                                <span>Quitter</span>
                            </button>
                        </div>

                        {/* Dernières commandes simulées */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                                    <Package className="w-4 h-4 stroke-[2.5px]" />
                                    <span>HISTORIQUE DES COMMANDES (1)</span>
                                </h4>
                            </div>

                            <div className="border-3 border-black bg-white p-3.5 shadow-[3px_3px_0px_#000] space-y-2">
                                <div className="flex items-center justify-between text-xs font-black">
                                    <span>COMMANDE #NOV-8942</span>
                                    <span className="bg-[#7DD3FC] text-black px-2 py-0.5 border border-black text-[10px]">
                                        LIVRÉE
                                    </span>
                                </div>
                                <p className="text-xs font-bold text-black/70">
                                    1x Air Jordan 4 Retro Bred Reimagined (EU 42)
                                </p>
                                <div className="text-[11px] font-bold text-black/50 pt-1 border-t border-black/10 flex justify-between">
                                    <span>Expédiée le 14/08/2026 • Livrée à Lomé</span>
                                    <span className="font-black text-black">95 000 FCFA</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 border-2 border-black bg-white flex items-center gap-2 text-xs font-bold text-black/80">
                            <ShieldCheck className="w-4 h-4 text-black stroke-[2.5px] shrink-0" />
                            <span>Authentification et facture PDF disponibles dans votre messagerie.</span>
                        </div>
                    </div>
                ) : (
                    /* Vue Non Connecté : Onglets Login / Register */
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-2 border-3 border-black bg-[#F0F9FF] p-1 shadow-[3px_3px_0px_#000]">
                            <button
                                onClick={() => setTab("login")}
                                className={`py-2 text-xs font-black uppercase transition-all ${
                                    tab === "login"
                                        ? "bg-black text-white shadow-[2px_2px_0px_#7DD3FC]"
                                        : "bg-white text-black hover:bg-[#BAE6FD]"
                                }`}
                            >
                                SE CONNECTER
                            </button>
                            <button
                                onClick={() => setTab("register")}
                                className={`py-2 text-xs font-black uppercase transition-all ${
                                    tab === "register"
                                        ? "bg-black text-white shadow-[2px_2px_0px_#7DD3FC]"
                                        : "bg-white text-black hover:bg-[#BAE6FD]"
                                }`}
                            >
                                S'INSCRIRE
                            </button>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            {tab === "register" && (
                                <div>
                                    <label className="block text-xs font-black uppercase mb-1">
                                        PRÉNOM & NOM :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Alexandre Mercier"
                                        required
                                        className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[3px_3px_0px_#000] focus:bg-[#BAE6FD]"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-black uppercase mb-1">
                                    ADRESSE E-MAIL :
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[3px_3px_0px_#000] focus:bg-[#BAE6FD]"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="text-xs font-black uppercase">MOT DE PASSE :</label>
                                    {tab === "login" && (
                                        <a href="#" className="text-[10px] font-black underline uppercase text-black/70">
                                            OUBLIÉ ?
                                        </a>
                                    )}
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[3px_3px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#7DD3FC] text-black border-4 border-black font-black text-xs uppercase tracking-widest shadow-[5px_5px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                            >
                                {tab === "login" ? "OUVRIR MA SESSION →" : "CRÉER MON COMPTE NOVA →"}
                            </button>
                        </form>

                        <div className="p-3 border-2 border-black bg-[#F0F9FF] text-[11px] font-bold text-black/70 text-center">
                            ✦ 5 000 FCFA offerts automatiquement crédités sur votre premier achat dès l'inscription.
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
