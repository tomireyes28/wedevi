"use client"; // Requerido para usar Framer Motion en Next.js App Router

import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-soft">
      {/* Efectos de luz de fondo (Glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--color-brand-blue),_transparent_70%)] pointer-events-none blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto Animada */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6 border border-brand-blue/20 shadow-[0_0_15px_rgba(0,123,255,0.15)]"
            >
              <Zap size={16} className="fill-brand-blue/20" />
              Transformación Digital para Empresas
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] mb-6 tracking-tight">
              Software a medida para negocios que quieren <span className="text-brand-blue relative whitespace-nowrap">
                crecer sin cuellos
                {/* Subrayado animado */}
                <motion.svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" 
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.svg>
              </span> de botella.
            </h1>
            
            <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-xl">
              Diseñamos y desarrollamos plataformas de gestión, automatizaciones y webs profesionales. Dejá de adaptar tu negocio a herramientas genéricas; nosotros creamos la herramienta exacta que tu negocio necesita.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#contacto" 
                className="group inline-flex justify-center items-center gap-2 bg-brand-blue text-white px-8 py-3.5 rounded-xl font-medium hover:bg-blue-600 transition-all shadow-[0_10px_30px_-10px_rgba(0,123,255,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(0,123,255,0.7)] hover:-translate-y-1"
              >
                Contanos tu desafío
              </a>
              <a 
                href="#casos" 
                className="group inline-flex justify-center items-center gap-2 bg-white text-brand-navy border border-gray-200 px-8 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-all hover:-translate-y-1"
              >
                Ver nuestro trabajo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Columna Visual (Mockup Abstracto Animado) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Círculo decorativo de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-brand-blue/5 to-transparent rounded-full blur-3xl -z-10"></div>
            
            {/* Contenedor principal del Mockup */}
            <div className="bg-white/60 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-white/50 relative">
              <div className="bg-gray-50 rounded-xl h-[420px] w-full overflow-hidden relative border border-gray-100 flex shadow-inner">
                
                {/* Sidebar abstracto */}
                <div className="w-1/4 h-full bg-white border-r border-gray-100 p-4 flex flex-col gap-3">
                  <div className="w-full h-6 bg-gray-200 rounded-md mb-4"></div>
                  <div className="w-3/4 h-4 bg-gray-100 rounded-md"></div>
                  <div className="w-5/6 h-4 bg-brand-blue/10 rounded-md"></div>
                  <div className="w-2/3 h-4 bg-gray-100 rounded-md"></div>
                </div>

                {/* Dashboard abstracto */}
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-1/3 h-6 bg-gray-200 rounded-md mb-2"></div>
                  <div className="flex gap-4">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="flex-1 h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-end"
                    >
                      <div className="w-full h-8 bg-brand-blue/10 rounded-md"></div>
                    </motion.div>
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                      className="flex-1 h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-end"
                    >
                       <div className="w-3/4 h-12 bg-green-500/10 rounded-md"></div>
                    </motion.div>
                  </div>
                  
                  {/* Gráfico principal flotante */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex-1 bg-white rounded-xl shadow-md border border-gray-100 p-4 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/5 to-transparent"></div>
                    <svg className="w-full h-full text-brand-blue/20" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0 40 L0 30 Q 10 20 20 25 T 40 15 T 60 20 T 80 5 L100 10 L100 40 Z" fill="currentColor" />
                      <path d="M0 30 Q 10 20 20 25 T 40 15 T 60 20 T 80 5 L100 10" fill="none" stroke="var(--color-brand-blue)" strokeWidth="1" />
                    </svg>
                  </motion.div>
                </div>

                {/* Tarjeta flotante despegada (Efecto WOW) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute -right-6 top-1/3 bg-white p-4 rounded-xl shadow-xl border border-gray-100/50 backdrop-blur-md w-48 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="w-20 h-3 bg-gray-200 rounded-full mb-2"></div>
                    <div className="w-12 h-2 bg-gray-100 rounded-full"></div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}