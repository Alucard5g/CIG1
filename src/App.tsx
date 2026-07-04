import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import RedCig from './components/RedCig';
import Alliances from './components/Alliances';
import SupportWidget from './components/SupportWidget';
import CorporateBlog from './components/CorporateBlog';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartItem, Service } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSupportTopic, setSelectedSupportTopic] = useState<string | undefined>(undefined);

  // Initialize cart from localStorage on mount and scroll to top
  useEffect(() => {
    // Disable browser scroll restoration to prevent starting at the bottom on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Scroll immediately
    scrollToTop();
    
    // Multiple intervals/timeouts to override any late-rendering layout shifts or focus steals
    const timer1 = setTimeout(scrollToTop, 50);
    const timer2 = setTimeout(scrollToTop, 150);
    const timer3 = setTimeout(scrollToTop, 300);
    const timer4 = setTimeout(scrollToTop, 600);

    const handleLoad = () => {
      scrollToTop();
      setTimeout(scrollToTop, 100);
    };

    window.addEventListener('load', handleLoad);

    try {
      const stored = localStorage.getItem('cig_ecosystem_cart');
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error parsing cart from localStorage', e);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Save cart to localStorage on changes
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    try {
      localStorage.setItem('cig_ecosystem_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  };

  const handleAddToCart = (service: Service, customRequirements: string, customPrice: number) => {
    const existingIndex = cartItems.findIndex(item => item.service.id === service.id);
    
    if (existingIndex > -1) {
      // Update existing item with new pricing/requirements
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      updated[existingIndex].service.basePrice = customPrice; // Update with latest calculated price
      updated[existingIndex].customRequirements = customRequirements;
      saveCart(updated);
    } else {
      // Add new item
      const newItem: CartItem = {
        service,
        quantity: 1,
        customRequirements
      };
      saveCart([...cartItems, newItem]);
    }
  };

  const handleUpdateQuantity = (serviceId: string, quantity: number) => {
    const updated = cartItems.map(item => {
      if (item.service.id === serviceId) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(updated);
  };

  const handleUpdateRequirements = (serviceId: string, requirements: string) => {
    const updated = cartItems.map(item => {
      if (item.service.id === serviceId) {
        return { ...item, customRequirements: requirements };
      }
      return item;
    });
    saveCart(updated);
  };

  const handleRemoveItem = (serviceId: string) => {
    const filtered = cartItems.filter(item => item.service.id !== serviceId);
    saveCart(filtered);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  // Triggers focus on Support and feeds a topic
  const handleOpenSupportWithTopic = (topic: string) => {
    setSelectedSupportTopic(topic);
    const element = document.getElementById('soporte');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Clear topic after a brief delay so clicking again triggers it
    setTimeout(() => {
      setSelectedSupportTopic(undefined);
    }, 1000);
  };

  const handleScrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSupportSection = () => {
    const element = document.getElementById('soporte');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-deep-dark flex flex-col justify-between selection:bg-neon-cyan/30 selection:text-white relative">
      <div className="mesh-bg"></div>
      <div className="mesh-lines"></div>
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSupport={handleOpenSupportSection}
      />

      {/* 2. Main High-Tech Sections */}
      <main className="flex-grow">
        <Hero 
          onExploreServices={handleScrollToServices}
          onOpenSupport={handleOpenSupportSection}
        />
        
        <ServicesGrid 
          onAddToCart={handleAddToCart}
          onOpenSupportWithTopic={handleOpenSupportWithTopic}
        />
        
        <RedCig />
        
        <Alliances />
        
        <SupportWidget 
          initialTopic={selectedSupportTopic}
        />
        
        <CorporateBlog />
      </main>

      {/* 3. Footer and Contact Section */}
      <Footer 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSupport={handleOpenSupportSection}
      />

      {/* 4. Sliding E-Commerce Modular Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onUpdateRequirements={handleUpdateRequirements}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
