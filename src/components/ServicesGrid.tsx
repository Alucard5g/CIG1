import React, { useState } from 'react';
import { 
  Sparkles, Cpu, Leaf, Shield, TrendingUp, Check, Plus, ShoppingCart, Info, Settings, Globe 
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data';

interface ServicesGridProps {
  onAddToCart: (service: Service, customRequirements: string, customPrice: number) => void;
  onOpenSupportWithTopic: (topic: string) => void;
}

export default function ServicesGrid({ onAddToCart, onOpenSupportWithTopic }: ServicesGridProps) {
  // Store dynamic configurations for each service to demonstrate interactivity
  const [sophiaChannels, setSophiaChannels] = useState<'base' | 'multichannel' | 'omnichannel'>('base');
  const [opcEmployees, setOpcEmployees] = useState<number>(1);
  const [ecoTons, setEcoTons] = useState<number>(10);
  const [guerraNodes, setGuerraNodes] = useState<number>(1);
  const [mobilityVehicles, setMobilityVehicles] = useState<number>(1);
  const [capitalExcedent, setCapitalExcedent] = useState<number>(50000);
  const [customProjectTier, setCustomProjectTier] = useState<'web' | 'full-app' | 'marketing'>('web');

  // Added notification states
  const [addedNotification, setAddedNotification] = useState<string | null>(null);

  const getIcon = (iconName: string, colorClass: string) => {
    const props = { className: `w-8 h-8 ${colorClass}` };
    switch (iconName) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Leaf': return <Leaf {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Globe': return <Globe {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  const getBadgeColorClasses = (badgeColor: string) => {
    switch (badgeColor) {
      case 'cyan': return 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30';
      case 'green': return 'bg-neon-green/10 text-neon-green border-neon-green/30';
      case 'purple': return 'bg-neon-purple/10 text-neon-purple border-neon-purple/30';
      default: return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  // Dynamic price calculators based on interactive configuration variables
  const calculateServicePrice = (serviceId: string) => {
    return 999;
  };

  // Compile custom requirements note automatically based on user choices
  const compileRequirementsText = (serviceId: string) => {
    switch (serviceId) {
      case 'sophia-holographics':
        return `Configuración: Plan de canales [${sophiaChannels.toUpperCase()}]. Soporte automatizado holográfico 24/7.`;
      case 'opc-infrastructure':
        return `Configuración: Sistemas OPC. ${opcEmployees} unidad(es) de administración / sucursales con guía técnica especializada.`;
      case 'ecochasqui-ia':
        return `Configuración: Estimación de procesamiento de ${ecoTons} Toneladas/mes de residuos clasificados. Alianza Guerreros de Luz.`;
      case 'red-guerra':
        return `Configuración: Red de telecomunicaciones robusta con ${guerraNodes} nodo(s) CIG Core de alta disponibilidad enlazados.`;
      case 'guerra-mobility':
        return `Configuración: Monitoreo y piloto preventivo IA activo para una flota de ${mobilityVehicles} vehículo(s).`;
      case 'guerra-capital':
        return `Configuración: Plan de excedentes corporativos de $${capitalExcedent.toLocaleString('es-EC')} USD de capital estratégico.`;
      case 'custom-development':
        return `Configuración: Desarrollo personalizado de tipo [${
          customProjectTier === 'web' ? 'PÁGINA WEB / E-COMMERCE' : 
          customProjectTier === 'marketing' ? 'CAMPANAS MARKETING INTEGRA' : 'APP MÓVIL (iOS/Android) o WEB APP COMPLEX'
        }].`;
      default:
        return 'Configuración estándar del ecosistema tecnológico.';
    }
  };

  const handleAddToCartClick = (service: Service) => {
    const finalPrice = calculateServicePrice(service.id);
    const requirements = compileRequirementsText(service.id);
    
    // Override basePrice with calculated interactive price for the cart item
    const customServiceObj = {
      ...service,
      basePrice: finalPrice
    };

    onAddToCart(customServiceObj, requirements, finalPrice);

    setAddedNotification(service.id);
    setTimeout(() => {
      setAddedNotification(null);
    }, 3000);
  };

  const getPricingUnitLabel = (serviceId: string) => {
    switch (serviceId) {
      case 'sophia-holographics': return 'USD / licencia base';
      case 'opc-infrastructure': return 'USD / implementación guiada';
      case 'ecochasqui-ia': return 'USD / mes aprox';
      case 'red-guerra': return 'USD / nodo de red';
      case 'guerra-mobility': return 'USD / flota total';
      case 'guerra-capital': return 'USD / anual';
      case 'custom-development': return 'USD / cotización de proyecto';
      default: return 'USD';
    }
  };

  return (
    <section id="servicios" className="py-24 bg-transparent relative">
      {/* Background ambient accents */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-neon-green/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-neon-cyan uppercase">
            E-Commerce de Soluciones Modulares
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-6 tracking-tight">
            Ecosistema de Servicios <span className="text-neon-cyan">CIG</span>
          </h2>
          <p className="font-sans text-gray-400 text-lg mb-6">
            Selecciona y parametriza a medida los servicios que requieres para tu organización. Añade componentes al carrito y genera tu cotización inteligente automatizada al instante.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-950/80 border border-amber-500/20 px-4 py-2.5 rounded-xl text-xs text-amber-400/90 font-sans max-w-2xl mx-auto shadow-inner">
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 animate-pulse animate-duration-1000"></span>
            <span><strong>Nota Importante:</strong> Todos los precios de los servicios se muestran con una estimación inicial de $999 USD. El valor final de cada servicio se cotiza previa auditoría detallada al cliente por parte de nuestros agentes.</span>
          </div>
        </div>

        {/* Dynamic Success Notification */}
        {addedNotification && (
          <div className="fixed bottom-6 right-6 z-50 bg-emerald-950 border border-emerald-500/40 text-white px-5 py-4 rounded-xl shadow-2xl shadow-emerald-950/50 flex items-center gap-3 animate-bounce">
            <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">Servicio configurado con éxito</p>
              <p className="text-xs text-gray-400">Añadido a tu carrito corporativo.</p>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SERVICES.map((service) => {
            const currentPrice = calculateServicePrice(service.id);
            const isAdded = addedNotification === service.id;

            return (
              <div 
                key={service.id}
                className="rounded-2xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 hover:border-neon-cyan/50 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] hover:bg-white/[0.05] relative group"
                id={`card-${service.id}`}
              >
                {/* Visual Glow Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-tr-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3.5 rounded-xl bg-slate-900 border ${
                        service.badgeColor === 'cyan' ? 'border-neon-cyan/30 text-neon-cyan shadow-lg shadow-neon-cyan/5' : 
                        service.badgeColor === 'green' ? 'border-neon-green/30 text-neon-green shadow-lg shadow-neon-green/5' : 
                        'border-neon-purple/30 text-neon-purple shadow-lg shadow-neon-purple/5'
                      }`}>
                        {getIcon(service.iconName, 
                          service.badgeColor === 'cyan' ? 'text-neon-cyan' : 
                          service.badgeColor === 'green' ? 'text-neon-green' : 
                          'text-neon-purple'
                        )}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-neon-cyan transition-colors duration-200">
                          {service.name}
                        </h3>
                        <span className="text-xs text-gray-400 font-mono tracking-wide">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>
                    
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider border uppercase ${getBadgeColorClasses(service.badgeColor)}`}>
                      {service.tags[0]}
                    </span>
                  </div>

                  {/* Service Image */}
                  {service.imageUrl && (
                    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-neon-cyan/30 transition-all duration-300 shadow-inner bg-slate-950">
                      <img 
                        src={service.imageUrl} 
                        alt={service.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Core Tech Features List */}
                  <div className="mb-8">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-neon-cyan" />
                      ESPECIFICACIONES DEL DESPLIEGUE
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.techFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                          <Check className="w-3.5 h-3.5 text-neon-green flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* INTERACTIVE COMPONENT CONFIGURATOR */}
                  <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-[5px]">
                    <div className="flex items-center gap-1.5 mb-3 text-xs font-mono text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                      <span>Configura el alcance del servicio:</span>
                    </div>

                    {/* Interactive inputs depending on service id */}
                    {service.id === 'sophia-holographics' && (
                      <div className="grid grid-cols-3 gap-2">
                        {['base', 'multichannel', 'omnichannel'].map((plan) => (
                          <button
                            key={plan}
                            onClick={() => setSophiaChannels(plan as any)}
                            className={`px-2.5 py-2 rounded-lg text-xs font-mono transition-all border ${
                              sophiaChannels === plan 
                                ? 'bg-neon-cyan/10 border-neon-cyan text-neon-cyan' 
                                : 'bg-transparent border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                            }`}
                          >
                            {plan === 'base' ? '1 Canal' : plan === 'multichannel' ? 'Multicanal' : 'Omnicanal 24/7'}
                          </button>
                        ))}
                      </div>
                    )}

                    {service.id === 'opc-infrastructure' && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-sans">Módulos/Administraciones:</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setOpcEmployees(Math.max(1, opcEmployees - 1))}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white text-lg font-bold transition-all"
                          >
                            -
                          </button>
                          <span className="font-mono font-bold text-white text-sm w-8 text-center">{opcEmployees}</span>
                          <button
                            onClick={() => setOpcEmployees(opcEmployees + 1)}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white text-lg font-bold transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )}

                    {service.id === 'ecochasqui-ia' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Volumen estimado mensual:</span>
                          <span className="font-mono font-bold text-neon-green">{ecoTons} Toneladas</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="200"
                          step="5"
                          value={ecoTons}
                          onChange={(e) => setEcoTons(parseInt(e.target.value))}
                          className="w-full accent-neon-green bg-slate-950 h-1.5 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    )}

                    {service.id === 'red-guerra' && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">Nodos CIG Core a interconectar:</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setGuerraNodes(Math.max(1, guerraNodes - 1))}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white text-lg font-bold transition-all"
                          >
                            -
                          </button>
                          <span className="font-mono font-bold text-white text-sm w-8 text-center">{guerraNodes}</span>
                          <button
                            onClick={() => setGuerraNodes(guerraNodes + 1)}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white text-lg font-bold transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )}

                    {service.id === 'guerra-mobility' && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">Flota vehicular a equipar:</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setMobilityVehicles(Math.max(1, mobilityVehicles - 1))}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all"
                          >
                            -
                          </button>
                          <span className="font-mono font-bold text-white text-sm w-8 text-center">{mobilityVehicles}</span>
                          <button
                            onClick={() => setMobilityVehicles(mobilityVehicles + 1)}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )}

                    {service.id === 'guerra-capital' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Monto de Excedentes a Gestionar:</span>
                          <span className="font-mono font-bold text-neon-cyan">${capitalExcedent.toLocaleString('es-EC')} USD</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {[15000, 50000, 150000].map((val) => (
                            <button
                              key={val}
                              onClick={() => setCapitalExcedent(val)}
                              className={`px-2 py-1.5 rounded-lg text-[11px] font-mono transition-all border ${
                                capitalExcedent === val 
                                  ? 'bg-neon-cyan/10 border-neon-cyan/40 text-neon-cyan' 
                                  : 'bg-transparent border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                              }`}
                            >
                              {val === 15000 ? '$15K' : val === 50000 ? '$50K' : '$150K+'}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.id === 'custom-development' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Tipo de Proyecto Requerido:</span>
                          <span className="font-mono font-bold text-neon-purple uppercase">
                            {customProjectTier === 'web' ? 'Web/E-comm' : customProjectTier === 'marketing' ? 'Marketing' : 'App Complex'}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { key: 'web', label: 'Web/Store' },
                            { key: 'full-app', label: 'App Móvil' },
                            { key: 'marketing', label: 'Marketing' }
                          ].map((tier) => (
                            <button
                              key={tier.key}
                              onClick={() => setCustomProjectTier(tier.key as any)}
                              className={`px-1.5 py-2 rounded-lg text-[10.5px] font-mono transition-all border ${
                                customProjectTier === tier.key 
                                  ? 'bg-neon-purple/10 border-neon-purple text-neon-purple' 
                                  : 'bg-transparent border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                              }`}
                            >
                              {tier.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Pricing & Action Section */}
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                        PRECIO ESTIMADO REFERENCIAL
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-2xl font-mono font-bold text-white text-glow-cyan">
                          ${currentPrice.toLocaleString('es-EC')}
                        </span>
                        <span className="text-[10px] text-gray-400 font-sans">
                          {getPricingUnitLabel(service.id)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenSupportWithTopic(service.name)}
                        className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all text-xs font-mono"
                        title="Consultar detalles específicos"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleAddToCartClick(service)}
                        className={`flex-1 sm:flex-none px-5 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                          isAdded 
                            ? 'bg-emerald-500 text-deep-dark' 
                            : 'bg-white text-deep-dark hover:bg-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-102'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {isAdded ? 'CONFIGURADO' : 'AÑADIR AL CARRITO'}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
