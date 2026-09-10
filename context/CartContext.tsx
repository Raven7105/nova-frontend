"use client"
import React, { createContext, useContext, useState, useEffect } from "react"
import { Product, CartItem } from "@/types"

type CartContextType = {
    items: CartItem[]
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    openCart: () => void
    closeCart: () => void
    addToCart: (product: Product, size: string, quantity?: number) => void
    removeFromCart: (productId: string, size: string) => void
    updateQuantity: (productId: string, size: string, quantity: number) => void
    clearCart: () => void
    itemCount: number
    subtotal: number
    shipping: number
    total: number
    freeShippingThreshold: number
    freeShippingRemaining: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const FREE_SHIPPING_THRESHOLD = 180
const STANDARD_SHIPPING_COST = 9.90

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    // Chargement initial depuis localStorage
    useEffect(() => {
        try {
            const saved = localStorage.getItem("nova_cart")
            if (saved) {
                setItems(JSON.parse(saved))
            }
        } catch (e) {
            console.error("Erreur de chargement du panier :", e)
        } finally {
            setIsLoaded(true)
        }
    }, [])

    // Sauvegarde à chaque changement
    useEffect(() => {
        if (!isLoaded) return
        try {
            localStorage.setItem("nova_cart", JSON.stringify(items))
        } catch (e) {
            console.error("Erreur de sauvegarde du panier :", e)
        }
    }, [items, isLoaded])

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const addToCart = (product: Product, size: string, quantity = 1) => {
        setItems((prev) => {
            const index = prev.findIndex((item) => item.product.id === product.id && item.size === size)
            if (index > -1) {
                const updated = [...prev]
                updated[index] = {
                    ...updated[index],
                    quantity: updated[index].quantity + quantity,
                }
                return updated
            }
            return [...prev, { product, size, quantity }]
        })
        setIsOpen(true)
    }

    const removeFromCart = (productId: string, size: string) => {
        setItems((prev) => prev.filter((item) => !(item.product.id === productId && item.size === size)))
    }

    const updateQuantity = (productId: string, size: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId, size)
            return
        }
        setItems((prev) =>
            prev.map((item) => {
                if (item.product.id === productId && item.size === size) {
                    return { ...item, quantity }
                }
                return item
            })
        )
    }

    const clearCart = () => {
        setItems([])
    }

    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)
    const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST
    const total = subtotal + shipping
    const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)

    return (
        <CartContext.Provider
            value={{
                items,
                isOpen,
                setIsOpen,
                openCart,
                closeCart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                itemCount,
                subtotal,
                shipping,
                total,
                freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
                freeShippingRemaining,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
