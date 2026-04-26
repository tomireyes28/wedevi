import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-soft/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-navy tracking-tighter">
              WE<span className="text-brand-blue">DE</span>VI.
            </Link>
          </div>

          {/* Links de Navegación (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#servicios" className="text-brand-gray hover:text-brand-blue transition-colors font-medium">
              Servicios
            </Link>
            <Link href="#proceso" className="text-brand-gray hover:text-brand-blue transition-colors font-medium">
              Cómo Trabajamos
            </Link>
            <Link href="#casos" className="text-brand-gray hover:text-brand-blue transition-colors font-medium">
              Casos de Uso
            </Link>
            
            {/* CTA */}
            <a 
              href="#contacto" 
              className="bg-brand-blue text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              Agendar Asesoría
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}