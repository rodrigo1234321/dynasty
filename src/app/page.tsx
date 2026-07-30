import { HeroBanner } from '@/components/brand/HeroBanner';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { Reveal } from '@/components/motion/Reveal';
import { products, getProductsByCategory } from '@/lib/products';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const categories = [
    { id: 'audio', name: 'AUDIO' },
    { id: 'energia', name: 'ENERGÍA' },
    { id: 'gaming', name: 'GAMING & SISTEMAS' },
  ];
  
  return (
    <div className="min-h-screen">
      <HeroBanner />
      
      <main className="pb-24">
        {/* New Drops */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
                NUEVOS INGRESOS
              </h2>
              <Link href="/productos" className="hidden md:block">
                <Button variant="outline" size="sm">VER TODO</Button>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ProductGrid products={featuredProducts} />
          </Reveal>
          <div className="mt-8 flex justify-center md:hidden">
            <Link href="/productos">
              <Button variant="outline">VER TODO</Button>
            </Link>
          </div>
        </section>

        {/* Pickup Banner */}
        <Reveal>
          <section className="max-w-5xl mx-auto px-4 py-8 mb-24">
            <div className="border-l-4 border-primary bg-surface-1 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-center text-center md:text-left">
              <div className="w-12 h-12 bg-surface-2 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl uppercase tracking-wide mb-1">
                  ¿Estás en Mar del Plata?
                </h3>
                <p className="text-text-secondary">
                  Retirá gratis por nuestro local — <span className="text-white font-medium">39 y Edison</span>
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Category Divisions */}
        {categories.map((category) => {
          // Group gaming and sistemas together for display if needed
          const catProducts = category.id === 'gaming' 
            ? [...getProductsByCategory('gaming'), ...getProductsByCategory('sistemas')]
            : getProductsByCategory(category.id);
            
          if (catProducts.length === 0) return null;
          
          return (
            <section key={category.id} className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-border-subtle/50 mt-12 pt-24 first:mt-0 first:border-0 first:pt-12">
              <Reveal>
                <div className="flex justify-between items-end mb-12">
                  <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
                    {category.name}
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <ProductGrid products={catProducts.slice(0, 4)} />
              </Reveal>
            </section>
          );
        })}

        <div className="mt-16 flex justify-center">
          <Link href="/productos">
            <Button variant="cta" size="lg">VER CATÁLOGO COMPLETO</Button>
          </Link>
        </div>

        {/* Brand Statement */}
        <section className="py-32 px-4 bg-surface-1 mt-24">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-widest mb-8">
                WE ARE DYNASTY
              </h2>
              <div className="h-px w-24 bg-border-subtle mb-8" />
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
                No vendemos solo productos, construimos tu setup perfecto. Tecnología seleccionada en Mar del Plata para aquellos que exigen el máximo rendimiento y el mejor diseño.
                <span className="block mt-4 text-white font-mono tracking-widest text-sm uppercase">Built Different</span>
              </p>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}