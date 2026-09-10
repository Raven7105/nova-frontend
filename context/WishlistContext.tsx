"use client"
import React, { createContext, useContext, useState, useEffect } from "react"

type WishlistContextType = {
    wishlist: string[]
    toggleWishlist: (productId: string) => void
    isWishlisted: (productId: string) => boolean
    wishlistCount: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlist, setWishlist] = useState<string[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        try {
            const saved = localStorage.getItem("nova_wishlist")
            if (saved) {
                setWishlist(JSON.parse(saved))
            }
        } catch (e) {
            console.error("Erreur de chargement des favoris :", e)
        } finally {
            setIsLoaded(true)
        }
    }, [])

    useEffect(() => {
        if (!isLoaded) return
        try {
            localStorage.setItem("nova_wishlist", JSON.stringify(wishlist))
        } catch (e) {
            console.error("Erreur de sauvegarde des favoris :", e)
        }
    }, [wishlist, isLoaded])

    const toggleWishlist = (productId: string) => {
        setWishlist((prev) =>
            prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
        )
    }

    const isWishlisted = (productId: string) => wishlist.includes(productId)

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                toggleWishlist,
                isWishlisted,
                wishlistCount: wishlist.length,
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlist() {
    const context = useContext(WishlistContext)
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider")
    }
    return context
}
