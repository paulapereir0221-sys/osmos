import React, { useMemo } from 'react';
import { CartItem } from '../types.ts';
import { Button } from './Button.tsx';
import { WHATSAPP_NUMBER } from '../constants.ts';
import { X, Trash2, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `Olá! Gostaria de finalizar meu pedido no site:\n\n`;
    cartItems.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - R$ ${item.price.toFixed(2)}\n`;
    });
    message += `\n*Total: R$ ${total.toFixed(2)}*`;
    message += `\n\nAguardo instruções para pagamento e entrega!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className={`fixed inset-0 z-50 transform ease-in-out transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
      <div 
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={onClose}
      />

      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-brand-dark shadow-2xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-accent" />
              Seu Carrinho
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                <p>Seu carrinho está vazio.</p>
                <Button variant="outline" className="mt-4" onClick={onClose}>
                  Continuar comprando
                </Button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex gap-4 bg-brand-black p-3 rounded-lg border border-gray-800">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-400">Qtd: {item.quantity}</p>
                    <p className="text-brand-accent font-bold mt-1">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors p-2 self-start"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-4 bg-brand-black border-t border-gray-800">
              <div className="flex justify-between items-center mb-4 text-white">
                <span className="text-gray-400">Total</span>
                <span className="text-2xl font-bold text-brand-accent">R$ {total.toFixed(2)}</span>
              </div>
              <Button fullWidth onClick={handleCheckout}>
                Finalizar no WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};