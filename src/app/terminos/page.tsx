import React from 'react';
import type { Metadata } from 'next';
import { PageTransition } from '@/components/motion/PageTransition';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio',
  description: 'Términos y Condiciones de Uso y Compra de DYNASTY.',
};

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto min-h-screen">
        <header className="mb-12 border-b border-border-subtle pb-8">
          <h1 className="font-display text-3xl md:text-5xl uppercase tracking-wider mb-4">
            TÉRMINOS Y CONDICIONES DE SERVICIO
          </h1>
          <p className="text-sm font-mono text-text-muted">
            Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <div className="space-y-8 text-text-secondary leading-relaxed font-body">
          <section className="bg-surface-1 border border-border-subtle p-6 rounded-lg">
            <h2 className="font-display text-xl text-white uppercase tracking-wider mb-3">
              1. Aceptación de los Términos
            </h2>
            <p className="text-sm">
              Al acceder, navegar o realizar compras en el sitio web de <strong>DYNASTY</strong> ({BRAND.url}), el usuario acepta expresamente y de forma incondicional todos los términos, condiciones y políticas aquí detalladas, en consonancia con la legislación aplicable en la República Argentina.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              2. Precios y Moneda
            </h2>
            <p className="text-sm">
              Todos los precios exhibidos en la plataforma están expresados en <strong>Pesos Argentinos (ARS)</strong> e incluyen los impuestos correspondientes salvo que se especifique lo contrario. DYNASTY se reserva el derecho de modificar precios, promociones y disponibilidad sin previo aviso.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              3. Medios de Pago y Confirmación de Pedidos
            </h2>
            <p className="text-sm">
              Los pagos podrán realizarse mediante Mercado Pago, transferencia bancaria o efectivo al momento del retiro en nuestro local. El pedido se considerará confirmado una vez verificado el pago correspondiente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              4. Envíos y Entregas
            </h2>
            <p className="text-sm">
              Los envíos se realizan a través de servicios de correspondencia y correo en Argentina o mediante retiro presencial coordinado previamente en la dirección {BRAND.address}. Los plazos estimados de entrega son orientativos y pueden variar según la localidad de destino.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              5. Derecho de Arrepentimiento y Devoluciones
            </h2>
            <p className="text-sm">
              Conforme a la Ley N° 24.240 de Defensa del Consumidor de Argentina y el Código Civil y Comercial de la Nación, el comprador tiene derecho a revocar la compra dentro de los <strong>10 (diez) días corridos</strong> contados a partir de la recepción del producto. El producto debe encontrarse sin uso, en perfectas condiciones y con sus empaques originales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              6. Garantía de Productos
            </h2>
            <p className="text-sm">
              Todos los productos comercializados por DYNASTY cuentan con garantía oficial por defectos de fabricación. La garantía no cubre fallas causadas por mal uso, humedad, golpes, sobretensiones eléctricas o intervenciones no autorizadas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              7. Propiedad Intelectual
            </h2>
            <p className="text-sm">
              Todas las marcas, logos, textos, diseños, gráficos e imágenes expuestos en DYNASTY son propiedad exclusiva de la marca o de sus respectivos fabricantes y están protegidos por las leyes de propiedad intelectual.
            </p>
          </section>

          <section className="bg-surface-2/40 border border-border-subtle p-6 rounded-lg mt-8">
            <h2 className="font-display text-base text-white uppercase tracking-wider mb-2">
              Jurisdicción y Ley Aplicable
            </h2>
            <p className="text-xs text-text-muted">
              Estos términos y condiciones se rigen por las leyes de la República Argentina. Ante cualquier controversia, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la Ciudad de Mar del Plata, Provincia de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción.
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
