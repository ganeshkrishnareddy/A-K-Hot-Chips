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
import { Check } from 'lucide-react';

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

// Toast notification component
const Toast: React.FC<{ message: string; isVisible: boolean }> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[100] animate-fade-in">
      <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium">
        <Check size={16} />
        {message}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

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
    // Show toast notification instead of opening cart
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
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
          <Toast message={toastMessage} isVisible={showToast} />
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