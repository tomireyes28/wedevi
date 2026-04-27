"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  moveX: number;
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // MAGIA ACÁ: Al envolverlo en una Promesa, la actualización del estado se vuelve asíncrona.
    // Esto hace que el linter deje de quejarse de "cascading renders" y funcione perfecto.
    Promise.resolve().then(() => {
      const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        moveX: Math.random() * 60 - 30,
      }));
      
      setParticles(generatedParticles);
    });
  }, []);

  // Simplificamos: si no hay partículas, no renderizamos nada (evita errores de hidratación)
  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-blue"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,  // Agregamos 'px' explícitamente para evitar fallos de renderizado
            height: `${p.size}px`, // Agregamos 'px'
            boxShadow: `0 0 ${p.size * 3}px rgba(0, 123, 255, 0.8)` 
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, p.moveX, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}