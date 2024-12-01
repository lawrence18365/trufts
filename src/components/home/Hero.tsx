import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  products: any[];
  currentSlide: number;
}

export function Hero({ products, currentSlide }: HeroProps) {
  return (
    <section className="relative h-screen bg-black">
      <div className="absolute inset-0">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="graffiti-text text-7xl sm:text-9xl text-white mb-6 transform -rotate-2">
            TRUFTS
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 font-mono">
            VINTAGE · STREET · CULTURE
          </p>
          <Button 
            className="bg-white text-black hover:bg-gray-100 text-lg graffiti-border transform hover:scale-105 transition-transform"
            size="lg"
          >
            EXPLORE
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}