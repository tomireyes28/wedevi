import { Clock, MessageSquare, MonitorX } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problema" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            ¿Tu negocio está frenado por la tecnología que usás?
          </h2>
          <p className="text-lg text-brand-gray">
            La mayoría de las empresas pierden dinero y tiempo intentando adaptar sus procesos a herramientas genéricas que no fueron hechas para ellos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Columna 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Procesos Manuales Lentos</h3>
            <p className="text-brand-gray leading-relaxed">
              Tu equipo pierde horas valiosas cargando datos en planillas de Excel interminables y desconectadas.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Atención Desbordada</h3>
            <p className="text-brand-gray leading-relaxed">
              Perdés ventas o clientes porque no podés responder consultas repetitivas a tiempo en tus canales.
            </p>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-gray-100 text-gray-500 rounded-2xl flex items-center justify-center mb-6">
              <MonitorX size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Presencia Digital Pobre</h3>
            <p className="text-brand-gray leading-relaxed">
              Tu web actual está desactualizada, es lenta y no refleja la calidad real de los servicios que ofrecés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}