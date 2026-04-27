"use client";

import { LayoutDashboard, Bot, MonitorSmartphone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <LayoutDashboard size={28} />,
    title: "Sistemas de Gestión a Medida (CRM/ERP)",
    description: "Desarrollamos el panel de control central de tu negocio. Ideal para gestionar turnos, perfiles y flujos de trabajo de forma segura. Tu información centralizada y accesible 24/7.",
    color: "blue"
  },
  {
    icon: <Bot size={28} />,
    title: "Automatización y Bots Inteligentes",
    description: "Optimizamos tu flujo de atención. Creamos herramientas que responden consultas recurrentes e integran tus canales, liberando a tu equipo para tareas estratégicas.",
    color: "blue"
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Webs Corporativas de Alta Conversión",
    description: "Diseñamos tu sucursal digital. Interfaces rápidas, modernas y libres de ruido visual, estructuradas específicamente para captar leads y generar confianza en tu industria.",
    color: "blue"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-brand-soft relative overflow-hidden">
      {/* Patrón de puntos de fondo (Grid Dots) */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#0A192F_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      {/* Glow decorativo detrás de las tarjetas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Soluciones digitales orientadas a resultados.
          </h2>
          <p className="text-lg text-brand-gray">
            Diseñamos herramientas a medida que se adaptan a la lógica de tu empresa, no al revés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-4xl border border-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,123,255,0.15)] hover:bg-white transition-all duration-500"
            >
              {/* Brillo de esquina en hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-inner">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-brand-gray leading-relaxed mb-8 group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-brand-blue opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                Saber más <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}