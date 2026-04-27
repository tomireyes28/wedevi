"use client";

import { Clock, MessageSquare, MonitorX } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Definimos la variante para que los hijos aparezcan en cascada
const containerVariants : Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // 0.2s de retraso entre cada tarjeta
  }
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Problem() {
  return (
    <section id="problema" className="py-24 bg-white relative overflow-hidden">
      {/* Detalle visual: una luz muy tenue en el fondo para que no sea blanco plano */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-red-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            ¿Tu negocio está frenado por la tecnología que usás?
          </h2>
          <p className="text-lg text-brand-gray">
            La mayoría de las empresas pierden dinero y tiempo intentando adaptar sus procesos a herramientas genéricas que no fueron hechas para ellos.
          </p>
        </motion.div>

        {/* Grilla de Problemas con animación en cascada */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-10 lg:gap-16"
        >
          {/* Columna 1 */}
          <motion.div variants={itemVariants} className="group flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 hover:bg-gray-50/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 shadow-sm">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3 transition-colors group-hover:text-red-500">Procesos Manuales Lentos</h3>
            <p className="text-brand-gray leading-relaxed group-hover:text-gray-600 transition-colors">
              Tu equipo pierde horas valiosas cargando datos en planillas de Excel interminables y desconectadas.
            </p>
          </motion.div>

          {/* Columna 2 */}
          <motion.div variants={itemVariants} className="group flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 hover:bg-gray-50/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 shadow-sm">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3 transition-colors group-hover:text-orange-500">Atención Desbordada</h3>
            <p className="text-brand-gray leading-relaxed group-hover:text-gray-600 transition-colors">
              Perdés ventas o clientes porque no podés responder consultas repetitivas a tiempo en tus canales.
            </p>
          </motion.div>

          {/* Columna 3 */}
          <motion.div variants={itemVariants} className="group flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 hover:bg-gray-50/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="w-16 h-16 bg-gray-100 text-gray-500 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 shadow-sm">
              <MonitorX size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3 transition-colors group-hover:text-brand-navy">Presencia Digital Pobre</h3>
            <p className="text-brand-gray leading-relaxed group-hover:text-gray-600 transition-colors">
              Tu web actual está desactualizada, es lenta y no refleja la calidad real de los servicios que ofrecés.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}