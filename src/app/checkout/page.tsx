'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageTransition } from '@/components/motion/PageTransition';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice } = useCartStore();
  const [shippingMethod, setShippingMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'mercadopago' | 'transferencia' | 'efectivo'>('mercadopago');

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

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto min-h-screen">
        <h1 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-12">
          CHECKOUT
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Form */}
          <div className="flex-1 space-y-12">
            
            <section>
              <h2 className="font-display text-xl uppercase mb-6 flex items-center gap-3">
                <span className="text-primary font-mono text-sm">01</span> 
                Contacto
              </h2>
              <div className="space-y-4">
                <Input label="Email" type="email" placeholder="tu@email.com" required />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Nombre" placeholder="Tu nombre" required />
                  <Input label="Apellido" placeholder="Tu apellido" required />
                </div>
                <Input label="Teléfono" type="tel" placeholder="Código de área + número" required />
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
                  <Input label="Calle y altura" placeholder="Ej: Av. Colón 1234" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Piso / Depto (Opcional)" placeholder="Ej: 3B" />
                    <Input label="Código Postal" placeholder="Ej: 7600" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Ciudad" placeholder="Ej: Mar del Plata" required />
                    <Input label="Provincia" placeholder="Ej: Buenos Aires" required />
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
                      <p className="text-text-secondary mt-1">Talle: {item.size} | Cantidad: {item.quantity}</p>
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

              <Button variant="cta" size="lg" fullWidth>
                CONFIRMAR PEDIDO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
