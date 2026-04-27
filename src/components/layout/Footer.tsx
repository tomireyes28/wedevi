"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-navy pt-24 pb-12 text-white relative overflow-hidden">
      
      {/* Efectos de luz traseros (Glows abstractos) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

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

          {/* Formulario Estático */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 p-8 sm:p-10 rounded-[2rem] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50"></div>
            
            {/* Recordatorio: Reemplazar el action por el link de Formspree cuando exportemos a Hostinger */}
            <form action="ACA_IRA_TU_LINK_DE_FORMSPREE" method="POST" className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1 mb-1 block">Tu Nombre o Empresa</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Ej: Clínica San José" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1 mb-1 block">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="hola@empresa.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1 mb-1 block">¿Qué proceso querés mejorar?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  placeholder="Contanos un poco sobre tu desafío actual..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white/10 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full group bg-brand-blue hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,123,255,0.5)] mt-2 flex justify-center items-center gap-2"
              >
                Enviar Consulta
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
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