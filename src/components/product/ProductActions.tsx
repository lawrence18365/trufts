import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { Product } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

interface ProductActionsProps {
  product: Product;
  variant?: 'card' | 'detail';
}

export function ProductActions({ product, variant = 'card' }: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addItem(product, selectedSize);
    toast.success('Added to cart');
  };

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className={`space-y-4 ${variant === 'detail' ? 'flex gap-4 space-y-0' : ''}`}>
      <Select value={selectedSize} onValueChange={setSelectedSize}>
        <SelectTrigger className={variant === 'card' ? 'w-32 bg-white' : 'w-40'}>
          <SelectValue placeholder="Select size" />
        </SelectTrigger>
        <SelectContent>
          {product.sizes.map((size) => (
            <SelectItem key={size} value={size}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Button 
        className={variant === 'card' ? 'w-32 bg-white text-black hover:bg-gray-100' : 'flex-1'}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className={`hover:text-red-500 ${isWishlisted ? 'text-red-500' : ''}`}
        onClick={() => toggleItem(product.id)}
      >
        <Heart className="h-5 w-5" fill={isWishlisted ? 'currentColor' : 'none'} />
      </Button>
    </div>
  );
}