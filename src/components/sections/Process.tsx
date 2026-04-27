import { Search, Code2, Rocket } from 'lucide-react';

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

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Un proceso claro, resultados predecibles.
          </h2>
        </div>

        <div className="relative">
          {/* Línea conectora (solo desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-brand-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}