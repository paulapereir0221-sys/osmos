import React from 'react';
import { Product } from '../types';
import { Button } from './Button';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-brand-dark rounded-xl overflow-hidden border border-gray-800 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-brand-accent/10">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-4 right-4 bg-brand-accent text-brand-black text-xs font-bold px-2 py-1 rounded-sm">
            NOVO
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
          <Button 
            fullWidth 
            onClick={() => onAddToCart(product)}
            className="text-sm py-2"
          >
            <Plus className="w-4 h-4 mr-1" /> Adicionar
          </Button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-brand-accent font-semibold uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-300">R$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};