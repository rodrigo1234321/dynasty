import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-0 flex flex-col items-center justify-center px-4 text-center">
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
      
      <div className="relative z-10 max-w-md w-full">
        <h1 className="font-display text-8xl md:text-9xl text-primary mb-4 tracking-tighter">
          404
        </h1>
        
        <h2 className="font-mono text-xl tracking-widest uppercase mb-8">
          PÁGINA NO ENCONTRADA
        </h2>
        
        <p className="text-text-secondary mb-12">
          El link al que intentaste acceder no existe o fue movido.
        </p>

        <Link href="/">
          <Button variant="cta" size="lg">
            VOLVER AL INICIO
          </Button>
        </Link>
      </div>
    </div>
  );
}