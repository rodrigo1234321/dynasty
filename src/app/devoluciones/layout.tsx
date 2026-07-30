import { BRAND } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devoluciones y Cambios',
  description: `Política de cambios, devoluciones y garantía de ${BRAND.name}. Conocé las condiciones y el proceso para gestionar tu solicitud.`,
};

export default function ReturnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
