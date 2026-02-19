import React from 'react';
import { FACADE_IMAGE_URL, COMPANY_ADDRESS } from '../constants.ts';
import { MapPin, Clock, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-black relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
            <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
            <img 
              src={FACADE_IMAGE_URL} 
              alt="Fachada da Loja" 
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-brand-accent font-bold tracking-wider uppercase mb-2">Nossa Loja</h2>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                MAIS QUE ROUPAS, <br/>
                UM ESTILO DE VIDA.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Localizados no coração da cidade, trazemos o que há de melhor em tecnologia têxtil para seus treinos. 
                Nossa missão é fornecer equipamentos que não apenas vestem, mas potencializam sua performance.
                Venha nos visitar e conhecer nosso espaço.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-dark border border-gray-800">
                <MapPin className="w-8 h-8 text-brand-accent flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Endereço</h4>
                  <p className="text-sm text-gray-400">{COMPANY_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-dark border border-gray-800">
                <Clock className="w-8 h-8 text-brand-accent flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Horário</h4>
                  <p className="text-sm text-gray-400">Seg - Sex: 09:00 - 20:00</p>
                  <p className="text-sm text-gray-400">Sáb: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-brand-accent">
               <Award className="w-5 h-5" />
               <span className="font-medium">Qualidade Premium Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};