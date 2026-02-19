export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Masculino' | 'Feminino' | 'Acessórios';
  image: string;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SectionProps {
  id?: string;
  className?: string;
}