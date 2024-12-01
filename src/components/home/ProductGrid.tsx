import { Product } from '@/types';
import { ProductCard } from '@/components/product/ProductCard';
import { useFilters } from '@/hooks/useFilters';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const { category, price, era, condition, searchQuery } = useFilters();
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    const matchesEra = era === 'all' || product.era === era;
    const matchesCondition = condition === 'all' || product.condition === condition;
    const matchesPrice = price === 'all' || 
      (price === 'under100' && product.price < 100) ||
      (price === '100to200' && product.price >= 100 && product.price <= 200) ||
      (price === 'over200' && product.price > 200);

    return matchesSearch && matchesCategory && matchesEra && matchesCondition && matchesPrice;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-mono mb-2">No products found</h2>
        <p className="text-gray-600 font-mono">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}