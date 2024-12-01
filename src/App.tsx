import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { ProductGrid } from './components/home/ProductGrid';
import { FilterBar } from './components/filters/FilterBar';
import { products } from './lib/data';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="pt-16">
        <Hero products={products} currentSlide={currentSlide} />
        <section className="max-w-7xl mx-auto px-4 py-16">
          <FilterBar />
          <div className="mt-8">
            <ProductGrid products={products} />
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;