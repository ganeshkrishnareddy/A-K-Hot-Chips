import React, { useContext } from 'react';
import { X, Trash2, MessageCircle, Plus } from 'lucide-react';
import { CartContext } from '../App';
import { WHATSAPP_NUMBER, PARTNER_PRODUCTS } from '../constants';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    cartTotal,
    addToCart
  } = useContext(CartContext);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    let message = "Hello A K Hot Chips! I have an enquiry about the following items:%0a%0a";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} | ${item.selectedWeightLabel} | ₹${item.finalPrice.toFixed(0)}%0a`;
    });

    message += `%0a*Total Estimated Amount: ₹${cartTotal.toFixed(0)}*`;
    message += "%0a%0aPlease confirm availability and shipping charges (India Post).";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
  };

  const handleQuickAdd = (product: typeof PARTNER_PRODUCTS[0]) => {
    // For sachets, add 1 sachet at ₹10
    addToCart(product, '1 Sachet', 1, product.price);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition-transform bg-white shadow-xl flex flex-col h-full">

          {/* Header */}
          <div className="px-6 py-4 bg-brand-orange text-white flex justify-between items-center shadow-sm">
            <h2 className="text-lg font-semibold">Your Enquiry Cart ({cart.length})</h2>
            <button onClick={() => setIsCartOpen(false)} className="p-1 hover:bg-orange-600 rounded-full">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  <MessageCircle size={40} />
                </div>
                <p className="text-lg">Your cart is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-brand-orange font-semibold hover:underline"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <ul className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <li key={item.cartId} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-brand-orange font-medium mt-1">
                            {item.selectedWeightLabel}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Rate: ₹{item.price}/{item.unit}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">₹{item.finalPrice.toFixed(0)}</p>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-gray-400 hover:text-red-500 mt-2 p-1"
                            title="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Quick Add - 360 Clean Products */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <Plus size={16} className="text-blue-600" />
                    Quick Add: 360 Clean (₹10/sachet)
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {PARTNER_PRODUCTS.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleQuickAdd(product)}
                        className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors text-left"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-600">₹10/sachet</p>
                        </div>
                        <Plus size={18} className="text-blue-600" />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-6 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
              <div className="flex justify-between text-base font-bold text-gray-900 mb-2">
                <p>Total Estimated</p>
                <p>₹{cartTotal.toFixed(0)}</p>
              </div>
              <p className="text-xs text-gray-500 mb-6 flex items-center gap-1">
                * Shipping via India Post (Calculated on WhatsApp)
              </p>
              <button
                onClick={handleCheckout}
                className="flex items-center justify-center w-full rounded-lg border border-transparent bg-green-600 px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-green-700 transition-all duration-200 gap-2"
              >
                <MessageCircle size={20} />
                Send Enquiry on WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};