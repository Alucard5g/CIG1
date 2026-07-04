import React from 'react';
import { Phone, Mail, Clock, ArrowRight, Shield, Cpu, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenCart: () => void;
  onOpenSupport: () => void;
}

export default function Footer({ onOpenCart, onOpenSupport }: FooterProps) {
  // Setup URLs
  const phoneRaw = '+593 958 610 578';
  const phoneClean = '593958610578';
  const emailCorporate = 'conscientizarte13@gmail.com';
  
  const whatsappUrl = `https://wa.me/${phoneClean}?text=Hola%20CIG%2C%20vengo%20desde%20la%20plataforma%20web%20y%20me%20gustar%C3%ADa%20obtener%20asesor%C3%ADa%20tecnol%C3%B3gica%20personalizada.`;
  const emailUrl = `mailto:${emailCorporate}?subject=Consulta%20Ecosistema%20CIG&body=Estimado%20equipo%20de%20CIG%2C%20solicito%20detalles%20de%20su%20portafolio%20tecnol%C3%B3gico.`;

  return (
    <footer className="bg-transparent border-t border-white/10 relative overflow-hidden" id="contacto">
      {/* Visual neon grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Logo, Branding and Eslogan of Closing */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-neon-cyan to-neon-purple flex items-center justify-center border border-neon-cyan/40">
                <Cpu className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-wider text-white">
                  CIG <span className="text-neon-cyan">Ecosistema</span>
                </span>
                <div className="text-[9px] text-gray-500 font-mono tracking-widest leading-none">
                  CORPORACIÓN E INNOVACIÓN CIG
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Plataforma digital integrada de alta confianza y escalabilidad. Diseñamos infraestructura inteligente que transforma tu operación con un impacto medible y sustentable.
            </p>

            <div className="text-glow-cyan text-sm font-display font-medium text-white tracking-wide border-l-2 border-neon-cyan pl-3">
              "Tecnología que transforma hoy el mañana"
            </div>

            {/* Slogan of closing */}
            <div className="text-sm font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-green uppercase tracking-wide">
              Juntos construimos un futuro mejor.
            </div>
          </div>

          {/* Contact Details (Contáctanos) */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Shield className="w-4.5 h-4.5 text-neon-cyan" />
              <span>CONTÁCTANOS - ALTA DISPONIBILIDAD</span>
            </h3>

            <div className="space-y-4">
              {/* WhatsApp Call center */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] backdrop-blur-[5px] border border-white/10 hover:border-neon-cyan/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-emerald-500/15 text-neon-green group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-mono block uppercase">WHATSAPP BUSINESS</span>
                  <span className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors font-mono">
                    {phoneRaw}
                  </span>
                </div>
              </a>

              {/* Email Client */}
              <a 
                href={emailUrl}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] backdrop-blur-[5px] border border-white/10 hover:border-neon-purple/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-neon-purple/15 text-neon-purple group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-mono block uppercase">CORREO CORPORATIVO</span>
                  <span className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors font-mono">
                    {emailCorporate}
                  </span>
                </div>
              </a>

              {/* Availability */}
              <div className="flex items-center gap-3 text-xs text-gray-400 font-mono px-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>Atención prioritaria y despliegues: Lun - Sáb (08:00 - 18:00)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copy / Legals row */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10.5px] text-gray-500 font-mono">
            &copy; 2026 Corporación e Innovación CIG. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 font-mono text-[10px] text-gray-500">
            <button onClick={onOpenSupport} className="hover:text-neon-cyan transition-colors cursor-pointer">Seguridad de Datos</button>
            <span>|</span>
            <button onClick={onOpenCart} className="hover:text-neon-cyan transition-colors cursor-pointer">Cotizador de Servicios</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
