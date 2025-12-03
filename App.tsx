import React, { useState, createContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Shipping } from './pages/Shipping';
import { Product, CartItem, CartContextType } from './types';

// Context creation
export const CartContext = createContext<CartContextType>({} as CartContextType);

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart Logic
  const addToCart = (product: Product, weightLabel: string, weightValue: number, finalPrice: number) => {
    setCart(prev => {
      // Create a unique ID for this cart entry based on timestamp + product ID
      const newCartItem: CartItem = {
        ...product,
        cartId: `${product.id}-${Date.now()}`,
        quantity: 1, // We treat a "250gm pack" as 1 unit in the cart list
        selectedWeightLabel: weightLabel,
        weightValue: weightValue,
        finalPrice: finalPrice
      };
      return [...prev, newCartItem];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.finalPrice, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      cartTotal,
      isCartOpen,
      setIsCartOpen
    }}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
};

export default App;