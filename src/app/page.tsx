import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Cases from "@/components/sections/Cases";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import WhatsAppButton from "@/components/ui/WhatsAppButton"; // <-- 1. Importar

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Cases />
        <Features />
      </div>
      
      <WhatsAppButton /> 
      <Footer />
    </main>
  );
}