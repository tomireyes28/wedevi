import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6">
              <Zap size={16} />
              Transformación Digital para Empresas
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] mb-6 tracking-tight">
              Software a medida para negocios que quieren <span className="text-brand-blue">crecer sin cuellos de botella.</span>
            </h1>
            
            <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-xl">
              Diseñamos y desarrollamos plataformas de gestión, automatizaciones y webs profesionales. Dejá de adaptar tu negocio a herramientas genéricas; nosotros creamos la herramienta exacta que tu negocio necesita.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="inline-flex justify-center items-center gap-2 bg-brand-blue text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-600 transition-all shadow-sm hover:shadow-md"
              >
                Contanos tu desafío
              </a>
              <a 
                href="#casos" 
                className="inline-flex justify-center items-center gap-2 bg-white text-brand-navy border border-gray-200 px-8 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-all"
              >
                Ver nuestro trabajo
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Columna Visual (Placeholder para el mockup) */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-linear-to-tr from-brand-blue/5 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100">
              <div className="bg-brand-soft rounded-xl h-100 w-full flex items-center justify-center border border-gray-100 text-brand-gray text-sm">
                [ Acá irá la imagen/mockup de tus proyectos ]
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}