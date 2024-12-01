import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, X } from 'lucide-react';

export function FilterBar() {
  const { category, price, era, condition, searchQuery, setFilter, resetFilters } = useFilters();

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-black py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4">
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setFilter('searchQuery', e.target.value)}
            className="max-w-xs font-mono"
          />

          <Select value={category} onValueChange={(value) => setFilter('category', value)}>
            <SelectTrigger className="w-[180px] font-mono">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="outerwear">Outerwear</SelectItem>
              <SelectItem value="tops">Tops</SelectItem>
              <SelectItem value="bottoms">Bottoms</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>

          <Select value={price} onValueChange={(value) => setFilter('price', value)}>
            <SelectTrigger className="w-[180px] font-mono">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="under100">Under $100</SelectItem>
              <SelectItem value="100to200">$100 - $200</SelectItem>
              <SelectItem value="over200">Over $200</SelectItem>
            </SelectContent>
          </Select>

          <Select value={era} onValueChange={(value) => setFilter('era', value)}>
            <SelectTrigger className="w-[180px] font-mono">
              <SelectValue placeholder="Era" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Eras</SelectItem>
              <SelectItem value="1970s">1970s</SelectItem>
              <SelectItem value="1980s">1980s</SelectItem>
              <SelectItem value="1990s">1990s</SelectItem>
            </SelectContent>
          </Select>

          <Select value={condition} onValueChange={(value) => setFilter('condition', value)}>
            <SelectTrigger className="w-[180px] font-mono">
              <SelectValue placeholder="Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Conditions</SelectItem>
              <SelectItem value="10/10">10/10</SelectItem>
              <SelectItem value="9/10">9/10</SelectItem>
              <SelectItem value="8/10">8/10</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="font-mono"
            onClick={resetFilters}
          >
            <X className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}