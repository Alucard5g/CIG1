import React from 'react';
import { Handshake, Clock, Building2, ShieldAlert, Zap, Award } from 'lucide-react';

interface AllianceBrand {
  name: string;
  industry: string;
  description: string;
  focusArea: string;
}

export default function Alliances() {
  const ecuadorianBrands: AllianceBrand[] = [
    {
      name: 'Banco Pichincha',
      industry: 'Banca y Finanzas',
      description: 'Líder en el sistema financiero ecuatoriano para integración de pasarelas de pago y custodia de activos digitales de alta seguridad.',
      focusArea: 'Integración CIG Capital Markets'
    },
    {
      name: 'Corporación Favorita',
      industry: 'Comercio y Logística',
      description: 'Socio clave para optimización de cadenas de suministro nacionales e integración de EcoChasqui IA para el reciclaje y economía circular.',
      focusArea: 'Modelos de Sostenibilidad Circular'
    },
    {
      name: 'CNT EP',
      industry: 'Telecomunicaciones del Estado',
      description: 'Corporación Nacional de Telecomunicaciones para infraestructura de servidores y telecomunicación satelital cuántica en tiempo real.',
      focusArea: 'Red de Telecomunicación CIG Core'
    },
    {
      name: 'Pacari Chocolate',
      industry: 'Sostenibilidad y Agro-Tech',
      description: 'Modelo de comercio justo y agricultura orgánica de alto impacto, enfocado en trazar la huella de carbono con tecnología descentralizada.',
      focusArea: 'Proyectos Verdes EcoChasqui IA'
    },
    {
      name: 'Cervecería Nacional',
      industry: 'Industria de Consumo Masivo',
      description: 'Optimización de logística urbana y distribución de bajas emisiones en alianza con CIG Mobility.',
      focusArea: 'Sistemas de Movilidad Inteligente'
    },
    {
      name: 'Tonicorp',
      industry: 'Alimentos y Biotecnología',
      description: 'Desarrollo tecnológico aplicado a la cadena de valor ganadera y conservación ambiental regional.',
      focusArea: 'Auditoría Ambiental Avanzada'
    }
  ];

  return (
    <section id="alianzas" className="relative py-20 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background Cyber Grid effect */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-amber-500/5 filter blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4 animate-pulse">
            <Handshake className="w-3.5 h-3.5" />
            Alianzas Estratégicas - Ecuador
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Vinculación <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Corporativa Nacional</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-lg mt-4">
            Colaboramos con los mayores referentes empresariales e industriales de Ecuador para expandir los límites del ecosistema global de CIG y robustecer la matriz productiva tecnológica del país.
          </p>
        </div>

        {/* Brand Alliances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecuadorianBrands.map((brand, index) => (
            <div 
              key={brand.name} 
              className="group relative p-6 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-amber-500/5 backdrop-blur-[5px]"
            >
              {/* Corner tech accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 rounded-tr-2xl group-hover:border-amber-500/30 transition-colors"></div>
              
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-amber-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  
                  {/* Status indicator badge */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>En Fase de Concreción</span>
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 mb-1">
                    <span>{brand.industry}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              </div>

              {/* Bottom agreement detail */}
              <div className="mt-6 pt-4 border-t border-white/5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-sans">
                  <span className="text-gray-500">Área de Enfoque:</span>
                  <span className="text-white/90 font-medium font-mono">{brand.focusArea}</span>
                </div>
                
                {/* Status disclaimer */}
                <div className="flex items-center gap-2 bg-amber-500/[0.03] border border-amber-500/10 p-2 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span className="text-[9.5px] font-sans text-amber-400/90 leading-tight">
                    En proceso de fase de concretar el acuerdo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global summary card about Ecuador alliances */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-950/80 to-slate-900/80 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-[10px]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.02] filter blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mt-1">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-lg text-white">Transparencia y Seguridad Contractual</h4>
              <p className="font-sans text-sm text-gray-400 mt-1 max-w-2xl">
                CIG sostiene relaciones transparentes y auditables. Todas nuestras propuestas de alianza corporativa se estructuran bajo estrictos convenios de confidencialidad y están sujetas a la fase final de firma formal por representantes de cada corporativo en Ecuador.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/15 text-xs text-gray-300 font-mono">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Fórmula de Alianzas 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
}
