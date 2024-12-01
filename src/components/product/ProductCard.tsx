import { Product } from '@/types';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { ProductActions } from './ProductActions';
import { ProductDialog } from './ProductDialog';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ProductDialog product={product}>
      <Card 
        className="group relative border-2 border-black overflow-hidden cursor-pointer transform hover:-rotate-1 transition-transform duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
            />
            <div 
              className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ProductActions product={product} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4 bg-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="graffiti-text text-xl">{product.name}</h3>
              <p className="font-mono text-lg">${product.price}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1 font-mono">{product.description}</p>
          <div className="flex gap-2 mt-2">
            {product.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-2 py-1 border border-black font-mono uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </ProductDialog>
  );
}