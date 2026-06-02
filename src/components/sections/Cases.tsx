"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
                  <div className="mt-1 text-red-400"><CheckCircle2 className="shrink-0" size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">El desafío:</strong> Organizar la información de pacientes y turnos de forma privada y eficiente para profesionales independientes que usan papel o Excel.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-green-500"><CheckCircle2 className="shrink-0" size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">La solución:</strong> Un portal seguro con roles de usuario, agenda integrada y carga de datos ágil. Todo bajo una interfaz limpia que reduce la carga cognitiva.</p>
                </div>
              </div>
              
              {/* Transformado a etiqueta <a> para redirigir a un PDF o vista detallada */}
              <a href="https://psycho-manager.vercel.app/auth" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-4 transition-all cursor-pointer">
                Visitar sitio web en vivo <ArrowRight size={20} />
              </a>
            </motion.div>

            {/* Mockup Real: Therapio */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full transform scale-110 -z-10"></div>
              <Image 
                src="/image1.png" 
                alt="Dashboard de la Plataforma Therapio" 
                width={800} 
                height={600} 
                className="w-full h-auto object-contain transform scale-110 lg:scale-125 lg:rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Caso 2: Presencia Digital (Imagen a la Izq, Texto a la Der) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Mockup Real: Aberturas */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-navy/5 blur-3xl rounded-full transform scale-110 -z-10"></div>
              <Image 
                src="/image2.png" 
                alt="Web Corporativa de Aberturas" 
                width={800} 
                height={600} 
                className="w-full h-auto object-contain transform scale-110 lg:scale-125 lg:-rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl"
              />
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
                  <div className="mt-1 text-red-400"><CheckCircle2 className="shrink-0" size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">El desafío:</strong> Modernizar la imagen de una empresa de instalaciones (aberturas/vidriería) para captar clientes corporativos y ganar licitaciones.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-green-500"><CheckCircle2 className="shrink-0" size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">La solución:</strong> Una landing page ultrarrápida, con un catálogo visual claro de los trabajos realizados y un sistema de contacto directo por WhatsApp.</p>
                </div>
              </div>

              {/* Link directo a la web del cliente */}
              <a href="https://aberturasnyl.com/" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-4 transition-all cursor-pointer">
                Visitar sitio web en vivo <ArrowRight size={20} />
              </a>
            </motion.div>

          </div>

          {/* Caso 3: Simulador DEA (Texto a la Izq, Imagen a la Der) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold tracking-wider uppercase mb-6">
                Desarrollo Avanzado
              </div>
              <h3 className="text-3xl font-bold text-brand-navy mb-6 leading-tight">
                Simulador Médico Interactivo (DEA)
              </h3>
              
              <div className="space-y-6 text-brand-gray text-lg">
                <div className="flex gap-4">
                  <div className="mt-1 text-red-400"><CheckCircle2 className="shrink-0" size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">El desafío:</strong> Entrenar al personal de salud en el uso de desfibriladores mediante una experiencia interactiva realista, sin depender de equipos físicos costosos.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-green-500"><CheckCircle2 className="shrink-0" size={24} /></div>
                  <p><strong className="text-brand-navy font-semibold">La solución:</strong> Una aplicación web con lógica compleja que simula estados, tiempos de respuesta y métricas vitales en tiempo real, permitiendo evaluaciones precisas.</p>
                </div>
              </div>
              
              {/* Link a un PDF o vista detallada */}
              <a href="https://dea-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-4 transition-all cursor-pointer">
                Visitar aplicacion web en vivo <ArrowRight size={20} />
              </a>
            </motion.div>

            {/* Mockup Real: Simulador DEA */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full transform scale-110 -z-10"></div>
              <Image 
                src="/image3.png" 
                alt="Simulador Médico DEA" 
                width={800} 
                height={600} 
                className="w-full h-auto object-contain transform scale-110 lg:scale-125 lg:rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}