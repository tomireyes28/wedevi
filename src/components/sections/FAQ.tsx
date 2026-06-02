"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuánto tiempo demoran en entregar un proyecto?",
    answer: "Depende de la complejidad. Para webs informativas, landing pages de alta conversión o menús digitales, solemos demorar alrededor de 1 semana. Para sistemas a medida, como un CRM, portales de gestión o paneles de administración, calculamos a partir de 2 semanas, siempre priorizando la calidad y el detalle."
  },
  {
    question: "¿Qué pasa si necesito ayuda después de la entrega?",
    answer: "No te dejamos a la deriva. Incluimos un periodo de soporte inicial para asegurar que todo funcione a la perfección en tu día a día. Luego, ofrecemos opciones de mantenimiento para encargarnos de los servidores, la seguridad y cualquier ajuste que necesites a futuro."
  },
  {
    question: "¿Necesito saber de tecnología para trabajar con ustedes?",
    answer: "¡Para nada! Ese es exactamente nuestro trabajo. Solo necesitamos que nos cuentes cómo funciona tu negocio y dónde perdés más tiempo. Nosotros traducimos tus problemas a soluciones tecnológicas intuitivas y muy fáciles de usar para vos y tu equipo."
  },
  {
    question: "¿El sistema puede crecer si mi empresa crece?",
    answer: "Totalmente. Al no usar plantillas cerradas ni herramientas genéricas, construimos sobre arquitecturas escalables. Si el mes que viene necesitás sumar un módulo nuevo de turnos, facturación o stock, lo podemos desarrollar e integrar sin tener que armar todo de cero."
  },
  {
    question: "¿El software es de mi propiedad?",
    answer: "Sí, el producto final es 100% tuyo. Nosotros nos encargamos de diseñarlo, programarlo y dejarlo funcionando en servidores optimizados de alta velocidad, pero vos tenés el control total y la propiedad intelectual del desarrollo."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-soft relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-brand-gray">
            Resolvemos las dudas más comunes antes de empezar a trabajar juntos.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`font-bold transition-colors ${activeIndex === index ? 'text-brand-blue' : 'text-brand-navy group-hover:text-brand-blue'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-brand-gray transition-transform duration-300 flex-shrink-0 ml-4 ${activeIndex === index ? 'rotate-180 text-brand-blue' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-brand-gray leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}