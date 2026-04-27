import { Zap, Paintbrush, Compass } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Tecnología de punta, hablada en tu idioma.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-brand-blue" size={24} />
              <h3 className="text-xl font-bold text-brand-navy">Velocidad y Rendimiento</h3>
            </div>
            <p className="text-brand-gray leading-relaxed">
              Tus plataformas cargarán al instante, evitando que los usuarios se frustren y abandonen. Construimos sobre arquitecturas modernas que escalan con vos.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Paintbrush className="text-brand-blue" size={24} />
              <h3 className="text-xl font-bold text-brand-navy">Diseño Centrado en el Usuario</h3>
            </div>
            <p className="text-brand-gray leading-relaxed">
              Interfaces intuitivas y estéticas. Nos obsesionan los diseños pulidos, profesionales y libres de ruido visual para que tu marca destaque.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-brand-blue" size={24} />
              <h3 className="text-xl font-bold text-brand-navy">Acompañamiento Estratégico</h3>
            </div>
            <p className="text-brand-gray leading-relaxed">
              No solo programamos; entendemos tu modelo de negocio y te sugerimos la mejor ruta para que la herramienta realmente genere retorno de inversión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}