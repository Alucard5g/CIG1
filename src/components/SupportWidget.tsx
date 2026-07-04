import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, Send, Calendar, Clock, ArrowRight, User, Sparkles, Laptop, Phone, HelpCircle, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { ChatMessage } from '../types';

interface SupportWidgetProps {
  initialTopic?: string;
  cartSummaryText?: string;
}

export default function SupportWidget({ initialTopic, cartSummaryText }: SupportWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Scheduling States
  const [showScheduler, setShowScheduler] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    name: '',
    email: '',
    date: '2026-07-06',
    time: '10:00',
    topic: 'General / Ecosistema CIG',
    medium: 'Google Meet'
  });
  const [scheduledSuccessfully, setScheduledSuccessfully] = useState(false);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Initial welcome message setup
  useEffect(() => {
    setMessages([
      {
        id: 'welcome-1',
        text: '¡Saludos del Mañana! Soy SophIA, tu asistente de CIG, experta en el ecosistema de Corporación e Innovación CIG.',
        sender: 'bot',
        timestamp: 'Ahora'
      },
      {
        id: 'welcome-2',
        text: '¿En qué puedo ayudarte hoy a transformar tu organización con nuestras soluciones digitales de alta confianza y sostenibilidad?',
        sender: 'bot',
        timestamp: 'Ahora',
        actions: [
          { label: '🚀 Agendar Consultoría', payload: 'schedule_meeting', type: 'schedule' },
          { label: '💎 Entender el 90% de ahorro OPC', payload: 'opc_info', type: 'service_info', targetId: 'opc-infrastructure' },
          { label: '👁️ Ver SophIA Holographics', payload: 'sophia_info', type: 'service_info', targetId: 'sophia-holographics' },
          { label: '♻️ EcoChasqui & Créditos Verdes', payload: 'eco_info', type: 'service_info', targetId: 'ecochasqui-ia' }
        ]
      }
    ]);
  }, []);

  // Sync initialTopic changes (e.g. if a user clicks consult on a service card)
  useEffect(() => {
    if (initialTopic) {
      triggerBotResponse(`Quiero agendar o consultar sobre el servicio: ${initialTopic}`);
    }
  }, [initialTopic]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const triggerBotResponse = (userText: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      text: userText,
      sender: 'user',
      timestamp: 'Ahora'
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let replyText = '';
      let replyActions: any[] = [];
      const normalized = userText.toLowerCase();

      if (normalized.includes('schedule') || normalized.includes('agendar') || normalized.includes('consultoría') || normalized.includes('cita')) {
        replyText = 'Excelente decisión. Un consultor experto de CIG analizará tus objetivos corporativos. He activado nuestro planificador cripto-seguro en la interfaz de la derecha para que definas la fecha y hora de tu sesión estratégica.';
        setShowScheduler(true);
        replyActions = [{ label: 'Ir al Planificador', payload: 'focus_scheduler', type: 'general' }];
      } else if (normalized.includes('opc') || normalized.includes('ahorro') || normalized.includes('emprendimiento')) {
        replyText = 'El modelo OPC (One Person Company) está diseñado para eliminar la burocracia operativa redundante. Automatiza contabilidad, facturación autorizada con el SRI, control biométrico y stock. Reduce tus costos de nómina tradicionales en un 90%, delegando la administración total a una interfaz inteligente de un solo directivo.';
        replyActions = [
          { label: '🛒 Añadir OPC al Carrito', payload: 'add_opc_direct', type: 'add_to_cart', targetId: 'opc-infrastructure' },
          { label: '🚀 Agendar Demo', payload: 'schedule_meeting', type: 'schedule' }
        ];
      } else if (normalized.includes('sophia') || normalized.includes('hologram') || normalized.includes('inteligencia artificial')) {
        replyText = 'SophIA Holographics revoluciona la atención interactiva. Desarrollamos avatares y asistentes tridimensionales/holográficos con modelos LLM propietarios entrenados en el conocimiento de tu marca. Resuelven el 95% de dudas con empatía simulada y derivan prospectos de alto valor de inmediato.';
        replyActions = [
          { label: '🛒 Añadir SophIA al Carrito', payload: 'add_sophia_direct', type: 'add_to_cart', targetId: 'sophia-holographics' },
          { label: '🚀 Agendar una Sesión', payload: 'schedule_meeting', type: 'schedule' }
        ];
      } else if (normalized.includes('eco') || normalized.includes('reciclaje') || normalized.includes('circular') || normalized.includes('chasqui')) {
        replyText = 'EcoChasqui IA es nuestra plataforma bandera para sustentabilidad industrial. Sincroniza hardware de escaneo óptico mediante visión artificial con un software que clasifica materiales reciclables, cuantifica bonos de CO2, y asocia a tu empresa a la red de beneficios fiscales verdes.';
        replyActions = [
          { label: '🛒 Añadir EcoChasqui', payload: 'add_eco_direct', type: 'add_to_cart', targetId: 'ecochasqui-ia' },
          { label: '🚀 Agendar Consultoría', payload: 'schedule_meeting', type: 'schedule' }
        ];
      } else if (normalized.includes('mobility') || normalized.includes('flota') || normalized.includes('vehículo') || normalized.includes('seguridad')) {
        replyText = 'CIG Mobility salva vidas mediante computadoras predictivas de abordo. Nuestras cámaras internas evalúan patrones de fatiga, somnolencia, desatención ocular o rastro de embriaguez del conductor, alertando de inmediato a la central corporativa. Si el riesgo es crítico, la IA toma control parcial del vehículo de manera autónoma para orillarse de forma segura.';
        replyActions = [
          { label: '🛒 Añadir CIG Mobility', payload: 'add_mobility_direct', type: 'add_to_cart', targetId: 'cig-mobility' },
          { label: '🚀 Agendar Demo', payload: 'schedule_meeting', type: 'schedule' }
        ];
      } else if (normalized.includes('capital') || normalized.includes('inversión') || normalized.includes('excedentes')) {
        replyText = 'CIG Capital Markets optimiza la tesorería corporativa. Analizamos tus saldos pasivos y los posicionamos estratégicamente en instrumentos bursátiles internacionales de alta liquidez y rendimiento mediante algoritmos predictivos cuantitativos alineados con objetivos de sostenibilidad (ESG).';
        replyActions = [
          { label: '🛒 Añadir CIG Capital', payload: 'add_capital_direct', type: 'add_to_cart', targetId: 'cig-capital' },
          { label: '🚀 Agendar Consultoría', payload: 'schedule_meeting', type: 'schedule' }
        ];
      } else {
        replyText = `Comprendo tu interés en transformar el ecosistema con tecnología segura. He registrado tu inquietud sobre: "${userText}". Nuestro equipo comercial y de I+D profundizará en esto en tu consultoría personalizada. ¿Te gustaría agendar una reunión virtual Meet gratuita para estructurar tu blueprint tecnológico hoy?`;
        replyActions = [
          { label: '🚀 Agendar Reunión Virtual', payload: 'schedule_meeting', type: 'schedule' },
          { label: '📞 Hablar con un Humano', payload: 'direct_whatsapp', type: 'general' }
        ];
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: replyText,
        sender: 'bot',
        timestamp: 'Ahora',
        actions: replyActions
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    triggerBotResponse(inputText);
    setInputText('');
  };

  const handleActionClick = (action: any) => {
    if (action.type === 'schedule') {
      setShowScheduler(true);
      triggerBotResponse('Quiero agendar una consultoría de alta tecnología.');
    } else if (action.type === 'service_info') {
      triggerBotResponse(`Quiero información sobre ${action.label}`);
    } else if (action.type === 'add_to_cart') {
      // Scroll to service card directly
      const card = document.getElementById(`card-${action.targetId}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.payload === 'direct_whatsapp') {
      window.open('https://wa.me/593958610578?text=Hola%20CIG%2C%20requiero%20asistencia%20personalizada%20con%20sus%20servicios%20de%20IA.', '_blank');
    } else if (action.payload === 'focus_scheduler') {
      setShowScheduler(true);
    }
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduledSuccessfully(true);

    setTimeout(() => {
      const confirmationCode = `CIG-MEET-${Math.floor(100 + Math.random() * 900)}`;
      const confirmMsg: ChatMessage = {
        id: `confirm-${Date.now()}`,
        text: `¡Felicidades, ${scheduleData.name}! Tu Sesión Estratégica sobre "${scheduleData.topic}" ha sido agendada con éxito para el ${scheduleData.date} a las ${scheduleData.time} vía ${scheduleData.medium}. Código de Acceso Seguro: ${confirmationCode}. Se ha enviado una clave de confirmación a: ${scheduleData.email}.`,
        sender: 'system',
        timestamp: 'Ahora'
      };
      setMessages(prev => [...prev, confirmMsg]);
      setShowScheduler(false);
      setScheduledSuccessfully(false);
    }, 1500);
  };

  return (
    <section id="soporte" className="py-24 bg-transparent relative border-b border-white/5">
      <div className="absolute left-1/4 top-10 w-[300px] h-[300px] bg-neon-purple/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-neon-purple uppercase">
            Módulo de Soporte Inteligente & Consultas
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-6">
            Consultoría & Soporte <span className="text-neon-purple">Personalizado</span>
          </h2>
          <p className="font-sans text-gray-400">
            Interactúa con nuestro bot de IA en tiempo real para resolver dudas específicas del portafolio o programa una consultoría Meet directamente con un director técnico de CIG.
          </p>
        </div>

        {/* Console / Workspace Dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Chat Console (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 flex flex-col h-[520px] overflow-hidden shadow-2xl">
            
            {/* Chat header */}
            <div className="p-4 bg-white/[0.02] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>SophIA asistente de CIG</span>
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">ASISTENTE CONVERSACIONAL COGNITIVO</span>
                </div>
              </div>
              <div className="px-3 py-1 rounded bg-slate-950/80 border border-white/10 font-mono text-[9px] text-gray-500">
                SECURE SSL CODER
              </div>
            </div>

            {/* Chat Messages flow area */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border text-xs font-bold ${
                    msg.sender === 'user' 
                      ? 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30' 
                      : msg.sender === 'system'
                      ? 'bg-emerald-500/15 text-neon-green border-neon-green/30'
                      : 'bg-neon-purple/15 text-neon-purple border-neon-purple/30'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-4.5 h-4.5" /> : <Sparkles className="w-4.5 h-4.5" />}
                  </div>

                  {/* Bubble Box */}
                  <div className="space-y-2">
                    <div className={`p-3.5 rounded-xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-neon-cyan/20 to-blue-600/10 text-white border border-neon-cyan/20 rounded-tr-none'
                        : msg.sender === 'system'
                        ? 'bg-emerald-950/40 text-gray-200 border border-emerald-500/30 rounded-tl-none'
                        : 'bg-slate-900 text-gray-300 border border-white/5 rounded-tl-none'
                    }`}>
                      <p>{msg.text}</p>
                    </div>

                    {/* Interactive Action Buttons inside response */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1.5">
                        {msg.actions.map((act, i) => (
                          <button
                            key={i}
                            onClick={() => handleActionClick(act)}
                            className="px-3 py-1.5 rounded-lg text-xs font-sans font-medium bg-slate-900 border border-white/10 text-gray-300 hover:text-white hover:border-neon-purple/50 transition-all flex items-center gap-1 cursor-pointer"
                          >
                            <ChevronRight className="w-3 h-3 text-neon-purple" />
                            {act.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-lg bg-neon-purple/15 text-neon-purple border border-neon-purple/30 flex items-center justify-center flex-shrink-0 animate-pulse">
                    <Sparkles className="w-4.5 h-4.5" />
                  </div>
                  <div className="p-3 bg-slate-900 border border-white/5 rounded-xl rounded-tl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat quick chips selection to guide user */}
            <div className="px-4 py-2 border-t border-white/5 bg-transparent flex gap-2 overflow-x-auto whitespace-nowrap">
              <button 
                onClick={() => triggerBotResponse('¿Cómo reduce costos el sistema OPC?')}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[10.5px] text-gray-400 hover:text-white hover:border-neon-cyan/30 transition-all font-mono"
              >
                💡 ¿Ahorro OPC?
              </button>
              <button 
                onClick={() => triggerBotResponse('Quiero agendar una consultoría de alta tecnología')}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[10.5px] text-gray-400 hover:text-white hover:border-neon-purple/30 transition-all font-mono"
              >
                📆 Agendar Sesión
              </button>
              <button 
                onClick={() => triggerBotResponse('¿Qué es EcoChasqui IA y su clasificación automatizada?')}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[10.5px] text-gray-400 hover:text-white hover:border-neon-green/30 transition-all font-mono"
              >
                ♻️ EcoChasqui
              </button>
              <button 
                onClick={() => triggerBotResponse('Explicar el frenado autónomo preventivo de CIG Mobility')}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[10.5px] text-gray-400 hover:text-white hover:border-neon-cyan/30 transition-all font-mono"
              >
                🚛 Piloto Preventivo
              </button>
            </div>

            {/* Chat Send Form */}
            <form onSubmit={handleSendSubmit} className="p-3 border-t border-white/10 bg-white/[0.02] backdrop-blur-[5px] flex gap-2">
              <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Pregunta a SophIA sobre los servicios o integraciones..."
                className="flex-1 bg-slate-950/80 border border-white/10 focus:border-neon-purple/40 rounded-xl px-4 py-3 text-xs text-white outline-none focus:ring-0 font-sans"
              />
              <button
                type="submit"
                className="p-3 rounded-xl bg-neon-purple text-white hover:bg-neon-purple/80 transition-all duration-200 flex items-center justify-center shadow-lg shadow-neon-purple/25 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

          {/* Interactive Scheduler Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-2xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Outer grid patterns */}
              <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

              {!showScheduler ? (
                /* Static placeholder promoting booking */
                <div className="my-auto text-center space-y-6 py-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mx-auto text-neon-cyan">
                    <Calendar className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-white">Planificación de Sesión Estratégica</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Estructura tu plan de acción tecnológico. Reserva 30 minutos de consultoría de ingeniería sin costo con los líderes técnicos de CIG. Sincroniza requerimientos de hardware, presupuestos o pilotos de prueba.
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setShowScheduler(true)}
                    className="px-6 py-3.5 rounded-xl bg-white text-deep-dark hover:bg-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all font-display font-bold text-xs tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer"
                  >
                    Activar Calendario de Reserva
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Dynamic Booking form */
                <form onSubmit={handleScheduleSubmit} className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-4.5 h-4.5 text-neon-purple" />
                      <span>AGENDAR SESIÓN INDIVIDUAL</span>
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowScheduler(false)}
                      className="text-xs text-gray-500 hover:text-white underline font-mono"
                    >
                      Cerrar
                    </button>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider text-gray-400 uppercase block">Nombre de Contacto</label>
                    <input 
                      type="text"
                      required
                      placeholder="Ing. María Solís"
                      value={scheduleData.name}
                      onChange={(e) => setScheduleData({ ...scheduleData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 focus:border-neon-purple/40 rounded-lg p-2.5 text-xs text-white outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider text-gray-400 uppercase block">Correo Corporativo</label>
                    <input 
                      type="email"
                      required
                      placeholder="msolis@empresa.com"
                      value={scheduleData.email}
                      onChange={(e) => setScheduleData({ ...scheduleData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 focus:border-neon-purple/40 rounded-lg p-2.5 text-xs text-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-wider text-gray-400 uppercase block">Fecha Estimada</label>
                      <input 
                        type="date"
                        required
                        value={scheduleData.date}
                        onChange={(e) => setScheduleData({ ...scheduleData, date: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 focus:border-neon-purple/40 rounded-lg p-2.5 text-xs text-white outline-none font-mono"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-wider text-gray-400 uppercase block">Hora Seleccionada</label>
                      <select 
                        value={scheduleData.time}
                        onChange={(e) => setScheduleData({ ...scheduleData, time: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 focus:border-neon-purple/40 rounded-lg p-2.5 text-xs text-white outline-none font-mono"
                      >
                        <option value="09:00">09:00 AM (ECT)</option>
                        <option value="10:00">10:00 AM (ECT)</option>
                        <option value="11:30">11:30 AM (ECT)</option>
                        <option value="14:00">02:00 PM (ECT)</option>
                        <option value="15:30">03:30 PM (ECT)</option>
                        <option value="17:00">05:00 PM (ECT)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider text-gray-400 uppercase block">Tema Principal de Enfoque</label>
                    <select
                      value={scheduleData.topic}
                      onChange={(e) => setScheduleData({ ...scheduleData, topic: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 focus:border-neon-purple/40 rounded-lg p-2.5 text-xs text-white outline-none font-sans"
                    >
                      <option value="SophIA Holographics (Asistentes IA)">SophIA Holographics (Asistentes IA)</option>
                      <option value="OPC (Eficiencia Corporativa Extrema)">OPC (Eficiencia Corporativa Extrema)</option>
                      <option value="EcoChasqui IA (Sustentabilidad)">EcoChasqui IA (Sustentabilidad)</option>
                      <option value="CIG Mobility (Seguridad Flotas)">CIG Mobility (Seguridad Flotas)</option>
                      <option value="CIG Capital Markets (Finanzas)">CIG Capital Markets (Finanzas)</option>
                      <option value="Ecosistema Completo / Red CIG">Ecosistema Completo / Red CIG</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider text-gray-400 uppercase block">Medio de Reunión</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Google Meet', 'Llamada WhatsApp'].map((medium) => (
                        <button
                          key={medium}
                          type="button"
                          onClick={() => setScheduleData({ ...scheduleData, medium })}
                          className={`py-2 px-3 rounded-lg text-[10.5px] font-mono transition-all border ${
                            scheduleData.medium === medium 
                              ? 'bg-neon-purple/15 border-neon-purple text-white font-bold' 
                              : 'bg-transparent border-white/5 text-gray-400 hover:border-white/10'
                          }`}
                        >
                          {medium}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={scheduledSuccessfully}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-purple to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-display font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-neon-purple/15 flex items-center justify-center gap-2"
                  >
                    {scheduledSuccessfully ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-neon-green animate-bounce" />
                        <span>PROCESANDO RESERVA...</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-4 h-4" />
                        <span>AGENDAR SESIÓN SIN COSTO</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Status footer for scheduling card */}
              <div className="pt-4 border-t border-white/5 mt-4 text-[10px] text-gray-500 font-mono flex justify-between items-center">
                <span>RESERVA ENLACE SEGURA</span>
                <span className="text-neon-cyan">GMT-5 COLOMBIA/ECUADOR</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
