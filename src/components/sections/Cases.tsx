export default function Cases() {
  return (
    <section id="casos" className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Experiencias que impulsan negocios.
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl">
            Proyectos diseñados para resolver problemas específicos con tecnología moderna.
          </p>
        </div>

        <div className="space-y-24">
          {/* Caso 1: Gestión Salud */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Gestión Profesional</span>
              <h3 className="text-2xl font-bold text-brand-navy mt-2 mb-4">Plataformas de Gestión Médica</h3>
              <div className="space-y-4 text-brand-gray">
                <p><strong>El desafío:</strong> Organizar la información de pacientes y turnos de forma privada y eficiente para profesionales independientes.</p>
                <p><strong>La solución:</strong> Un portal seguro con roles de usuario, agenda integrada y carga de datos ágil. Todo bajo una interfaz limpia que reduce la carga cognitiva.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
               <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                  [ Mockup Sistema de Gestión ]
               </div>
            </div>
          </div>

          {/* Caso 2: Web Corporativa */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
               <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                  [ Mockup Landing Alta Conversión ]
               </div>
            </div>
            <div>
              <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Presencia Digital</span>
              <h3 className="text-2xl font-bold text-brand-navy mt-2 mb-4">Soluciones para Rubros Tradicionales</h3>
              <div className="space-y-4 text-brand-gray">
                <p><strong>El desafío:</strong> Modernizar la imagen de empresas de instalaciones y servicios para captar clientes corporativos de alto valor.</p>
                <p><strong>La solución:</strong> Una landing page ultrarrápida, con catálogo visual optimizado y sistema de contacto directo que elimina la fricción en la venta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}