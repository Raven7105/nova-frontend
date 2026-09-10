"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from "lucide-react"

export default function ContactPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("Question sur une commande")
    const [message, setMessage] = useState("")
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSent(true)
    }

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
                    SUPPORT // CONTACT
                </span>
            </nav>

            {/* En-tête */}
            <div className="relative mb-12 p-8 md:p-12 border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 bg-[#BAE6FD] border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#000]">
                        <Mail className="w-3.5 h-3.5 stroke-[2.5px]" />
                        <span>SUPPORT CLIENT DÉDIÉ</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-black">
                        CONTACTEZ <span className="bg-[#7DD3FC] px-3 py-0.5 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0px_#000]">L'ÉQUIPE</span> NOVA
                    </h1>

                    <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-2xl">
                        Une question sur l'authenticité d'une paire, la disponibilité d'une pointure ou le statut de votre colis ? Nos experts vous répondent avec réactivité.
                    </p>
                </div>
            </div>

            {/* Grille 2 colonnes : Coordonnées & Formulaire */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

                {/* Coordonnées & Horaires */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_#000] space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#BAE6FD] border-2 border-black">
                                <Mail className="w-5 h-5 stroke-[2.5px]" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase">E-MAIL OFFICIEL</h4>
                                <p className="text-xs font-bold text-black/80 mt-0.5">contact@nova-archive.com</p>
                                <span className="text-[10px] font-black text-[#0284C7]">Réponse garantie en moins de 2h</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#7DD3FC] border-2 border-black">
                                <Phone className="w-5 h-5 stroke-[2.5px]" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase">LIGNE DIRECTE</h4>
                                <p className="text-xs font-bold text-black/80 mt-0.5">+33 (0)1 42 68 90 00</p>
                                <span className="text-[10px] font-bold text-black/60">Appel non surtaxé</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#BAE6FD] border-2 border-black">
                                <Clock className="w-5 h-5 stroke-[2.5px]" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase">HORAIRES DU SUPPORT</h4>
                                <p className="text-xs font-bold text-black/80 mt-0.5">Du lundi au samedi</p>
                                <span className="text-[10px] font-bold text-black/60">09h00 — 19h00 (Heure de Paris)</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white border-2 border-black">
                                <MapPin className="w-5 h-5 stroke-[2.5px]" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase">ATELIER & CENTRE LOGISTIQUE</h4>
                                <p className="text-xs font-bold text-black/80 mt-0.5">Nova Archive Headquarters</p>
                                <span className="text-[10px] font-bold text-black/60">75003 Paris, France</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulaire de message */}
                <div className="lg:col-span-7 border-4 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_#000]">
                    {isSent ? (
                        <div className="py-12 text-center space-y-4 animate-fade-up">
                            <div className="inline-block p-4 bg-[#BAE6FD] border-3 border-black shadow-[4px_4px_0px_#000] rotate-2">
                                <CheckCircle2 className="w-12 h-12 stroke-[2.5px] text-black" />
                            </div>
                            <h3 className="text-2xl font-black uppercase">MESSAGE TRANSMIS AVEC SUCCÈS !</h3>
                            <p className="text-xs sm:text-sm font-bold text-black/70 max-w-md mx-auto">
                                Merci {name || "cher client"}. Notre équipe d'authentification et support a bien reçu votre demande et vous répondra sous peu à l'adresse {email || "votre email"}.
                            </p>
                            <button
                                onClick={() => setIsSent(false)}
                                className="mt-4 px-6 py-3 bg-[#7DD3FC] text-black border-3 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:bg-[#BAE6FD]"
                            >
                                ENVOYER UN AUTRE MESSAGE
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="pb-3 border-b-2 border-black flex items-center justify-between">
                                <h2 className="text-base font-black uppercase tracking-tight">FORMULAIRE DE CONTACT</h2>
                                <span className="text-[10px] font-black bg-[#BAE6FD] px-2 py-0.5 border border-black">
                                    ✦ SUPPORT EN DIRECT
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black uppercase mb-1">VOTRE NOM & PRÉNOM *</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder="Alexandre Mercier"
                                        className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase mb-1">VOTRE ADRESSE E-MAIL *</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="alexandre@example.com"
                                        className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase mb-1">OBJET DU MESSAGE *</label>
                                <select
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full border-3 border-black p-3 text-xs font-black uppercase outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                >
                                    <option value="Question sur une commande">Question sur une commande en cours</option>
                                    <option value="Demande d'authenticité">Demande d'authenticité / Scellé</option>
                                    <option value="Recherche de pointure ou modèle">Recherche d'une pointure introuvable</option>
                                    <option value="Retour ou échange de taille">Retour ou échange de taille</option>
                                    <option value="Autre demande">Autre demande</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase mb-1">VOTRE MESSAGE *</label>
                                <textarea
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    placeholder="Détaillez votre demande ou mentionnez votre numéro de commande..."
                                    className="w-full border-3 border-black p-3 text-xs font-bold outline-none shadow-[2px_2px_0px_#000] focus:bg-[#BAE6FD]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#7DD3FC] text-black border-4 border-black font-black text-xs uppercase tracking-widest shadow-[5px_5px_0px_#000] hover:bg-[#BAE6FD] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Send className="w-4 h-4 stroke-[2.5px]" />
                                <span>TRANSMETTRE MON MESSAGE AU SUPPORT</span>
                            </button>
                        </form>
                    )}
                </div>

            </div>

        </div>
    )
}
