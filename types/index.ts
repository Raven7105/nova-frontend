export type Product = {
    id: string          // identifiant unique
    brand: string       // ex: "NIKE"
    name: string        // ex: "Air Jordan 4"
    price: number       // ex: 333
    originalPrice: number  // ex: 370 (prix barré)
    discount: number    // ex: 10 (pour -10%)
    image: string       // URL de l'image
    is24h: boolean      // livraison 24h ou pas
    slug: string        // ex: "air-jordan-4" pour l'URL
}