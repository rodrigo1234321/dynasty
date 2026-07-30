import React from 'react';
import type { Metadata } from 'next';
import { PageTransition } from '@/components/motion/PageTransition';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de Privacidad y Protección de Datos Personales de DYNASTY.',
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto min-h-screen">
        <header className="mb-12 border-b border-border-subtle pb-8">
          <h1 className="font-display text-3xl md:text-5xl uppercase tracking-wider mb-4">
            POLÍTICA DE PRIVACIDAD
          </h1>
          <p className="text-sm font-mono text-text-muted">
            Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <div className="space-y-8 text-text-secondary leading-relaxed font-body">
          <section className="bg-surface-1 border border-border-subtle p-6 rounded-lg">
            <h2 className="font-display text-xl text-white uppercase tracking-wider mb-3">
              1. Responsable del Tratamiento de Datos
            </h2>
            <p className="text-sm mb-2">
              En <strong>DYNASTY</strong> (en adelante, &quot;el Sitio&quot; o &quot;nosotros&quot;), nos tomamos muy en serio la privacidad y la protección de los datos personales de nuestros usuarios y clientes.
            </p>
            <ul className="text-xs font-mono space-y-1 text-text-muted mt-2">
              <li>• Ubiación: {BRAND.address}</li>
              <li>• Email de contacto: {BRAND.email}</li>
              <li>• Marco normativo: Ley N° 25.326 de Protección de Datos Personales de la República Argentina y normativas internacionales aplicables.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              2. Información que Recopilamos
            </h2>
            <p className="text-sm">
              Recopilamos únicamente los datos necesarios para brindar nuestros servicios de venta y entrega de productos de tecnología:
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 text-text-muted pl-2">
              <li><strong>Datos de Contacto y Envío:</strong> Nombre, apellido, correo electrónico, teléfono y dirección postal facilitados voluntariamente por el usuario al realizar un pedido o completar el formulario de contacto.</li>
              <li><strong>Datos de Navegación y Preferencias:</strong> Productos guardados en favoritos, estado del carrito de compras y datos de sesión almacenados localmente en su dispositivo (localStorage).</li>
              <li><strong>Datos Técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo y páginas visitadas para fines estadísticos y de seguridad.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              3. Finalidad del Tratamiento de Datos
            </h2>
            <p className="text-sm">
              Los datos personales recolectados son utilizados exclusivamente para:
            </p>
            <ol className="list-decimal list-inside text-sm space-y-2 text-text-muted pl-2">
              <li>Procesar, coordinar y entregar los pedidos realizados a través del sitio web o WhatsApp.</li>
              <li>Responder a consultas, solicitudes de soporte técnico o garantías.</li>
              <li>Mejorar la experiencia de usuario y la navegación en nuestro catálogo.</li>
              <li>Cumplir con obligaciones legales y fiscales vigentes en la República Argentina.</li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              4. No Comercialización y Protección de Datos
            </h2>
            <p className="text-sm font-medium text-white">
              DYNASTY NO vende, alquila, cede ni comparte sus datos personales con terceros para fines comerciales o publicitarios bajo ninguna circunstancia.
            </p>
            <p className="text-sm text-text-muted">
              Únicamente podrán compartirse datos estrictamente necesarios con servicios de logística y correo para efectuar la entrega física de los productos solicitados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              5. Uso de Cookies y Almacenamiento Local
            </h2>
            <p className="text-sm">
              Utilizamos almacenamiento local (localStorage) y cookies técnicas esenciales para mantener el estado de su carrito de compras y sus productos favoritos sin requerir inicio de sesión obligatorio. Puede configurar o borrar las cookies desde los ajustes de su navegador en cualquier momento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-primary pl-3">
              6. Derechos del Titular de los Datos (Derechos ARCO)
            </h2>
            <p className="text-sm">
              Conforme a la Ley N° 25.326, usted tiene derecho a acceder a sus datos personales, solicitar su actualización, rectificación o la eliminación total de nuestras bases de datos de forma gratuita.
            </p>
            <p className="text-sm text-text-muted">
              Para ejercer cualquier derecho ARCO, envíe un correo electrónico a <strong>{BRAND.email}</strong> indicando su solicitud.
            </p>
          </section>

          <section className="bg-surface-2/40 border border-border-subtle p-6 rounded-lg mt-8">
            <h2 className="font-display text-base text-white uppercase tracking-wider mb-2">
              Órgano de Control
            </h2>
            <p className="text-xs text-text-muted">
              La Agencia de Acceso a la Información Pública (AAIP), Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
