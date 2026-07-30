import { Product, ProductVariant } from '@/types/product';

const defaultVariants: ProductVariant[] = [
  { size: 'U', inStock: true, stock: 10 }
];

const RAW_PRODUCTS: Product[] = [
  {
    "id": "DYNE_AUDIO_GO4",
    "slug": "jbl-go4-rgb",
    "name": "JBL GO4 RGB",
    "description": "Bluetooth 5.0 | Autonomía 7H | IP67 | RGB activo",
    "price": 26000,
    "category": "audio",
    "images": [
      "/images/products/go4rgb-1.png",
      "/images/products/go4rgb-2.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": true,
    "createdAt": "2026-07-30T05:50:23.102Z"
  },
  {
    "id": "DYNE_AUDIO_APP2",
    "slug": "airpods-pro-2da-gen",
    "name": "AirPods Pro 2da Gen",
    "description": "Carga inalámbrica | ANC activo | Autonomía 6H | Estuche con carga",
    "price": 24600,
    "category": "audio",
    "images": [
      "/images/products/airpodspro2-1.png",
      "/images/products/airpodspro2-2.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": true,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_AUDIO_JBL770",
    "slug": "jbl-tune-770bt",
    "name": "JBL Tune 770BT",
    "description": "Wireless / Pure Bass Sound | Autonomía 40H | Llamadas manos libres | Cable de audio desmontable | Conexión multipunto | Carga USB-C",
    "price": 32100,
    "category": "audio",
    "images": [
      "/images/products/jbltune770-2.png",
      "/images/products/jbltune770-1.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": true,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_AUDIO_FLIP7",
    "slug": "jbl-flip-7",
    "name": "JBL Flip 7",
    "description": "Bluetooth 5.4 / Auracast | Autonomía hasta 16H (Playtime Boost) | IP68 -- sumergible | 35W potencia total",
    "price": 52400,
    "category": "audio",
    "images": [
      "/images/products/jblflip7-2.png",
      "/images/products/jblflip7-1.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": true,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_ENERGIA_BP01",
    "slug": "battery-pack-magsafe",
    "name": "Battery Pack MagSafe",
    "description": "5000mAh | MagSafe inalámbrica | Ultracompacto | Alineación magnética",
    "price": 18800,
    "category": "energia",
    "images": [
      "/images/products/batterypack-1.png",
      "/images/products/batterypack-2.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": false,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_ENERGIA_MGC01",
    "slug": "magnetic-charger-magsafe",
    "name": "Magnetic Charger MagSafe",
    "description": "15W máx | MagSafe | USB-C | Compatible iPhone",
    "price": 15400,
    "category": "energia",
    "images": [
      "/images/products/magneticcharger-1.png",
      "/images/products/magneticcharger-2.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": false,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_ENERGIA_SAM45",
    "slug": "adaptador-samsung-45w",
    "name": "Adaptador Samsung 45W",
    "description": "Carga rápida | Compatible Samsung A45 45W",
    "price": 7700,
    "category": "energia",
    "images": [
      "/images/products/samsung45w-1.png",
      "/images/products/samsung45w-2.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": false,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_GAMING_NOGAGM",
    "slug": "combo-noga-gamer-nkb-407",
    "name": "Combo Noga Gamer (NKB-407)",
    "description": "Teclado retroiluminado USB 105 teclas (efecto arcoíris) | Mouse retroiluminado | Auricular 40mm 32 Ohm con mic | Mousepad 250x210mm",
    "price": 63200,
    "category": "gaming",
    "images": [
      "/images/products/nogagamer-1.png",
      "/images/products/nogagamer-2.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": false,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_SISTEMAS_NOGA01",
    "slug": "combo-noga",
    "name": "Combo Noga",
    "description": "Teclado 104 teclas | Conectividad 2.4G -- 10 metros de alcance | USB 2.0 | Mouse 1000 DPI | Compatible Windows / Android / iOS",
    "price": 21800,
    "category": "sistemas",
    "images": [
      "/images/products/nogas5900-1.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": false,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_CINEMA_PROY01",
    "slug": "proyector-nurik-hy300-pro",
    "name": "Proyector NURIK HY300 PRO+",
    "description": "Voltaje 220V | 8000 lúmenes | Resolución nativa 1920x1080 | Proyección de 40\" a 200\" | Wi-Fi integrado | Bluetooth 5.0 | 50.000H de vida útil",
    "price": 77100,
    "category": "cinema",
    "images": [
      "/images/products/proyector-1.png",
      "/images/products/proyector-2.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": false,
    "createdAt": "2026-07-30T05:50:23.103Z"
  },
  {
    "id": "DYNE_DRONES_DRN01",
    "slug": "drone-generico",
    "name": "Drone Genérico HD",
    "description": "Cámara HD | Wi-Fi 2.4 GHz | 2 baterías recargables incluidas",
    "price": 53400,
    "category": "drones",
    "images": [
      "/images/products/drone-1.png",
      "/images/products/drone-2.png"
    ],
    "variants": [
      {
        "size": "U",
        "inStock": true,
        "stock": 10
      }
    ],
    "featured": false,
    "createdAt": "2026-07-30T05:50:23.103Z"
  }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const products: Product[] = RAW_PRODUCTS.map(p => ({
  ...p,
  images: p.images.map(img => img.startsWith('http') ? img : `${basePath}${img}`)
}));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};
