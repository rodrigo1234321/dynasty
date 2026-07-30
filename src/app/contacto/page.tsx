import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, AtSign, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { PageTransition } from '@/components/motion/PageTransition';
import { Button } from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contactate con ${BRAND.name}: WhatsApp, email, Instagram o visitanos en nuestro local de Mar del Plata.`,
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pb-24">
        <section className="pt-32 pb-16 px-4 text-center border-b border-border-subtle bg-surface-0">
          <Reveal>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-6">
              CONTACTO
            </h1>
            <p className="font-mono text-sm tracking-[0.2em] text-primary">
              ESTAMOS PARA AYUDARTE
            </p>
          </Reveal>
        </section>

        <section className="py-24 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div className="bg-surface-1 border border-border-subtle p-8 h-full flex flex-col">
                <h2 className="font-display text-2xl uppercase tracking-wider mb-8">
                  Escribinos
                </h2>

                <div className="space-y-6 font-mono text-sm flex-1">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>WhatsApp: {BRAND.phone}</span>
                  </a>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{BRAND.email}</span>
                  </a>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{BRAND.phone}</span>
                  </a>
                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors"
                  >
                    <AtSign className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>@dynasty.arg</span>
                  </a>
                </div>

                <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-8">
                  <Button variant="cta" size="lg" fullWidth>
                    HABLAR POR WHATSAPP
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-surface-1 border border-border-subtle p-8 h-full">
                <h2 className="font-display text-2xl uppercase tracking-wider mb-8">
                  Nuestra base
                </h2>

                <div className="space-y-6 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text-muted mb-1">DIRECCIÓN</p>
                      <p className="text-white text-base">39 y Edison<br />Mar del Plata, BA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text-muted mb-1">HORARIOS</p>
                      <p className="text-white text-base">
                        Lunes a Sábados<br />10:00 - 13:00 / 17:00 - 20:30
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border-subtle">
                  <Link href="/productos">
                    <Button variant="outline" size="lg" fullWidth>
                      VER CATÁLOGO
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
