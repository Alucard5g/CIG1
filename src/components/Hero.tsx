import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onOpenSupport: () => void;
}

export default function Hero({ onExploreServices, onOpenSupport }: HeroProps) {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cyber-grid pt-10 pb-16"
    >
      {/* 1. Sunrise Aurora / Cyber Gradient behind mountains */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep blue dark background is active underneath */}
        
        {/* Dawn glow in the middle bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-t from-emerald-500/10 via-neon-cyan/15 to-transparent rounded-t-full filter blur-[100px] opacity-80" />
        
        {/* Neon purple ambient light at top-left */}
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-neon-purple/10 rounded-full filter blur-[120px]" />
        
        {/* Floating digital mesh grid points */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#00f0ff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>

      {/* 2. Interactive SVG Mountain Skyline & Network Nodes (Mountains lit by Sunrise) */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none opacity-50 md:opacity-75">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-auto min-h-[220px]" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cybernetically connected mountains (far background) */}
          <path 
            d="M0,220 L180,120 L380,260 L620,90 L850,220 L1100,60 L1300,190 L1440,110 L1440,320 L0,320 Z" 
            fill="url(#mountainGrad1)"
            opacity="0.3"
          />
          {/* Closer mountains */}
          <path 
            d="M0,260 L240,160 L500,280 L760,140 L1020,270 L1250,150 L1440,240 L1440,320 L0,320 Z" 
            fill="url(#mountainGrad2)"
            opacity="0.5"
          />

          {/* Network Connection Lines & Nodes overlaying mountains */}
          <line x1="180" y1="120" x2="380" y2="260" stroke="#00f0ff" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="380" y1="260" x2="620" y2="90" stroke="#10b981" strokeWidth="1" />
          <line x1="620" y1="90" x2="850" y2="220" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="850" y1="220" x2="1100" y2="60" stroke="#8b5cf6" strokeWidth="1" />
          <line x1="1100" y1="60" x2="1300" y2="190" stroke="#00f0ff" strokeWidth="1.5" />
          
          {/* Glowing sunrise mountain peak points */}
          <circle cx="180" cy="120" r="4" fill="#00f0ff" className="animate-ping" />
          <circle cx="180" cy="120" r="3" fill="#00f0ff" />
          <circle cx="620" cy="90" r="5" fill="#10b981" />
          <circle cx="850" cy="220" r="3" fill="#00f0ff" />
          <circle cx="1100" cy="60" r="6" fill="#8b5cf6" className="animate-pulse" />
          <circle cx="1100" cy="60" r="3" fill="#ffffff" />
          <circle cx="1300" cy="190" r="4" fill="#00f0ff" />

          <defs>
            <linearGradient id="mountainGrad1" x1="720" y1="50" x2="720" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
              <stop offset="30%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="mountainGrad2" x1="720" y1="120" x2="720" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#0f2942" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        
        {/* High-tech badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-[10px] border border-white/10 text-neon-cyan text-xs font-mono tracking-widest uppercase mb-8 shadow-lg shadow-neon-cyan/5">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
          PLATAFORMA GLOBAL ACTIVA
        </div>

        {/* Highlighted Logo Title "CIG" */}
        <div className="mb-6 select-none">
          <span className="font-display font-black text-4xl sm:text-6xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
            CIG <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-blue-400 to-neon-purple text-glow-cyan">ECOSISTEMA</span>
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-green to-neon-purple mx-auto mt-3 rounded-full shadow-md shadow-neon-cyan/30"></div>
        </div>

        {/* Main slogan - "Tecnología que transforma hoy el mañana" */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Tecnología que transforma{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">
            hoy
          </span>{' '}
          el{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400 text-glow-green">
            mañana
          </span>
        </h1>

        {/* Subtitle - "Ecosistema de Innovación Global y Sostenible" */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Ecosistema de Innovación Global y Sostenible. Implementamos automatización,
          inteligencia artificial y modelos financieros de última generación para potenciar tu organización.
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-blue-600 text-deep-dark font-display font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Explorar Servicios Inteligentes
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          <button
            onClick={onOpenSupport}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-[10px] hover:bg-white/[0.08] text-white font-sans font-medium transition-all duration-300 hover:border-neon-cyan/40 flex items-center justify-center gap-2 cursor-pointer"
          >
            Asistente Virtual
            <Sparkles className="w-5 h-5 text-neon-cyan" />
          </button>
        </div>

        {/* Trust factors / Features row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 pt-8 border-t border-white/5">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">
              <Globe className="w-5 h-5 text-neon-cyan" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 font-mono">ALCANCE</div>
              <div className="text-sm font-semibold text-white">Global & Escatable</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2 rounded-lg bg-neon-green/10 border border-neon-green/20">
              <ShieldCheck className="w-5 h-5 text-neon-green" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 font-mono">INFRAESTRUCTURA</div>
              <div className="text-sm font-semibold text-white">100% Segura & Encriptada</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start col-span-1">
            <div className="p-2 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
              <Zap className="w-5 h-5 text-neon-purple" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 font-mono">EFICIENCIA</div>
              <div className="text-sm font-semibold text-white">Automatización Total</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start col-span-1">
            <div className="p-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">
              <Sparkles className="w-5 h-5 text-neon-cyan" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 font-mono">INTELIGENCIA</div>
              <div className="text-sm font-semibold text-white">Modelos Predictivos IA</div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative cybernetic side bars */}
      <div className="absolute left-6 top-1/3 hidden lg:flex flex-col gap-6 items-center z-20 font-mono text-[10px] text-gray-500 tracking-widest [writing-mode:vertical-lr]">
        <span className="text-neon-cyan/40">LATAM OPERATIONS</span>
        <div className="w-px h-16 bg-gradient-to-b from-neon-cyan/40 to-transparent"></div>
      </div>
      <div className="absolute right-6 top-1/3 hidden lg:flex flex-col gap-6 items-center z-20 font-mono text-[10px] text-gray-500 tracking-widest [writing-mode:vertical-lr]">
        <span className="text-neon-green/40">SECURE NODE: ECL-0593</span>
        <div className="w-px h-16 bg-gradient-to-b from-neon-green/40 to-transparent"></div>
      </div>
    </section>
  );
}
