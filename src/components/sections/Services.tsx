import { LayoutDashboard, Bot, MonitorSmartphone } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Soluciones digitales orientadas a resultados.
          </h2>
          <p className="text-lg text-brand-gray">
            Diseñamos herramientas a medida que se adaptan a la lógica de tu empresa, no al revés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/50">
            <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Sistemas de Gestión a Medida (CRM/ERP)</h3>
            <p className="text-brand-gray leading-relaxed">
              Desarrollamos el panel de control central de tu negocio. Ideal para gestionar turnos, perfiles y flujos de trabajo de forma segura. Tu información centralizada y accesible 24/7.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/50">
            <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6">
              <Bot size={24} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Automatización y Bots Inteligentes</h3>
            <p className="text-brand-gray leading-relaxed">
              Optimizamos tu flujo de atención. Creamos herramientas que responden consultas recurrentes e integran tus canales, liberando a tu equipo para tareas estratégicas.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/50">
            <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6">
              <MonitorSmartphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Webs Corporativas de Alta Conversión</h3>
            <p className="text-brand-gray leading-relaxed">
              Diseñamos tu sucursal digital. Interfaces rápidas, modernas y libres de ruido visual, estructuradas específicamente para captar leads y generar confianza en tu industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}