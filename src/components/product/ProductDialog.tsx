import { Product } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductActions } from './ProductActions';
import { ProductGallery } from './ProductGallery';

interface ProductDialogProps {
  product: Product;
  children: React.ReactNode;
}

export function ProductDialog({ product, children }: ProductDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <ProductGallery images={product.images} />
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-medium">${product.price}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Details</h3>
              <div className="space-y-1">
                {product.details.split('\n').map((detail, index) => (
                  <p key={index} className="text-sm text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Condition</h3>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                {product.condition}
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <ProductActions product={product} variant="detail" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}