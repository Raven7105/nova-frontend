import Hero from "@/components/layout/Hero";
import PromoBar from "@/components/layout/PromoBar";
import ProductCarousel from "@/components/product/ProductCarousel";
import { frenchMonthProducts, sneakersProducts } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="sticky top-0 z-30 -mt-10">
        <PromoBar />
      </div>
      <ProductCarousel title="SNEAKERS" products={frenchMonthProducts} />
      <ProductCarousel title="TOP NOVA" products={sneakersProducts} />
    </main>
  )
}

