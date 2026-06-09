"use client"
import { useRef } from "react"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Vidéo fond */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/vidéos/hero.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Bouton en bas centré */}
            <div className="absolute bottom-12 w-full flex justify-center z-20">
                <Link
                    href="/collections/sneakers"
                    className="border-2 border-white text-white px-14 py-4 text-xs tracking-[0.4em] uppercase rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                    DÉCOUVRIR
                </Link>
            </div>

        </div>
    )
}