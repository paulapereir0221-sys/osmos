import React from 'react';
import { Button } from './Button.tsx';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Gym background" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            SUPERE SEUS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-green-300">
              LIMITES
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Roupas de alta performance para quem leva o treino a sério. Estilo, conforto e durabilidade em cada peça.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#produtos">
              Ver Coleção <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" href="#sobre">
              Conheça a Loja
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};