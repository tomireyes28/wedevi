import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Cases from "@/components/sections/Cases";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

export default function Home() {
  return (
    // Agregamos relative para asegurar el contexto de z-index
    <main className="min-h-screen relative">
      
      {/* Nuestro nuevo ambiente 3D */}
      <ParticlesBackground />
      
      {/* Contenido (Navbar ahora tiene z-50 y las secciones z-10 en su interior, así que estarán por delante) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Cases />
        <Features />
      </div>
      
      <Footer />
    </main>
  );
}