import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">A K Hot Chips</h2>
            <p className="text-gray-400 text-sm">
              Authentic customized hot chips and South Indian snacks delivered fresh to your doorstep. No preservatives, just pure home-style taste.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white">Shop Menu</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white">Track Order</Link></li>
              <li><Link to="/contact" className="hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-white">Bulk Custom Orders</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/somasai_6399?igsh=MXVhNzE5c3gxZ3NpYw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/17vszLM4mc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.youtube.com/@Streetfoodie6399" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="YouTube">
                <Youtube size={24} />
              </a>
            </div>
            <div className="mt-6">
               <p className="text-sm text-gray-400 mb-2">Enquire via Phone</p>
               <p className="text-lg font-bold">+91 9502701115</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} A K Hot Chips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};