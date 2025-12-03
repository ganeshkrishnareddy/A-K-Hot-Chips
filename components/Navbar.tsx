import React, { useContext, useState } from 'react';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../App';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { cart, setIsCartOpen } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path ? 'text-brand-orange font-bold' : 'text-gray-700 hover:text-brand-orange';

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <Logo className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-brand-dark tracking-tight">A K Hot Chips</h1>
              <p className="text-[10px] md:text-xs text-brand-orange uppercase tracking-wider font-semibold">Authentic Crunch</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/shop" className={isActive('/shop')}>Shop Menu</Link>
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            <Link to="/shipping" className={isActive('/shipping')}>Shipping</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/919502701115" 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow"
            >
              <Phone size={16} />
              <span>Enquire Now</span>
            </a>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-brand-orange transition-colors"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-brand-orange">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 rounded-md">Home</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 rounded-md">Shop Menu</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 rounded-md">About Us</Link>
            <Link to="/shipping" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 rounded-md">Shipping</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 rounded-md">Contact</Link>
            <a href="https://wa.me/919502701115" className="block w-full text-center mt-4 bg-green-500 text-white py-3 rounded-lg font-semibold shadow">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};