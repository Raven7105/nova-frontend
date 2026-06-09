"use client"

import { MessageCircleReply, MessageSquare, Sailboat } from "lucide-react"
import { text } from "stream/consumers"


const messages = [
    {icon: MessageSquare, text: "Every steps count"},
    {icon : MessageCircleReply, text:"With NOVA we have it"},
    {icon : Sailboat, text:"ALright"}
]


export default function MegaMenu() {
    return (
        <div className="absolute left-0 w-full bg-white text-black shadow-xl py-8 px-30 z-50">
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