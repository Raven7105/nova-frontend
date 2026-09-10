"use client"
import { Bell, CreditCard, RefreshCw, Truck } from "lucide-react"

const messages = [
    { icon: Truck, text: "Livraison offerte dès 50 000 FCFA à Lomé" },
    { icon: CreditCard, text: "Paiement T-Money, Flooz & Espèces à la livraison" },
    { icon: RefreshCw, text: "Stock 100% authentique disponible à Lomé 🇹🇬" },
    { icon: Bell, text: "Commande et assistance rapide par WhatsApp" },
]

export default function AnnouncementBar() {
    return (
        <div className="bg-[#BAE6FD] text-black text-xs font-black uppercase tracking-wider py-2.5 overflow-hidden border-b-4 border-black select-none">
            <div className="flex w-max animate-ticker items-center">
                {[...messages, ...messages, ...messages].map((msg, i) => (
                    <div key={i} className="flex items-center gap-3 mx-8 whitespace-nowrap">
                        <span className="bg-white border-2 border-black p-1 shadow-[2px_2px_0px_#000] flex items-center justify-center">
                            <msg.icon className="w-3.5 h-3.5 stroke-[3px]" />
                        </span>
                        <span>{msg.text}</span>
                        <span className="font-black text-black ml-4">✦</span>
                    </div>
                ))}
            </div>
        </div>
    )
}