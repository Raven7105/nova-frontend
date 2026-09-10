export type ProductCategory = "sneakers" | "clothes" | "accessories"

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
    category?: ProductCategory
    sizes?: string[]
    description?: string
}

export type CartItem = {
    product: Product
    size: string
    quantity: number
}

export type Order = {
    id: string
    date: string
    items: CartItem[]
    total: number
    shippingMethod: "standard" | "express"
    status: "Confirmée" | "En préparation" | "Expédiée"
    customer: {
        firstName: string
        lastName: string
        email: string
        address: string
        city: string
        postalCode: string
    }
}