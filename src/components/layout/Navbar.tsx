import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from '@/hooks/useCart';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-50 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-sm hover:underline">Shop</a>
              <a href="#" className="text-sm hover:underline">Collections</a>
              <a href="#" className="text-sm hover:underline">Editorial</a>
            </div>
          </div>

          <h1 className="text-2xl font-light tracking-widest">TRUFTS</h1>

          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-64"
              />
            </div>
            <User className="h-5 w-5 cursor-pointer hover:text-gray-600" />
            <Heart className="h-5 w-5 cursor-pointer hover:text-gray-600" />
            
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative">
                  <ShoppingCart className="h-5 w-5 hover:text-gray-600" />
                  {items.length > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0"
                    >
                      {items.length}
                    </Badge>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col h-full">
                  <div className="flex-1 overflow-auto">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.selectedSize}`} className="flex py-4 border-b">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-24 h-32 object-cover"
                        />
                        <div className="ml-4 flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                          <div className="flex items-center mt-2">
                            <button
                              className="w-6 h-6 border rounded-full"
                              onClick={() => updateQuantity(item.id, item.selectedSize, Math.max(0, item.quantity - 1))}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              className="w-6 h-6 border rounded-full"
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <p className="font-medium mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                          <button
                            className="text-sm text-red-600 mt-2"
                            onClick={() => removeItem(item.id, item.selectedSize)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {items.length > 0 ? (
                    <div className="border-t pt-4 mt-auto">
                      <div className="flex justify-between text-lg font-medium mb-4">
                        <span>Total</span>
                        <span>${total().toFixed(2)}</span>
                      </div>
                      <Button className="w-full bg-black text-white">
                        Checkout
                      </Button>
                    </div>
                  ) : (
                    <p className="text-center py-4">Your cart is empty</p>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}