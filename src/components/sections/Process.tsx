"use client";

import { Search, Code2, Rocket } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "1. Descubrimiento",
    description: "Nos sentamos con vos para entender a fondo la lógica de tu negocio y detectar dónde están las fugas de tiempo o dinero."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "2. Desarrollo Ágil",
    description: "Construimos tu solución priorizando la funcionalidad y una interfaz intuitiva, manteniéndote al tanto de cada avance."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "3. Despliegue y Escala",
    description: "Lanzamos la plataforma en servidores optimizados y te acompañamos para asegurar que tu equipo le saque el máximo provecho."
  }
];

const containerVariants : Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delayChildren: 0.2 }
  }
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Un proceso claro, resultados predecibles.
          </h2>
        </motion.div>

        <div className="relative mt-12">
          {/* Línea conectora de fondo (Gris) - Solo Desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10" />
          
          {/* Línea conectora animada (Azul) - Se dibuja al hacer scroll */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-linear-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20 origin-left -z-10 shadow-[0_0_10px_rgba(0,123,255,0.5)]"
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-12 relative"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group">
                
                {/* Contenedor del Ícono con efecto de pulso al encenderse */}
                <div className="relative mb-8">
                  {/* Círculo de pulso animado en hover */}
                  <div className="absolute inset-0 bg-brand-blue rounded-2xl opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700 ease-out"></div>
                  
                  <div className="relative w-20 h-20 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-[0_10px_20px_-10px_rgba(0,123,255,0.6)] group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_-10px_rgba(0,123,255,0.8)] transition-all duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                  {step.title}
                </h3>
                <p className="text-brand-gray leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}