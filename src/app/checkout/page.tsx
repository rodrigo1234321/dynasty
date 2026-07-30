'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { PageTransition } from '@/components/motion/PageTransition';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';
import { BRAND } from '@/lib/constants';

type PaymentMethod = 'mercadopago' | 'transferencia' | 'efectivo';

const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  mercadopago: 'Mercado Pago',
  transferencia: 'Transferencia bancaria',
  efectivo: 'Efectivo al retirar',
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCartStore();
  const [shippingMethod, setShippingMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mercadopago');
  const [contact, setContact] = useState({ email: '', firstName: '', lastName: '', phone: '' });
  const [address, setAddress] = useState({ street: '', apartment: '', postalCode: '', city: '', province: '' });

  useEffect(() => {
    if (items.length === 0) {
      router.push('/productos');
    }
  }, [items, router]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-text-muted font-mono mb-4">El carrito está vacío</p>
          <Button variant="outline" onClick={() => router.push('/productos')}>
            IR A LA TIENDA
          </Button>
        </div>
      </div>
    );
  }

  const subtotal = totalPrice();
  const shippingCost = shippingMethod === 'pickup' ? 0 : 5000; // Mock shipping cost
  const transferDiscount = paymentMethod === 'transferencia' ? subtotal * 0.15 : 0;
  const total = subtotal + shippingCost - transferDiscount;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const deliveryLine =
      shippingMethod === 'delivery'
        ? `Entrega: ${address.street}${address.apartment ? `, ${address.apartment}` : ''}, ${address.city}, ${address.province} (CP ${address.postalCode})`
        : 'Entrega: retiro por el local (39 y Edison, Mar del Plata)';

    const messageLines = [
      'Hola! Quiero confirmar este pedido DYNASTY:',
      '',
      ...items.map((item) => `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`),
      '',
      `Subtotal: ${formatPrice(subtotal)}`,
      `Envío: ${shippingMethod === 'pickup' ? 'Retiro en local (gratis)' : formatPrice(shippingCost)}`,
      ...(transferDiscount > 0 ? [`Descuento transferencia (15%): -${formatPrice(transferDiscount)}`] : []),
      `Total: ${formatPrice(total)}`,
      '',
      `Pago: ${PAYMENT_LABELS[paymentMethod]}`,
      `Contacto: ${contact.firstName} ${contact.lastName} — ${contact.phone} — ${contact.email}`,
      deliveryLine,
    ];

    const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(messageLines.join('\n'))}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    clearCart();
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto min-h-screen">
        <h1 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-12">
          CHECKOUT
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Form */}
          <div className="flex-1 space-y-12">
            
            <section>
              <h2 className="font-display text-xl uppercase mb-6 flex items-center gap-3">
                <span className="text-primary font-mono text-sm">01</span> 
                Contacto
              </h2>
              <div className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                  value={contact.email}
                  onChange={(e) => setContact((prev) => ({ ...prev, email: e.target.value }))}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Nombre"
                    name="firstName"
                    placeholder="Tu nombre"
                    required
                    value={contact.firstName}
                    onChange={(e) => setContact((prev) => ({ ...prev, firstName: e.target.value }))}
                  />
                  <Input
                    label="Apellido"
                    name="lastName"
                    placeholder="Tu apellido"
                    required
                    value={contact.lastName}
                    onChange={(e) => setContact((prev) => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
                <Input
                  label="Teléfono"
                  type="tel"
                  name="phone"
                  placeholder="Código de área + número"
                  required
                  value={contact.phone}
                  onChange={(e) => setContact((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </section>

            <div className="h-px bg-border-subtle" />

            <section>
              <h2 className="font-display text-xl uppercase mb-6 flex items-center gap-3">
                <span className="text-primary font-mono text-sm">02</span> 
                Entrega
              </h2>
              <div className="space-y-4 mb-6">
                <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${shippingMethod === 'delivery' ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-1 hover:border-border-hover'}`}>
                  <input 
                    type="radio" 
                    name="shipping" 
                    className="mr-4 accent-primary" 
                    checked={shippingMethod === 'delivery'}
                    onChange={() => setShippingMethod('delivery')}
                  />
                  <div className="flex-1">
                    <p className="font-medium">Envío a domicilio</p>
                    <p className="text-sm text-text-secondary">A todo el país</p>
                  </div>
                </label>
                <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${shippingMethod === 'pickup' ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-1 hover:border-border-hover'}`}>
                  <input 
                    type="radio" 
                    name="shipping" 
                    className="mr-4 accent-primary" 
                    checked={shippingMethod === 'pickup'}
                    onChange={() => setShippingMethod('pickup')}
                  />
                  <div className="flex-1">
                    <p className="font-medium">Retiro por local (GRATIS)</p>
                    <p className="text-sm text-text-secondary">39 y Edison, Mar del Plata</p>
                  </div>
                </label>
              </div>

              {shippingMethod === 'delivery' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                  <Input
                    label="Calle y altura"
                    name="street"
                    placeholder="Ej: Av. Colón 1234"
                    required
                    value={address.street}
                    onChange={(e) => setAddress((prev) => ({ ...prev, street: e.target.value }))}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Piso / Depto (Opcional)"
                      name="apartment"
                      placeholder="Ej: 3B"
                      value={address.apartment}
                      onChange={(e) => setAddress((prev) => ({ ...prev, apartment: e.target.value }))}
                    />
                    <Input
                      label="Código Postal"
                      name="postalCode"
                      placeholder="Ej: 7600"
                      required
                      value={address.postalCode}
                      onChange={(e) => setAddress((prev) => ({ ...prev, postalCode: e.target.value }))}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Ciudad"
                      name="city"
                      placeholder="Ej: Mar del Plata"
                      required
                      value={address.city}
                      onChange={(e) => setAddress((prev) => ({ ...prev, city: e.target.value }))}
                    />
                    <Input
                      label="Provincia"
                      name="province"
                      placeholder="Ej: Buenos Aires"
                      required
                      value={address.province}
                      onChange={(e) => setAddress((prev) => ({ ...prev, province: e.target.value }))}
                    />
                  </div>
                </div>
              )}
            </section>

            <div className="h-px bg-border-subtle" />

            <section>
              <h2 className="font-display text-xl uppercase mb-6 flex items-center gap-3">
                <span className="text-primary font-mono text-sm">03</span> 
                Pago
              </h2>
              <div className="space-y-4">
                <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${paymentMethod === 'mercadopago' ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-1 hover:border-border-hover'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    className="mr-4 accent-primary" 
                    checked={paymentMethod === 'mercadopago'}
                    onChange={() => setPaymentMethod('mercadopago')}
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-medium">Mercado Pago</span>
                    <div className="w-8 h-8 bg-surface-2 rounded text-[10px] flex items-center justify-center text-text-muted">MP</div>
                  </div>
                </label>
                
                <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${paymentMethod === 'transferencia' ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-1 hover:border-border-hover'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    className="mr-4 accent-primary" 
                    checked={paymentMethod === 'transferencia'}
                    onChange={() => setPaymentMethod('transferencia')}
                  />
                  <div className="flex-1">
                    <p className="font-medium">Transferencia bancaria</p>
                    <p className="text-sm text-primary">15% OFF</p>
                  </div>
                </label>
                
                {shippingMethod === 'pickup' && (
                  <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${paymentMethod === 'efectivo' ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-1 hover:border-border-hover'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      className="mr-4 accent-primary" 
                      checked={paymentMethod === 'efectivo'}
                      onChange={() => setPaymentMethod('efectivo')}
                    />
                    <div className="flex-1">
                      <p className="font-medium">Efectivo al retirar</p>
                    </div>
                  </label>
                )}
              </div>
            </section>
          </div>

          {/* Right: Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-surface-1 p-6 md:p-8 rounded-lg border border-border-subtle sticky top-24">
              <h2 className="font-display text-xl uppercase mb-6">Resumen</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.size}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-surface-2 flex-shrink-0 flex items-center justify-center text-xs text-text-muted font-mono">
                      DYG
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-medium uppercase">{item.name}</p>
                      <p className="text-text-secondary mt-1">Cantidad: {item.quantity}</p>
                      <p className="font-mono mt-2">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-border-subtle mb-6" />

              <div className="space-y-3 font-mono text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Envío</span>
                  <span>{shippingMethod === 'pickup' ? 'Gratis' : formatPrice(shippingCost)}</span>
                </div>
                {transferDiscount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Descuento (15%)</span>
                    <span>-{formatPrice(transferDiscount)}</span>
                  </div>
                )}
              </div>

              <div className="h-px bg-border-subtle mb-6" />

              <div className="flex justify-between items-center mb-8 font-mono text-lg font-medium">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <Button type="submit" variant="cta" size="lg" fullWidth>
                CONFIRMAR PEDIDO
              </Button>
              <p className="text-center text-xs text-text-muted font-mono mt-3">
                Te vamos a redirigir a WhatsApp para coordinar el pago y la entrega.
              </p>
              <p className="text-center text-[11px] text-text-muted mt-3">
                Al realizar el pedido, aceptás nuestra{' '}
                <a href="/privacidad" target="_blank" className="underline text-text-secondary hover:text-white">
                  Política de Privacidad
                </a>{' '}
                y los{' '}
                <a href="/terminos" target="_blank" className="underline text-text-secondary hover:text-white">
                  Términos de Servicio
                </a>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </PageTransition>
  );
}
