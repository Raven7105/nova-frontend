"use client"
import React from "react"
import { CartProvider } from "@/context/CartContext"
import { WishlistProvider } from "@/context/WishlistContext"
import CartDrawer from "@/components/cart/CartDrawer"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <WishlistProvider>
                {children}
                <CartDrawer />
                <WhatsAppButton />
            </WishlistProvider>
        </CartProvider>
    )
}
