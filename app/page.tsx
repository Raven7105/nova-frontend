import Hero from "@/components/layout/Hero";
import PromoBar from "@/components/layout/PromoBar";
import ProductCarousel from "@/components/product/ProductCarousel";
import { sneakersProducts, topnovaProducts } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="sticky top-0 z-30 -mt-10">
        <PromoBar />
      </div>
      <ProductCarousel
        title="SNEAKERS"
        products={sneakersProducts}
        href="/collections/sneakers"
      />
      <ProductCarousel
        title="TOP NOVA"
        products={topnovaProducts}
      />
    </main>
  )
}

