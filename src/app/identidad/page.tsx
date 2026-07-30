import { Reveal } from '@/components/motion/Reveal';
import { PageTransition } from '@/components/motion/PageTransition';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Flame, ShieldCheck, Zap } from 'lucide-react';

export default function IdentityPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pb-24">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 text-center border-b border-border-subtle bg-surface-0">
          <Reveal>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-6">
              OUR IDENTITY
            </h1>
            <p className="font-mono text-sm tracking-[0.2em] text-primary">
              BUILT DIFFERENT SINCE DAY ONE
            </p>
          </Reveal>
        </section>

        {/* Manifesto Section */}
        <section className="py-24 px-4 max-w-4xl mx-auto text-center">
          <Reveal>
            <blockquote className="font-display text-2xl md:text-4xl leading-snug tracking-wide uppercase mb-16">
              &ldquo;We don&apos;t follow trends.<br className="hidden md:block"/> We set the standard.<br className="hidden md:block"/> DYNASTY is more than a brand — it&apos;s a statement.&rdquo;
            </blockquote>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-24">
            <Reveal delay={0.1}>
              <div className="flex flex-col items-start">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase mb-2">AUTHENTICITY</h3>
                <p className="text-text-secondary text-sm">Cada prenda está diseñada para destacar. No hay copias, no hay atajos. Solo diseño real para la calle real.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-start">
                <Flame className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase mb-2">QUALITY</h3>
                <p className="text-text-secondary text-sm">Materiales pesados, costuras reforzadas, cortes precisos. Ropa hecha para resistir y envejecer con estilo.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col items-start">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase mb-2">REBELLION</h3>
                <p className="text-text-secondary text-sm">Nacimos para romper el molde. Si buscas lo convencional, estás en el lugar equivocado.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Visual Section */}
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
              <div className="bg-surface-2 rounded-lg col-span-2 row-span-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted font-mono text-xs">VISUAL_01</div>
              </div>
              <div className="bg-surface-2 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted font-mono text-xs">VISUAL_02</div>
              </div>
              <div className="bg-surface-2 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted font-mono text-xs">VISUAL_03</div>
              </div>
              <div className="bg-surface-2 rounded-lg col-span-2 md:col-span-1 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted font-mono text-xs">VISUAL_04</div>
              </div>
              <div className="bg-surface-2 rounded-lg col-span-2 md:col-span-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted font-mono text-xs">VISUAL_05</div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Store Info */}
        <section className="py-24 px-4 max-w-5xl mx-auto">
          <Reveal>
            <div className="bg-surface-1 border border-border-subtle p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 aspect-square bg-surface-2 flex items-center justify-center relative">
                 <div className="text-text-muted font-mono text-sm">MAP_PLACEHOLDER</div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-display text-3xl uppercase tracking-wider mb-6">NUESTRA BASE</h2>
                <div className="space-y-6 font-mono text-sm">
                  <div>
                    <p className="text-text-muted mb-1">DIRECCIÓN</p>
                    <p className="text-white text-base">39 y Edison<br/>Mar del Plata, BA</p>
                  </div>
                  <div>
                    <p className="text-text-muted mb-1">HORARIOS</p>
                    <p className="text-white text-base">Lunes a Sábados<br/>10:00 - 13:00 / 17:00 - 20:30</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <Reveal>
            <Link href="/productos">
              <Button variant="cta" size="lg">EXPLORAR COLECCIÓN</Button>
            </Link>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  );
}