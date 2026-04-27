"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Cases() {
  return (
    <section id="casos" className="py-24 bg-brand-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Experiencias que impulsan negocios.
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto lg:mx-0">
            Proyectos diseñados para resolver problemas específicos con tecnología moderna, enfocados siempre en el usuario final.
          </p>
        </motion.div>

        <div className="space-y-32">
          
          {/* Caso 1: Gestión Profesional (Texto a la Izq, Imagen a la Der) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold tracking-wider uppercase mb-6">
                Gestión Profesional
              </div>
              <h3 className="text-3xl font-bold text-brand-navy mb-6 leading-tight">
                Plataformas de Gestión Médica
              </h3>
              
              <div className="space-y-6 text-brand-gray text-lg">
                <div className="flex gap-4">
                  <div className="mt-1 text-red-400"><CheckCircle2 size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">El desafío:</strong> Organizar la información de pacientes y turnos de forma privada y eficiente para profesionales independientes que usan papel o Excel.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-green-500"><CheckCircle2 size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">La solución:</strong> Un portal seguro con roles de usuario, agenda integrada y carga de datos ágil. Todo bajo una interfaz limpia que reduce la carga cognitiva.</p>
                </div>
              </div>
              
              <button className="mt-10 flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all">
                Ver detalles del proyecto <ArrowRight size={20} />
              </button>
            </motion.div>

            {/* Mockup Abstracto Dashboard */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full transform scale-110 -z-10"></div>
              <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex flex-col h-87.5">
                  {/* Top bar tipo macOS */}
                  <div className="bg-white border-b border-gray-200 px-4 py-3 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  {/* UI Interna */}
                  <div className="flex flex-1 p-4 gap-4">
                     <div className="w-1/4 bg-white rounded-lg border border-gray-100 p-3 space-y-3">
                        <div className="w-full h-4 bg-gray-200 rounded"></div>
                        <div className="w-3/4 h-4 bg-gray-100 rounded"></div>
                        <div className="w-1/2 h-4 bg-gray-100 rounded"></div>
                     </div>
                     <div className="flex-1 space-y-4">
                        <div className="w-1/3 h-6 bg-brand-blue/20 rounded"></div>
                        <div className="w-full h-32 bg-white rounded-lg border border-gray-100 shadow-sm"></div>
                        <div className="flex gap-4">
                           <div className="flex-1 h-20 bg-white rounded-lg border border-gray-100"></div>
                           <div className="flex-1 h-20 bg-white rounded-lg border border-gray-100"></div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Caso 2: Presencia Digital (Imagen a la Izq, Texto a la Der) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Mockup Abstracto Web */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-navy/5 blur-3xl rounded-full transform scale-110 -z-10"></div>
              <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 h-87.5 flex flex-col relative">
                  {/* Hero simulado */}
                  <div className="h-1/2 bg-brand-navy p-6 flex flex-col justify-center gap-3">
                     <div className="w-1/2 h-8 bg-white/20 rounded"></div>
                     <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                     <div className="w-24 h-8 bg-brand-blue rounded mt-2"></div>
                  </div>
                  {/* Cards simuladas */}
                  <div className="flex px-6 -mt-8 gap-4">
                     <div className="flex-1 h-32 bg-white rounded-xl shadow-lg border border-gray-100"></div>
                     <div className="flex-1 h-32 bg-white rounded-xl shadow-lg border border-gray-100 mt-4"></div>
                     <div className="flex-1 h-32 bg-white rounded-xl shadow-lg border border-gray-100"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm font-bold tracking-wider uppercase mb-6">
                Presencia Digital
              </div>
              <h3 className="text-3xl font-bold text-brand-navy mb-6 leading-tight">
                Soluciones para Rubros Tradicionales
              </h3>
              
              <div className="space-y-6 text-brand-gray text-lg">
                <div className="flex gap-4">
                  <div className="mt-1 text-red-400"><CheckCircle2 size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">El desafío:</strong> Modernizar la imagen de una empresa de instalaciones (aberturas/vidriería) para captar clientes corporativos y ganar licitaciones.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-green-500"><CheckCircle2 size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">La solución:</strong> Una landing page ultrarrápida, con un catálogo visual claro de los trabajos realizados y un sistema de contacto directo por WhatsApp.</p>
                </div>
              </div>

              <button className="mt-10 flex items-center gap-2 text-brand-navy font-bold hover:gap-4 transition-all">
                Ver detalles del proyecto <ArrowRight size={20} />
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}