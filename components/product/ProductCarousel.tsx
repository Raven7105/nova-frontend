import Image from "next/image"
import Link from "next/link"
import { Timer, Tag } from "lucide-react"
import { Product } from "@/types"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.slug}`} className="group block">

            {/* Image */}
            <div className="relative w-full aspect-square bg-[#f5f5f5] rounded-lg overflow-hidden">

                {/* Badge réduction — haut gauche */}
                {product.discount > 0 && (
                    <span className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        -{product.discount}%
                    </span>
                )}

                {/* Badge 48H — haut droite */}
                {product.is48h && (
                    <span className="absolute top-3 right-3 z-10 text-blue-600 text-xs font-bold flex items-center gap-1">
                        <Timer className="w-3.5 h-3.5" />
                        48H
                    </span>
                )}

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Infos */}
            <div className="mt-3">
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {product.brand}
                </p>
                <p className="text-sm text-gray-900 mt-0.5 leading-snug">
                    {product.name}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-sm text-gray-900">
                        à partir de <span className="font-semibold">{product.price.toFixed(2)} €</span>
                    </span>
                    {product.discount > 0 && (
                        <span className="text-xs line-through text-gray-400">
                            {product.originalPrice.toFixed(2)} €
                        </span>
                    )}
                </div>
            </div>

        </Link>
    )
}