import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Filter, Search, X } from 'lucide-react';

export const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const categories = ['All', 'Snacks', 'Chips', 'Sweets', 'Special'];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Menu</h1>
          <p className="mt-2 text-gray-500">Authentic South Indian delights, fresh from the kitchen.</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-6 mb-8">
          
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange sm:text-sm shadow-sm transition-all"
              placeholder="Search for chips, murukku, sweets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-b border-gray-200 py-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
              <span className="text-gray-500 flex items-center gap-1 font-medium"><Filter size={16} /> Filter:</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap border ${
                    activeCategory === cat 
                      ? 'bg-brand-orange text-white border-brand-orange shadow-sm' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-gray-500 text-sm font-medium whitespace-nowrap">
              Showing {filteredProducts.length} items
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
               <Search className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-2 text-gray-500">We couldn't find any products matching "{searchQuery}" in {activeCategory}.</p>
            <button 
               onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
               className="mt-6 text-brand-orange font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};