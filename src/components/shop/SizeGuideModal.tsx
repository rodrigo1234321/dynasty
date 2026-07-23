"use client";

import { Modal } from '@/components/ui/Modal';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const measurements = [
    { label: 'Pecho (cm)', values: ['56', '58', '60', '62', '64'] },
    { label: 'Largo (cm)', values: ['70', '72', '74', '76', '78'] },
    { label: 'Hombros (cm)', values: ['52', '54', '56', '58', '60'] },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="TABLA DE TALLES">
      <div className="flex flex-col gap-6 mt-4">
        <div className="w-full overflow-x-auto border border-border-subtle rounded-sm">
          <table className="w-full text-sm text-left text-text-primary font-mono">
            <thead className="bg-surface-2 border-b border-border-subtle text-xs uppercase">
              <tr>
                <th className="px-4 py-3 font-medium text-text-secondary">Medida</th>
                {sizes.map((s) => (
                  <th key={s} className="px-4 py-3 font-medium text-center">{s}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {measurements.map((row, i) => (
                <tr 
                  key={row.label} 
                  className={i !== measurements.length - 1 ? "border-b border-border-subtle bg-surface-1" : "bg-surface-1"}
                >
                  <td className="px-4 py-3 font-medium bg-surface-2/30">{row.label}</td>
                  {row.values.map((v, idx) => (
                    <td key={idx} className="px-4 py-3 text-center text-text-secondary">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-xs text-text-muted font-mono bg-surface-2 p-3 rounded-sm border border-border-subtle">
          * Todas las medidas son en centímetros. Nuestras prendas tienen fit oversize, te recomendamos llevar tu talle habitual para mantener el look relajado.
        </p>
      </div>
    </Modal>
  );
}
