import ProductCard from "./ProductCard"
import { Product } from "@/types"

type Props = {
    products: Product[]
}

export default function ProductGrid({ products }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}