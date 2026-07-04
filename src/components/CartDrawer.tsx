import React, { useState } from 'react';
import { X, Trash2, Send, Phone, Mail, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (serviceId: string, quantity: number) => void;
  onUpdateRequirements: (serviceId: string, requirements: string) => void;
  onRemoveItem: (serviceId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onUpdateRequirements,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    globalNotes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [lastQuoteRef, setLastQuoteRef] = useState('');

  if (!isOpen) return null;

  const totalBasePrice = cartItems.reduce((acc, item) => acc + (item.service.basePrice * item.quantity), 0);
  const totalServicesCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Generate a premium pre-formatted text for communication
  const generateMessageBody = () => {
    let text = `*SOLICITUD DE COTIZACIÓN - ECOSISTEMA CIG*\n`;
    text += `==================================\n`;
    text += `*Cliente:* ${formData.name || 'No especificado'}\n`;
    text += `*Empresa:* ${formData.company || 'No especificada'}\n`;
    text += `*Email:* ${formData.email || 'No especificado'}\n`;
    text += `*Teléfono:* ${formData.phone || 'No especificado'}\n\n`;
    text += `*SERVICIOS SELECCIONADOS:*\n`;
    
    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.service.name}*\n`;
      text += `   - Alcance: ${item.service.subtitle}\n`;
      text += `   - Cantidad/Licencias: ${item.quantity}\n`;
      text += `   - Precio Base: $${item.service.basePrice.toLocaleString('es-EC')} USD\n`;
      if (item.customRequirements) {
        text += `   - Configuración: ${item.customRequirements}\n`;
      }
      text += `\n`;
    });

    text += `==================================\n`;
    text += `*Total Base Estimado:* $${totalBasePrice.toLocaleString('es-EC')} USD\n`;
    if (formData.globalNotes) {
      text += `*Notas Adicionales:* ${formData.globalNotes}\n`;
    }
    text += `\n_Generado en el Ecosistema de Innovación CIG_`;
    return text;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    // Generate a random high-tech quote reference code
    const quoteRef = `CIG-${Math.floor(100000 + Math.random() * 900000)}`;
    setLastQuoteRef(quoteRef);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const rawMessage = generateMessageBody();
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/593958610578?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailRedirect = () => {
    const subject = encodeURIComponent(`Solicitud de Cotización Tecnológica - ${formData.company || formData.name}`);
    const body = encodeURIComponent(generateMessageBody().replace(/\*/g, '')); // Remove markdown asterisks for email simplicity
    const mailtoUrl = `mailto:conscientizarte13@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    onClearCart();
    setFormData({ name: '', company: '', email: '', phone: '', globalNotes: '' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Main Drawer Container */}
      <div className="relative w-full max-w-lg bg-slate-950/70 backdrop-blur-xl border-l border-white/10 h-full flex flex-col z-10 shadow-2xl">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
            </span>
            <h2 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              Mi Portafolio Modular
            </h2>
            <span className="text-xs bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full font-mono text-gray-400">
              {totalServicesCount} items
            </span>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submitted ? (
            /* Successful deployment quote generation */
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-neon-green/30 flex items-center justify-center mx-auto shadow-lg shadow-neon-green/5">
                <CheckCircle className="w-10 h-10 text-neon-green animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-white">
                  ¡Cotización Estructurada!
                </h3>
                <p className="text-sm text-gray-400 max-w-sm mx-auto">
                  Hemos codificado tu ecosistema modular de forma exitosa bajo la referencia de seguridad:
                </p>
                <div className="inline-block px-4 py-2 bg-slate-900 border border-white/10 rounded-lg font-mono text-neon-cyan font-bold tracking-widest text-sm mt-1">
                  {lastQuoteRef}
                </div>
              </div>

              <div className="bg-slate-900/60 border border-white/5 rounded-xl p-5 text-left space-y-4">
                <p className="text-xs text-gray-300 font-mono flex items-center gap-2">
                  <FileText className="w-4 h-4 text-neon-cyan" />
                  <span>RESUMEN CONSOLIDADO:</span>
                </p>
                
                <div className="max-h-40 overflow-y-auto bg-slate-950 p-3 rounded border border-white/10 text-xs font-mono text-gray-400 space-y-2">
                  <p className="text-white font-bold">Cliente: {formData.name} ({formData.company})</p>
                  <p className="border-b border-white/10 pb-1"></p>
                  {cartItems.map((item) => (
                    <div key={item.service.id} className="flex justify-between">
                      <span>• {item.service.name} (x{item.quantity})</span>
                      <span className="text-white">${(item.service.basePrice * item.quantity).toLocaleString('es-EC')} USD</span>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-1.5 flex justify-between font-bold text-neon-cyan">
                    <span>Base total estimada:</span>
                    <span>${totalBasePrice.toLocaleString('es-EC')} USD</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400">
                  Para proceder con el aprovisionamiento de infraestructura y agendar la consultoría de despliegue, selecciona tu canal de comunicación preferido para enviar este resumen directamente a nuestro equipo directivo:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Enviar a WhatsApp Directo
                </button>

                <button
                  onClick={handleEmailRedirect}
                  className="w-full py-3.5 px-4 rounded-xl bg-neon-cyan hover:bg-cyan-400 text-deep-dark font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Enviar por Correo Corporativo
                </button>

                <button
                  onClick={resetForm}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 text-xs font-mono tracking-wide transition-all"
                >
                  Configurar Otra Propuesta
                </button>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mx-auto text-gray-500">
                <Trash2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-white font-bold text-base">Carrito Vacío</p>
                <p className="text-gray-400 text-xs max-w-xs mx-auto">
                  Aún no has añadido soluciones tecnológicas del ecosistema CIG a tu portafolio de innovación.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-neon-cyan hover:underline font-mono"
              >
                Volver a los servicios <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ) : (
            /* Items list */
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Soluciones configuradas:
                </p>
                {cartItems.map((item) => (
                  <div 
                    key={item.service.id}
                    className="p-4 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 transition-all space-y-3 relative group"
                  >
                    <button
                      onClick={() => onRemoveItem(item.service.id)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-red-400 transition-colors"
                      title="Eliminar de la lista"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="pr-6">
                      <h4 className="text-sm font-bold text-white font-display">
                        {item.service.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">{item.service.subtitle}</p>
                    </div>

                    {/* Quantity Selector and Price */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-mono">Licencias / Unidades:</span>
                        <div className="flex items-center gap-2 bg-slate-950 px-2 py-1 rounded border border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(item.service.id, Math.max(1, item.quantity - 1))}
                            className="text-gray-400 hover:text-white px-1 font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="text-xs text-white font-mono font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.service.id, item.quantity + 1)}
                            className="text-gray-400 hover:text-white px-1 font-bold text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-gray-400 block font-mono">Subtotal:</span>
                        <span className="text-sm font-bold font-mono text-neon-cyan">
                          ${(item.service.basePrice * item.quantity).toLocaleString('es-EC')} USD
                        </span>
                      </div>
                    </div>

                    {/* Requirements input */}
                    <div className="pt-2">
                      <span className="text-[10px] text-gray-400 block font-mono mb-1">
                        REQUISITOS / OBSERVACIONES PARTICULARES:
                      </span>
                      <textarea
                        value={item.customRequirements}
                        onChange={(e) => onUpdateRequirements(item.service.id, e.target.value)}
                        placeholder="Especifica necesidades especiales de hardware, integraciones previas, etc."
                        className="w-full bg-slate-950 border border-white/5 focus:border-neon-cyan/40 rounded p-2 text-xs text-gray-300 font-sans h-12 resize-none outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Client information Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Formulario de Contacto Corporativo:
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 font-mono block">REPRESENTANTE *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Ing. Juan Pérez"
                      className="w-full bg-slate-950 border border-white/10 focus:border-neon-cyan/40 rounded-lg p-2.5 text-xs text-white outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 font-mono block">EMPRESA / ENTIDAD *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Corp Metal"
                      className="w-full bg-slate-950 border border-white/10 focus:border-neon-cyan/40 rounded-lg p-2.5 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 font-mono block">EMAIL CORPORATIVO *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full bg-slate-950 border border-white/10 focus:border-neon-cyan/40 rounded-lg p-2.5 text-xs text-white outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 font-mono block">TELÉFONO DE CONTACTO *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. +593958610578"
                      className="w-full bg-slate-950 border border-white/10 focus:border-neon-cyan/40 rounded-lg p-2.5 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 font-mono block">COMENTARIO ADICIONAL O CRONOGRAMA</label>
                  <textarea
                    value={formData.globalNotes}
                    onChange={(e) => setFormData({ ...formData, globalNotes: e.target.value })}
                    placeholder="Escribe plazos esperados, ubicación geográfica o detalles del ecosistema corporativo deseado..."
                    className="w-full bg-slate-950 border border-white/10 focus:border-neon-cyan/40 rounded-lg p-2.5 text-xs text-white h-16 resize-none outline-none"
                  />
                </div>

                {/* Pricing Summary */}
                <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-[5px] border border-neon-cyan/20 space-y-2">
                  <div className="flex justify-between text-xs text-gray-400 font-mono">
                    <span>Base de Soluciones (CIG):</span>
                    <span>${totalBasePrice.toLocaleString('es-EC')} USD</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 font-mono">
                    <span>Aprovisionamiento Base:</span>
                    <span className="text-neon-green">INCLUIDO</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 flex justify-between items-baseline">
                    <span className="text-xs font-bold text-white font-display">VALOR ESTIMADO TOTAL:</span>
                    <div className="text-right">
                      <span className="text-lg font-mono font-bold text-white text-glow-cyan">
                        ${totalBasePrice.toLocaleString('es-EC')}
                      </span>
                      <span className="text-[10px] text-gray-400 block font-sans">USD + Cotización Especial</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-amber-400/80 italic font-sans leading-tight pt-2 text-center border-t border-white/5">
                    * Todos los precios de los servicios están sujetos a auditoría de negocio y cotización presencial de nuestros agentes.
                  </p>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-deep-dark font-display font-bold tracking-wider transition-all shadow-lg shadow-neon-cyan/15 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  CONSOLIDAR COTIZACIÓN DE SERVICIOS
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
