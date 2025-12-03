import React, { useContext, useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Scale, Tag } from 'lucide-react';
import { Product } from '../types';
import { CartContext } from '../App';
import { WHATSAPP_NUMBER } from '../constants';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  
  // State for weight selection
  const [weightOption, setWeightOption] = useState<'250g' | '500g' | '1kg' | 'custom'>('250g');
  const [customWeight, setCustomWeight] = useState<string>(''); // in KG
  const [quantity, setQuantity] = useState<number>(1); // For non-kg items
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);

  const isKgItem = product.unit === 'kg';

  // Calculate price whenever dependencies change
  useEffect(() => {
    if (isKgItem) {
      switch (weightOption) {
        case '250g':
          setCalculatedPrice(product.price * 0.25);
          break;
        case '500g':
          setCalculatedPrice(product.price * 0.50);
          break;
        case '1kg':
          setCalculatedPrice(product.price);
          break;
        case 'custom':
          const weight = parseFloat(customWeight);
          setCalculatedPrice(isNaN(weight) ? 0 : product.price * weight);
          break;
      }
    } else {
      setCalculatedPrice(product.price * quantity);
    }
  }, [weightOption, customWeight, quantity, product.price, isKgItem]);

  const handleAddToCart = () => {
    if (calculatedPrice <= 0) return;

    let weightLabel = '';
    let weightVal = 0;

    if (isKgItem) {
      if (weightOption === 'custom') {
        weightLabel = `Custom: ${customWeight} kg`;
        weightVal = parseFloat(customWeight);
      } else {
        weightLabel = weightOption;
        weightVal = weightOption === '250g' ? 0.25 : weightOption === '500g' ? 0.5 : 1.0;
      }
    } else {
      weightLabel = `${quantity} ${product.unit}(s)`;
      weightVal = quantity;
    }

    addToCart(product, weightLabel, weightVal, calculatedPrice);
  };

  const directOrder = () => {
    if (calculatedPrice <= 0) return;
    
    let desc = '';
    if (isKgItem) {
      desc = weightOption === 'custom' ? `${customWeight} kg` : weightOption;
    } else {
      desc = `${quantity} ${product.unit}`;
    }

    const text = `Hello A K Hot Chips, I have an enquiry for ${product.name} - ${desc}. Estimated Price: ₹${calculatedPrice.toFixed(0)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900 leading-tight">{product.name}</h3>
        {product.popular && (
          <span className="flex-shrink-0 bg-brand-yellow/20 text-brand-dark text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            Bestseller
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">
          {product.category}
        </span>
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <Tag size={12} /> Rate: ₹{product.price}/{product.unit}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-2">
        {product.description}
      </p>

      {/* Weight / Quantity Selection */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        {isKgItem ? (
          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <Scale size={14} /> Select Weight
            </p>
            <div className="grid grid-cols-4 gap-2">
              {(['250g', '500g', '1kg'] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setWeightOption(opt)}
                  className={`text-xs sm:text-sm py-1.5 rounded-md font-medium transition-colors border ${
                    weightOption === opt
                      ? 'bg-brand-orange text-white border-brand-orange'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-brand-orange'
                  }`}
                >
                  {opt}
                </button>
              ))}
              <button
                onClick={() => setWeightOption('custom')}
                className={`text-xs sm:text-sm py-1.5 rounded-md font-medium transition-colors border ${
                  weightOption === 'custom'
                    ? 'bg-brand-orange text-white border-brand-orange'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-brand-orange'
                }`}
              >
                Custom
              </button>
            </div>

            {weightOption === 'custom' && (
              <div className="flex items-center gap-2 mt-2 animate-fade-in">
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  placeholder="Enter KG (e.g. 2.5)"
                  value={customWeight}
                  onChange={(e) => setCustomWeight(e.target.value)}
                  className="w-full text-sm p-2 border border-gray-300 rounded focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none"
                />
                <span className="text-sm text-gray-500 font-medium">kg</span>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
             <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</p>
             <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="font-bold w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
                <span className="text-sm text-gray-500 ml-2">{product.unit}s</span>
             </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-end">
          <span className="text-sm text-gray-500">Total Price</span>
          <span className="text-xl font-bold text-gray-900">
            ₹{calculatedPrice > 0 ? calculatedPrice.toFixed(0) : '0'}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-5 gap-2 mt-auto">
        <button 
          onClick={handleAddToCart}
          disabled={calculatedPrice <= 0}
          className="col-span-3 bg-brand-dark hover:bg-gray-800 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingBag size={18} />
          Add to Cart
        </button>
        <button 
          onClick={directOrder}
          disabled={calculatedPrice <= 0}
          className="col-span-2 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Direct Enquiry"
        >
          <MessageCircle size={18} />
          Chat
        </button>
      </div>
    </div>
  );
};