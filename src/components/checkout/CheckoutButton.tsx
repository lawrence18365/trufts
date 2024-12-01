import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { createCheckoutSession } from '@/lib/stripe';
import { useState } from 'react';
import { toast } from 'sonner';

export function CheckoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { items, total } = useCart();

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsLoading(true);
    try {
      await createCheckoutSession(items);
    } catch (error) {
      toast.error('Checkout failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading || items.length === 0}
      className="w-full bg-black text-white hover:bg-gray-800"
    >
      {isLoading ? 'Processing...' : `Checkout • $${total().toFixed(2)}`}
    </Button>
  );
}