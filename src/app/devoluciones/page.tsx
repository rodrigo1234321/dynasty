'use client';

import Link from 'next/link';
import { RotateCcw, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { PageTransition } from '@/components/motion/PageTransition';
import { BRAND } from '@/lib/constants';
import { Reveal } from '@/components/motion/Reveal';

export default function ReturnsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pb-24">
        {/* Header */}
        <section className="pt-32 pb-16 px-4 text-center border-b border-border-subtle bg-surface-0">
          <Reveal>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-6">
              DEVOLUCIONES Y CAMBIOS
            </h1>
            <p className="font-mono text-sm tracking-[0.2em] text-primary">
              POLÍTICA DE GARANTÍA Y ARREPENTIMIENTO (LEY 24.240)
            </p>
          </Reveal>
        </section>

        {/* Content */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Reveal>
              <div className="bg-surface-1 border border-border-subtle p-8 rounded-none flex flex-col items-start h-full">
                <RotateCcw className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase mb-3 text-white">Derecho de Arrepentimiento</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Conforme a la Ley de Defensa del Consumidor (Ley 24.240), tenés <strong className="text-white">10 días corridos</strong> desde que recibís el producto para solicitar la devolución o cancelación de tu compra realizada online sin costo alguno.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-surface-1 border border-border-subtle p-8 rounded-none flex flex-col items-start h-full">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase mb-3 text-white">Garantía por Defecto</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Todos nuestros gadgets cuentan con garantía directa ante fallas de fabricación. Si tu equipo presenta algún inconveniente técnico, nuestro equipo de soporte gestiona el cambio o reparación de inmediato.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Steps */}
          <Reveal>
            <div className="bg-surface-1 border border-border-subtle p-8 mb-12">
              <h2 className="font-display text-2xl uppercase tracking-wider mb-6 text-white border-b border-border-subtle pb-4">
                Pasos para realizar un cambio o devolución
              </h2>
              
              <ol className="space-y-6 text-sm text-text-secondary">
                <li className="flex items-start gap-4">
                  <span className="font-mono text-primary font-bold text-lg bg-surface-2 px-3 py-1 border border-border-subtle">01</span>
                  <div>
                    <strong className="text-white block text-base mb-1">Contactanos por WhatsApp o Email</strong>
                    Escribinos a nuestro WhatsApp <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono">{BRAND.phone}</a> o por correo a <span className="font-mono text-white">{BRAND.email}</span> indicando tu número de pedido y el motivo del cambio o devolución.
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="font-mono text-primary font-bold text-lg bg-surface-2 px-3 py-1 border border-border-subtle">02</span>
                  <div>
                    <strong className="text-white block text-base mb-1">Verificación de estado</strong>
                    El producto debe encontrarse sin uso, conservando su empaque original, sellos, cables, accesorios y manuales en perfecto estado.
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="font-mono text-primary font-bold text-lg bg-surface-2 px-3 py-1 border border-border-subtle">03</span>
                  <div>
                    <strong className="text-white block text-base mb-1">Coordinación de despacho / retiro</strong>
                    Podés coordinar la entrega sin cargo en nuestro local de Mar del Plata o solicitar la devolución mediante despacho postal. Una vez recibido el equipo y auditado, se procederá al cambio o reembolso correspondiente.
                  </div>
                </li>
              </ol>
            </div>
          </Reveal>

          {/* Guarantee Notes */}
          <Reveal delay={0.2}>
            <div className="border border-border-subtle p-6 bg-surface-0 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <MessageSquare className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-display text-white uppercase text-base mb-1">¿Tenés dudas sobre tu pedido?</h4>
                  <p className="text-text-muted text-xs">Nuestro equipo te asesora directamente en tiempo real.</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hola%20Dynasty,%20tengo%20una%20consulta%20sobre%20cambios/devoluciones`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-black font-display uppercase tracking-wider px-6 py-3 text-sm hover:bg-white transition-colors flex-shrink-0"
              >
                Contactar Soporte
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  );
}
