import React, { useState } from 'react';
import { ShoppingCart, MessageSquare, Phone, Mail, Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSupport: () => void;
}

export default function Navbar({ cartCount, onOpenCart, onOpenSupport }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Red CIG', href: '#red-cig' },
    { name: 'Soporte', href: '#soporte' },
    { name: 'Casos de Éxito', href: '#casos-exito' },
    { name: 'Alianzas', href: '#alianzas' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/[0.03] backdrop-blur-[10px] border-b border-white/10" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center border-2 border-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              <Cpu className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                Ecosistema <span className="text-neon-cyan">CIG</span>
              </span>
              <div className="text-[9px] text-gray-400 font-mono tracking-widest leading-none">
                ECOSISTEMA DE INNOVACIÓN
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors font-sans duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Live Chat Support Simulated Button */}
            <button
              onClick={onOpenSupport}
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all duration-300 relative group flex items-center gap-2 text-xs font-medium font-mono"
              title="Asistente IA de Soporte"
            >
              <MessageSquare className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform" />
              <span>SophIA</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="p-2.5 rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 text-white hover:bg-neon-cyan hover:text-deep-dark transition-all duration-300 relative group flex items-center gap-2 text-xs font-mono font-bold"
            >
              <ShoppingCart className="w-4 h-4 group-hover:scale-115 transition-transform" />
              <span>CARRITO</span>
              {cartCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neon-green text-[11px] font-bold text-deep-dark animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Mobile Cart Button */}
            <button
              onClick={onOpenCart}
              className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-neon-green text-[10px] font-bold text-deep-dark">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/90 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenSupport();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-gray-200 flex items-center justify-center gap-2 font-mono text-sm"
            >
              <MessageSquare className="w-4 h-4 text-neon-cyan" />
              <span>SophIA (Asistente CIG)</span>
            </button>

            <button
              onClick={() => {
                onOpenCart();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-neon-cyan text-deep-dark font-bold flex items-center justify-center gap-2 font-mono text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Ver Carrito de Servicios ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
