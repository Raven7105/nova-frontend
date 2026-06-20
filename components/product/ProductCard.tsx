import Image from "next/image"
import Link from "next/link"
import { Timer, Tag } from "lucide-react"
import { Product } from "@/types"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.slug}`} className="group">

            {/* Image */}
            <div className="relative w-full h-64 bg-white rounded-lg overflow-hidden">

                {/* Badge réduction — haut gauche */}
                {product.discount > 0 && (
                    <span className="absolute top-2 left-2 z-10 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        -{product.discount}%
                    </span>
                )}

                {/* Badge 48H — haut droite */}
                {product.is48h && (
                    <span className="absolute top-2 right-2 z-10 text-blue-500 text-xs font-bold flex items-center gap-1">
                        <Timer className="w-3 h-3" />
                        48H
                    </span>
                )}

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Infos */}
            <div className="mt-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                    {product.brand}
                </p>
                <p className="text-sm font-medium mt-1">
                    {product.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold">
                        à partir de {product.price}.00 €
                    </span>
                    {product.discount > 0 && (
                        <span className="text-xs line-through text-gray-400">
                            {product.originalPrice}.00 €
                        </span>
                    )}
                </div>
            </div>

        </Link>
    )
}