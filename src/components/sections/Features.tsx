"use client";

import { Zap, Paintbrush, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Velocidad y Rendimiento",
    description: "Tus plataformas cargarán al instante, evitando que los usuarios se frustren y abandonen. Construimos sobre arquitecturas modernas que escalan con vos."
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Diseño Centrado en el Usuario",
    description: "Interfaces intuitivas y estéticas. Nos obsesionan los diseños pulidos, profesionales y libres de ruido visual para que tu marca destaque."
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Acompañamiento Estratégico",
    description: "No solo programamos; entendemos tu modelo de negocio y te sugerimos la mejor ruta para que la herramienta realmente genere retorno de inversión."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Tecnología de punta, hablada en tu idioma.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group flex flex-col items-start p-8 rounded-3xl hover:bg-brand-soft transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(0,123,255,0.6)] transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{feature.title}</h3>
              </div>
              <p className="text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}