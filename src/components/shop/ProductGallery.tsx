"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { cn, getImagePath } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const currentImage = images[selectedIndex];

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[3/4] bg-surface-2 overflow-hidden border border-border-subtle cursor-crosshair"
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        {currentImage ? (
          <div
            className="w-full h-full relative"
            style={{
              transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
              transform: isZooming ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Image
              src={getImagePath(currentImage)}
              alt={`${productName} - Image ${selectedIndex + 1}`}
              fill
              className="object-cover"
              unoptimized={true}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted text-sm p-4 text-center">
            {productName}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar py-2 px-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={cn(
                "relative w-20 aspect-[3/4] shrink-0 bg-surface-2 overflow-hidden transition-all duration-200 border",
                selectedIndex === idx
                  ? "border-primary ring-1 ring-primary/50 opacity-100"
                  : "border-border-subtle opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={getImagePath(img)}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                unoptimized={true}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}