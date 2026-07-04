import React from 'react';
import { Network, ArrowRightLeft, ShieldCheck, Database } from 'lucide-react';

import sophiaImg from '../assets/images/sophia_holographics_1783112130005.jpg';
import opcImg from '../assets/images/opc_infrastructure_1783112142211.jpg';
import ecoImg from '../assets/images/ecochasqui_ia_1783112154336.jpg';
import mobilityImg from '../assets/images/cig_mobility_1783112166551.jpg';
import capitalImg from '../assets/images/cig_capital_trading_1783119103848.jpg';
import coordinatorImg from '../assets/images/cig_core_coordinator_1783119976997.jpg';

export default function RedCig() {
  const nodes = [
    { 
      name: 'SophIA Holographics', 
      color: 'text-neon-cyan', 
      border: 'border-neon-cyan/40',
      imageUrl: sophiaImg
    },
    { 
      name: 'OPC Infrastructure', 
      color: 'text-neon-purple', 
      border: 'border-neon-purple/40',
      imageUrl: opcImg
    },
    { 
      name: 'EcoChasqui IA', 
      color: 'text-neon-green', 
      border: 'border-neon-green/40',
      imageUrl: ecoImg
    },
    { 
      name: 'CIG Mobility', 
      color: 'text-neon-cyan', 
      border: 'border-neon-cyan/40',
      imageUrl: mobilityImg
    },
    { 
      name: 'CIG Capital Markets', 
      color: 'text-neon-purple', 
      border: 'border-neon-purple/40',
      imageUrl: capitalImg
    }
  ];

  return (
    <section id="red-cig" className="relative py-20 bg-transparent overflow-hidden border-y border-white/10">
      
      {/* Absolute Tech Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* Sunrise ambient light coming through from bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-neon-cyan/5 to-transparent filter blur-3xl pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono tracking-widest uppercase">
              <Network className="w-3.5 h-3.5 animate-spin" />
              SISTEMA INTEGRAL EXTREMO A EXTREMO
            </div>
 
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Red <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-blue-400 to-neon-purple text-glow-cyan">CIG</span>
            </h2>
 
            <p className="font-sans text-gray-300 text-lg leading-relaxed font-light">
              En Red CIG la empresa coordina alianzas estratégicas de servicios que fortalecen los modelos de negocio realizados por CIG o ya establecidos, generando un portafolio empresarial completo para el cliente en un ecosistema global todo desde CIG.
            </p>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-[5px] flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan mt-1">
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Sincronización Total</h4>
                  <p className="text-xs text-gray-400 mt-1">Intercambio de metadatos instantáneo entre unidades operativas.</p>
                </div>
              </div>
 
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-[5px] flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-neon-green/10 text-neon-green mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Criptografía cuántica</h4>
                  <p className="text-xs text-gray-400 mt-1">Túneles de seguridad que blindan transacciones y bases de datos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Network Visualizer */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            <div className="relative w-full max-w-[480px] aspect-square rounded-full border border-white/10 flex items-center justify-center p-6 bg-white/[0.01] backdrop-blur-[10px]">
              
              {/* Outer rotating cyber rings */}
              <div className="absolute inset-2 rounded-full border border-dashed border-neon-cyan/25 animate-[spin_80s_linear_infinite]"></div>
              <div className="absolute inset-16 rounded-full border border-dashed border-neon-purple/20 animate-[spin_55s_linear_infinite_reverse]"></div>
              
              {/* Central Core Element with Coordinator Image */}
              <div className="relative z-10 p-3 rounded-2xl bg-gradient-to-tr from-slate-950 to-slate-900 border border-neon-cyan/50 shadow-2xl shadow-neon-cyan/25 flex flex-col items-center text-center max-w-[150px] overflow-hidden group">
                <div className="w-full aspect-square rounded-lg overflow-hidden border border-white/10 mb-2.5 relative">
                  <img 
                    src={coordinatorImg} 
                    alt="CIG Core Coordinator"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                </div>
                
                <Database className="w-5 h-5 text-neon-cyan animate-pulse mb-1.5" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-white leading-none">
                  CIG CORE
                </span>
                <span className="text-[8px] font-mono text-neon-green mt-1">SECURE NETWORK</span>
              </div>
 
              {/* Orbiting Satellite Nodes with real service images */}
              {nodes.map((node, index) => {
                const angle = (index * 2 * Math.PI) / nodes.length;
                const radius = 160; // px from center
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
 
                return (
                  <div
                    key={node.name}
                    className="absolute p-1.5 rounded-xl bg-slate-950/90 backdrop-blur-[8px] border border-white/15 text-center flex flex-col items-center justify-center shadow-xl shadow-black/90 group hover:border-neon-cyan/60 hover:bg-slate-900 transition-all duration-300 hover:scale-105 z-20"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      width: '115px',
                    }}
                  >
                    {/* Glowing Connector Line to Center */}
                    <svg className="absolute overflow-visible pointer-events-none z-0" style={{ top: '50%', left: '50%', width: 0, height: 0 }}>
                      <line 
                        x1={0} 
                        y1={0} 
                        x2={-x} 
                        y2={-y} 
                        stroke="rgba(0, 240, 255, 0.25)" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                        className="group-hover:stroke-neon-cyan transition-all"
                      />
                    </svg>
                    
                    {/* Node Mini Image */}
                    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-1.5 border border-white/5 relative bg-slate-900">
                      <img 
                        src={node.imageUrl} 
                        alt={node.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    </div>

                    <span className="text-[7px] font-mono uppercase text-gray-400">Nodo 0{index + 1}</span>
                    <span className={`text-[9px] font-bold mt-0.5 leading-snug ${node.color} tracking-tight font-display`}>
                      {node.name}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
