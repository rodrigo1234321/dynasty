"use client";

import { useState } from 'react';
import { Truck } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';

export function ShippingCalculator() {
  const [zipCode, setZipCode] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = useCartStore((state) => state.totalPrice());
  const FREE_SHIPPING_THRESHOLD = 120000;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length < 4) return;
    
    setIsLoading(true);
    // Mock API call for demonstration purposes
    setTimeout(() => {
      const mockPrice = Math.floor(Math.random() * (12000 - 5000 + 1) + 5000);
      setResult(mockPrice);
      setIsLoading(false);
    }, 800);
  };

  const isFreeShipping = totalPrice >= FREE_SHIPPING_THRESHOLD;

  return (
    <div className="bg-surface-2 border border-border-subtle p-4 rounded-sm flex flex-col gap-4">
      <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-text-primary">
        <Truck size={18} className="text-primary" />
        <h3>Medios de envío</h3>
      </div>
      
      <form onSubmit={handleCalculate} className="flex gap-2">
        <input
          type="text"
          placeholder="Tu código postal"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 8))}
          className="flex-1 bg-surface-1 border border-border-subtle px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors font-mono text-text-primary placeholder:text-text-muted"
        />
        <button
          type="submit"
          disabled={zipCode.length < 4 || isLoading}
          className="bg-primary text-white px-4 py-2 text-xs font-mono uppercase tracking-widest disabled:opacity-50 transition-opacity hover:bg-primary-hover"
        >
          {isLoading ? '...' : 'Calcular'}
        </button>
      </form>

      {result !== null && (
        <div className="flex flex-col gap-3 mt-2 border-t border-border-subtle pt-3">
          <div className="flex justify-between items-center text-sm font-mono p-3 bg-surface-1 border border-border-subtle rounded-sm">
            <span className="text-text-secondary">Envío a domicilio</span>
            <span className="font-medium text-text-primary">
              {isFreeShipping ? <span className="text-primary">GRATIS</span> : formatPrice(result)}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm font-mono p-3 bg-surface-1 border border-border-subtle rounded-sm">
            <div className="flex flex-col">
              <span className="text-text-secondary">Retiro en local</span>
              <span className="text-xs text-text-muted mt-0.5">39 y Edison, Mar del Plata</span>
            </div>
            <span className="font-medium text-primary">GRATIS</span>
          </div>
        </div>
      )}

      {isFreeShipping && result === null && (
        <div className="text-xs text-primary font-mono mt-1 px-1 bg-primary/10 py-2 border border-primary/20 rounded-sm text-center">
          ¡Tenés envío gratis en tu compra!
        </div>
      )}
    </div>
  );
}
