import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNewsletter } from '@/hooks/useNewsletter';

export function Footer() {
  const { subscribe, isLoading } = useNewsletter();

  return (
    <footer className="bg-black text-white py-16 splash-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="graffiti-text text-2xl mb-4">About</h3>
            <p className="font-mono text-gray-400">
              Curated vintage clothing store in Newtown, Sydney.
            </p>
          </div>
          <div>
            <h3 className="graffiti-text text-2xl mb-4">Contact</h3>
            <p className="font-mono text-gray-400">
              123 King Street<br />
              Newtown, Sydney
            </p>
          </div>
          <div>
            <h3 className="graffiti-text text-2xl mb-4">Follow</h3>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 cursor-pointer hover:text-gray-300 transition-transform hover:scale-110" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-gray-300 transition-transform hover:scale-110" />
              <Facebook className="h-6 w-6 cursor-pointer hover:text-gray-300 transition-transform hover:scale-110" />
            </div>
          </div>
          <div>
            <h3 className="graffiti-text text-2xl mb-4">Newsletter</h3>
            <form onSubmit={subscribe} className="flex">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border-white/20 font-mono"
                required
              />
              <Button 
                type="submit" 
                className="ml-2 bg-white text-black hover:bg-gray-100 graffiti-border"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}