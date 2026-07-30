import React from 'react';
import Link from 'next/link';
import { BRAND, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-border-subtle pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="font-display font-black text-2xl tracking-widest text-white hover:text-primary transition-colors">
              DYNASTY
            </Link>
            <p className="font-display tracking-wider text-sm text-primary uppercase">
              Built Different
            </p>
            <p className="text-text-secondary text-sm mt-4 max-w-sm leading-relaxed">
              Tech & gadgets from Mar del Plata, Argentina. Built Different.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-white uppercase tracking-wider mb-2">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-white uppercase tracking-wider mb-2">Help</h4>
            <ul className="space-y-3">
              <li><Link href="/envios" className="text-sm text-text-secondary hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/contacto" className="text-sm text-text-secondary hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/devoluciones" className="text-sm text-text-secondary hover:text-white transition-colors">Devoluciones & Cambios</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-white uppercase tracking-wider mb-2">Contact</h4>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>{BRAND.address}</p>
              <p>Email: {BRAND.email}</p>
              <p>Phone: {BRAND.phone}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Dynasty. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-white uppercase tracking-wider transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}