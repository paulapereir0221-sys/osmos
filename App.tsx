import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { AboutSection } from './components/AboutSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartDrawer } from './components/CartDrawer';
import { MOCK_PRODUCTS } from './constants';
import { Product, CartItem } from './types';
import { Instagram, Facebook, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-accent selection:text-brand-black">
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)} 
        cartItems={cartItems}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
      />

      <main>
        <Hero />
        
        {/* Featured Products */}
        <section id="produtos" className="py-24 bg-brand-dark scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-3">Coleção 2024</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white">DESTAQUES DA SEMANA</h3>
              <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_PRODUCTS.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </section>

        <AboutSection />

        {/* Contact/Footer */}
        <footer id="contato" className="bg-brand-black border-t border-gray-800 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h4 className="text-2xl font-black text-white mb-6">IRON<span className="text-brand-accent">PULSE</span></h4>
                <p className="text-gray-400">
                  Sua jornada fitness começa aqui. Equipamentos de alta performance para quem busca excelência.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Links Rápidos</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-brand-accent transition-colors">Início</a></li>
                  <li><a href="#produtos" className="hover:text-brand-accent transition-colors">Produtos</a></li>
                  <li><a href="#sobre" className="hover:text-brand-accent transition-colors">Sobre Nós</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-brand-dark rounded-full hover:bg-brand-accent hover:text-brand-black transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-brand-dark rounded-full hover:bg-brand-accent hover:text-brand-black transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-brand-dark rounded-full hover:bg-brand-accent hover:text-brand-black transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} IronPulse Fitness. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>

      <FloatingWhatsApp />
    </div>
  );
};

export default App;