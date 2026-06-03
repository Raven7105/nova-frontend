"use client"
import { Bell, CreditCard, RefreshCw, Truck } from "lucide-react"

const messages = [
    { icon: Truck, text: "Livraison offerte dès 180€" },
    { icon: RefreshCw, text: "3 jours pour changer d'avis" },
    { icon: CreditCard, text: "Paiement 2, 3, 4 fois sans frais" },
    { icon: Bell, text: "10€ offert avec la newsletter" },
]

export default function AnnouncementBar() {
    return (
        <div className="bg-[#f9e4d4] text-black text-xs font-medium py-2 overflow-hidden">
            <div className="flex w-max animate-ticker">
                {/* On duplique pour que ce soit infini */}
                {[...messages, ...messages].map((msg, i) => (
                    <span key={i} className="flex items-center gap-2 mx-16 h-8 whitespace-nowrap">
                        <msg.icon className="w-4 h-4" />
                        <span>{msg.text}</span>
                    </span>
                ))}
            </div>
        </div>
    )
}