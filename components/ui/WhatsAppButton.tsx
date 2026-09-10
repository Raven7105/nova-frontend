"use client"

import React, { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/config"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const defaultMessage = "Bonjour Nova ! Je souhaite avoir des informations sur un produit."

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Popover info */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-black p-4 w-72 mb-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-black/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-black">Service Client</h4>
                <p className="text-[10px] text-black/50 font-bold">En ligne • Réponse en &lt; 5 min</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-black/40 hover:text-black p-1 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-black/70 my-3 font-medium leading-relaxed">
            Besoin d&apos;aide pour une pointure, une commande ou votre livraison ? Discutez avec nous directement sur WhatsApp !
          </p>

          <a
            href={getWhatsAppUrl(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#1ebd5b] text-white text-xs font-black rounded-xl transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>DISCUTER SUR WHATSAPP</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebd5b] text-white shadow-xl hover:shadow-2xl border-2 border-white transition-all transform hover:scale-105 active:scale-95"
        aria-label="Ouvrir le chat WhatsApp Nova"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-700 border border-white text-[9px] font-black items-center justify-center">1</span>
        </span>
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Assistance WhatsApp</span>
      </button>
    </div>
  )
}
