import React, { useState } from 'react';
import { BLOG_POSTS, ALLIANCES } from '../data';
import { BlogPost, Alliance } from '../types';
import { ArrowUpRight, Award, BadgeAlert, TrendingUp, Handshake, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export default function CorporateBlog() {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const toggleExpandPost = (postId: string) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
    } else {
      setExpandedPost(postId);
    }
  };

  return (
    <section id="casos-exito" className="py-24 bg-transparent relative border-b border-white/5">
      {/* Decorative ambient gradients */}
      <div className="absolute right-10 top-1/3 w-[350px] h-[350px] bg-neon-cyan/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-neon-cyan uppercase">
            Sistemas Validados en Producción
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-6">
            Casos de Éxito & <span className="text-neon-cyan">Alianzas Globales</span>
          </h2>
          <p className="font-sans text-gray-400">
            Analiza las métricas de rendimiento reales obtenidas por corporaciones latinoamericanas tras integrar nuestras plataformas inteligentes y conoce las marcas que confían hoy en CIG.
          </p>
        </div>

        {/* Blog section - CASOS DE ÉXITO (Grid layout with high contrast metrics) */}
        <div className="space-y-8 mb-20">
          <h3 className="text-sm font-mono font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-neon-cyan" />
            <span>Casos de Éxito & Métricas de Alto Impacto</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => {
              const isExpanded = expandedPost === post.id;
              return (
                <div 
                  key={post.id}
                  className="rounded-2xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 p-6 flex flex-col justify-between hover:border-neon-cyan/50 hover:bg-white/[0.05] transition-all duration-300 shadow-xl"
                >
                  <div>
                    {/* Metric highlighted badge */}
                    {post.metrics && (
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest text-neon-cyan uppercase bg-neon-cyan/10 border border-neon-cyan/20 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-gray-500 block uppercase leading-none">
                            {post.metrics.label}
                          </span>
                          <span className="text-2xl font-mono font-extrabold text-neon-green text-glow-green">
                            {post.metrics.value}
                          </span>
                        </div>
                      </div>
                    )}

                    <h4 className="font-display font-bold text-lg text-white leading-snug mb-3 hover:text-neon-cyan transition-colors">
                      {post.title}
                    </h4>

                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-[10px] text-gray-500 font-mono mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                      {isExpanded ? post.content : post.snippet}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-500">
                      Por: {post.author.split(',')[0]}
                    </span>

                    <button
                      onClick={() => toggleExpandPost(post.id)}
                      className="text-xs font-mono text-neon-cyan hover:underline flex items-center gap-1 font-bold cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <span>Leer Menos</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Leer Detalle</span>
                          <ChevronDown className="w-4 h-4 animate-bounce" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ecosistema de Alianzas section */}
        <div id="alianzas" className="space-y-8 pt-12 border-t border-white/5">
          <h3 className="text-sm font-mono font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
            <Handshake className="w-5 h-5 text-neon-purple" />
            <span>Ecosistema de Alianzas & Co-Desarrolladores</span>
          </h3>

          {/* Scrolling/Grid layout of corporate alliances logos & text */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALLIANCES.map((all) => (
              <div 
                key={all.id}
                className="p-5 rounded-xl bg-white/[0.02] backdrop-blur-[5px] border border-white/10 hover:border-neon-purple/50 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Simulated Logo Emblem */}
                    <div className="w-11 h-11 rounded-lg bg-slate-950 border border-white/15 text-white font-display font-black tracking-widest flex items-center justify-center text-sm shadow group-hover:border-neon-purple/50 group-hover:bg-neon-purple/5 transition-all">
                      {all.logoText}
                    </div>

                    {all.status && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono font-bold uppercase tracking-wider text-amber-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                        <span>Fase de Concreción</span>
                      </span>
                    )}
                  </div>

                  <h4 className="font-display font-bold text-base text-white leading-tight group-hover:text-neon-purple transition-colors">
                    {all.name}
                  </h4>
                  
                  <span className="text-[10px] font-mono text-gray-500 block uppercase mt-1">
                    {all.sector}
                  </span>

                  <p className="text-xs text-gray-400 mt-2.5 font-light leading-relaxed">
                    {all.description}
                  </p>
                </div>

                {all.status && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 bg-amber-500/[0.02] p-2 rounded-lg border border-amber-500/10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-[9.5px] font-sans text-amber-400/90 leading-tight">
                      {all.status}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
