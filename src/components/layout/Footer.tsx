"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

// 1. Definimos las validaciones con Zod (Directamente acá para no crear más archivos)
const contactSchema = z.object({
  name: z.string().min(2, "Por favor, ingresá tu nombre o empresa."),
  email: z.string().email("Ingresá un correo válido."),
  message: z.string().min(10, "Contanos un poco más sobre tu desafío (mínimo 10 caracteres)."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Footer() {
  const [serverState, setServerState] = useState<{ success?: string; error?: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // 2. Lógica de envío a Web3Forms
  const onSubmit = async (data: ContactFormData) => {
    setServerState(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          Empresa_o_Nombre: data.name,
          Email: data.email,
          Desafio_a_resolver: data.message,
          // Asunto del mail para que lo identifiques rápido:
          subject: `🔥 Nuevo lead de Wedevi: ${data.name}`, 
        }),
      });

      const result = await response.json();

      if (result.success) {
        setServerState({ success: '¡Consulta enviada con éxito! Te contactaremos a la brevedad.' });
        reset();
      } else {
        setServerState({ error: 'Hubo un error al enviar. Por favor, intentá nuevamente.' });
      }
    } catch (error) {
      console.error(error);
      setServerState({ error: 'Ocurrió un error inesperado al conectar con el servidor.' });
    }
  };

  return (
    <footer id="contacto" className="bg-brand-navy pt-24 pb-12 text-white relative overflow-hidden">
      
      {/* Efectos de luz traseros (Glows abstractos) */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-brand-blue/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Mensaje Final */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-[1.2] text-white">
              ¿Listo para llevar la operativa de tu negocio al siguiente nivel?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Dejanos tus datos o agendá una llamada rápida de 15 minutos. Sin compromisos, solo hablamos de cómo la tecnología puede resolver tus cuellos de botella.
            </p>
            <div className="text-3xl font-bold tracking-tighter">
              WE<span className="text-brand-blue">DE</span>VI.
            </div>
          </motion.div>

          {/* Formulario Dinámico Integrado */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 p-8 sm:p-10 rounded-4xl border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-blue to-transparent opacity-50"></div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1 mb-1 block">Tu Nombre o Empresa</label>
                <input 
                  type="text" 
                  id="name" 
                  {...register('name')}
                  placeholder="Ej: Clínica San José" 
                  className={`w-full bg-white/5 border ${errors.name ? 'border-red-400/50' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white/10 transition-all`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1 mb-1 block">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  {...register('email')}
                  placeholder="hola@empresa.com" 
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-400/50' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white/10 transition-all`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1 mb-1 block">¿Qué proceso querés mejorar?</label>
                <textarea 
                  id="message" 
                  {...register('message')}
                  rows={4}
                  placeholder="Contanos un poco sobre tu desafío actual..." 
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-400/50' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white/10 transition-all resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message.message}</p>}
              </div>

              {/* Mensajes de Servidor (Éxito / Error) */}
              {serverState?.success && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  {serverState.success}
                </div>
              )}
              {serverState?.error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-center gap-3">
                  <XCircle className="w-5 h-5 shrink-0" />
                  {serverState.error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting || serverState?.success !== undefined}
                className="w-full group bg-brand-blue hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,123,255,0.5)] mt-2 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Procesando...
                  </>
                ) : serverState?.success ? (
                  "Consulta Enviada"
                ) : (
                  <>
                    Enviar Consulta
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Legal y Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Wedevi Solutions. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}