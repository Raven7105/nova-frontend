/**
 * Configuration centralisée du site Nova
 * Permet de modifier facilement le numéro WhatsApp, les coordonnées et les paramètres de la boutique
 * via des variables d'environnement (.env.local) ou directement ici.
 */

export const SITE_CONFIG = {
  name: "Nova",
  fullName: "Nova Sneakers & Streetwear",
  country: "Togo",
  currency: "FCFA",

  // Configuration WhatsApp
  whatsapp: {
    /**
     * Numéro international WhatsApp sans espaces ni "+" (ex: "22890123456" pour le Togo)
     * Configurable via la variable d'environnement NEXT_PUBLIC_WHATSAPP_PHONE
     */
    phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "22890000000",

    /**
     * Format lisible affiché sur le site (ex: "+228 90 00 00 00")
     * Configurable via NEXT_PUBLIC_WHATSAPP_DISPLAY
     */
    displayPhone: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+228 90 00 00 00",
  },

  // Coordonnées physiques & service client
  contact: {
    address: "Boulevard du 13 Janvier, Tokoin, Lomé",
    city: "Lomé",
    email: "contact@nova-togo.com",
    hours: "Lun - Sam (9h - 19h)",
  },

  // Paramètres de livraison & commandes
  shipping: {
    freeThreshold: 50000, // Livraison offerte dès 50 000 FCFA
    standardFee: 1500,    // Coursier express Lomé
  },
}

/**
 * Génère une URL directe WhatsApp (wa.me) propre avec un message pré-rempli
 * Nettoie automatiquement les caractères non numériques du numéro
 */
export function getWhatsAppUrl(message?: string): string {
  const cleanPhone = SITE_CONFIG.whatsapp.phone.replace(/[^0-9]/g, "")
  if (!message) {
    return `https://wa.me/${cleanPhone}`
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
}
