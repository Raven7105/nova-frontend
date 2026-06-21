import { Product } from "@/types"

export const sneakersProducts: Product[] = [
  {
    id: "1",
    brand: "NEW BALANCE",
    name: "204L Mushroom Arid Stone",
    price: 120,
    originalPrice: 240,
    discount: 50,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80",
    is24h: true,
    slug: "new-balance-204l-mushroom"
  },
  {
    id: "2",
    brand: "ASICS",
    name: "Gel-Kayano 14 White Midnight",
    price: 144,
    originalPrice: 288,
    discount: 50,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    is24h: true,
    slug: "asics-gel-kayano-14"
  },
  {
    id: "3",
    brand: "ADIDAS",
    name: "Samba OG Cloud White Silver Green",
    price: 166,
    originalPrice: 385,
    discount: 10,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&q=80",
    is24h: true,
    slug: "adidas-samba-og"
  },
  {
    id: "4",
    brand: "AIR JORDAN",
    name: "Air Jordan 4 Retro Bred Reimagined",
    price: 171,
    originalPrice: 190,
    discount: 10,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80",
    is24h: true,
    slug: "air-jordan-4-retro-bred"
  },
  {
    id: "5",
    brand: "NIKE",
    name: "Air Force 1 Low White",
    price: 110,
    originalPrice: 130,
    discount: 15,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    is24h: false,
    slug: "nike-air-force-1-white"
  },
]

export const topnovaProducts: Product[] = [
  {
    id: "6",
    brand: "AIR JORDAN",
    name: "Air Jordan 4 Black Cat",
    price: 333,
    originalPrice: 370,
    discount: 10,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80",
    is24h: false,
    slug: "air-jordan-4-black-cat"
  },
  {
    id: "7",
    brand: "UGG",
    name: "Lowmel Chestnut",
    price: 135,
    originalPrice: 150,
    discount: 10,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
    is24h: true,
    slug: "ugg-lowmel-chestnut"
  },
  {
    id: "8",
    brand: "ASICS",
    name: "Gel-NYC Cream Mineral Beige Pink",
    price: 144,
    originalPrice: 169,
    discount: 15,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    is24h: true,
    slug: "asics-gel-nyc-cream"
  },
  {
    id: "9",
    brand: "NEW BALANCE",
    name: "New Balance 9060 Grey",
    price: 150,
    originalPrice: 180,
    discount: 10,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80",
    is24h: true,
    slug: "new-balance-9060-grey"
  },
  {
    id: "10",
    brand: "NIKE",
    name: "Dunk Low Panda",
    price: 120,
    originalPrice: 140,
    discount: 10,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    is24h: false,
    slug: "nike-dunk-low-panda"
  },
]
// Génère des variations pour avoir plus de produits à afficher
export const allSneakersProducts: Product[] = [
  ...sneakersProducts,
  ...topnovaProducts,
  ...sneakersProducts.map((p, i) => ({
    ...p,
    id: `${p.id}-dup1-${i}`,
    slug: `${p.slug}-v2`,
  })),
  ...topnovaProducts.map((p, i) => ({
    ...p,
    id: `${p.id}-dup1-${i}`,
    slug: `${p.slug}-v2`,
  })),
  ...sneakersProducts.map((p, i) => ({
    ...p,
    id: `${p.id}-dup2-${i}`,
    slug: `${p.slug}-v3`,
  })),
]