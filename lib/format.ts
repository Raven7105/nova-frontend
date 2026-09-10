/**
 * Formatage des prix pour le marché togolais en Franc CFA (FCFA / XOF)
 */
export function formatPrice(price: number): string {
  if (typeof price !== "number" || isNaN(price)) return "0 FCFA"
  // Format avec séparateur d'espace pour les milliers (ex: 65 000 FCFA)
  return `${Math.round(price).toLocaleString("fr-FR")} FCFA`
}

/**
 * Calcul du montant en devise alternative si besoin (ex: équivalent approximatif)
 */
export function formatFCFA(amount: number): string {
  return formatPrice(amount)
}
