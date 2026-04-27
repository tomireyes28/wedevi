export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-navy pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Mensaje Final */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
              ¿Listo para llevar la operativa de tu negocio al siguiente nivel?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Dejanos tus datos o agendá una llamada rápida de 15 minutos. Sin compromisos, solo hablamos de cómo la tecnología puede ayudarte.
            </p>
            <div className="text-2xl font-bold tracking-tighter">
              WE<span className="text-brand-blue">DE</span>VI.
            </div>
          </div>

          {/* Formulario (Preparado para Formspree o similar) */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <form action="ACA_IRA_TU_LINK_DE_FORMSPREE" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Tu Nombre o Empresa" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="Correo electrónico" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  placeholder="¿Qué proceso te gustaría mejorar en tu negocio? (Opcional)" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-blue-600 text-white font-medium py-3.5 rounded-xl transition-colors shadow-lg shadow-brand-blue/20"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Wedevi Solutions. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Links legales o redes sociales a futuro */}
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}