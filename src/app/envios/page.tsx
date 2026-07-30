import type { Metadata } from 'next';
import { Truck, Store, Percent } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { PageTransition } from '@/components/motion/PageTransition';
import { ShippingCalculator } from '@/components/shop/ShippingCalculator';
import { formatPrice } from '@/lib/utils';
import { BRAND, FREE_SHIPPING_THRESHOLD, TRANSFER_DISCOUNT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Envíos',
  description: `Opciones de envío de ${BRAND.name}: a domicilio en toda Argentina o retiro gratis por nuestro local en Mar del Plata.`,
};

export default function ShippingPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pb-24">
        <section className="pt-32 pb-16 px-4 text-center border-b border-border-subtle bg-surface-0">
          <Reveal>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-6">
              ENVÍOS
            </h1>
            <p className="font-mono text-sm tracking-[0.2em] text-primary">
              A TODO EL PAÍS
            </p>
          </Reveal>
        </section>

        <section className="py-24 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
            <Reveal>
              <div className="flex flex-col items-start">
                <Truck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase mb-2">Envío a domicilio</h3>
                <p className="text-text-secondary text-sm">
                  Hacemos envíos a todo el país. El costo se calcula según tu código postal al finalizar la compra.
                  Comprando desde {formatPrice(FREE_SHIPPING_THRESHOLD)} el envío es gratis.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col items-start">
                <Store className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase mb-2">Retiro en local</h3>
                <p className="text-text-secondary text-sm">
                  Retirá tu pedido sin cargo en 39 y Edison, Mar del Plata. Lunes a sábados de 10:00 a 13:00 y de 17:00 a 20:30.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-start">
                <Percent className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase mb-2">Pagando por transferencia</h3>
                <p className="text-text-secondary text-sm">
                  Elegí transferencia bancaria como método de pago en el checkout y obtené {TRANSFER_DISCOUNT * 100}% de descuento sobre el total de tu compra.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="max-w-md mx-auto">
              <ShippingCalculator />
            </div>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  );
}
