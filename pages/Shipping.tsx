import React, { useState } from 'react';
import { Truck, MapPin, CheckCircle, AlertCircle, Package } from 'lucide-react';

export const Shipping: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const checkPincode = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Regex for Indian Pincode: 
    // ^[1-9] : First digit 1-9 (cannot be 0)
    // [0-9]{5}$ : Next 5 digits can be 0-9
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    
    // Check for repetitive digits (e.g., 111111, 555555)
    const isRepetitive = /^(\d)\1{5}$/.test(pincode);
    
    // Check for sequential digits (e.g., 123456, 654321)
    const isSequential = "0123456789".includes(pincode) || "9876543210".includes(pincode);

    if (pincodeRegex.test(pincode) && !isRepetitive && !isSequential) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Truck className="mx-auto h-12 w-12 text-brand-orange mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Shipping & Delivery</h1>
          <p className="mt-2 text-gray-500">Trusted delivery via India Post to every village and city.</p>
        </div>

        {/* Pincode Checker */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-10 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Check Availability</h2>
          <form onSubmit={checkPincode} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value.replace(/\D/g, '')); // Only allow digits
                  setStatus('idle');
                }}
                placeholder="Enter your Pincode"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-dark text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Check
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 animate-fade-in">
              <CheckCircle size={18} />
              Yes! India Post service is available for {pincode}.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 animate-fade-in">
              <AlertCircle size={18} />
              Please enter a valid Indian Pincode (e.g., 500001).
            </div>
          )}
        </div>

        {/* Shipping Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
             <div className="flex items-center gap-2 mb-2">
                <Package className="text-brand-orange" size={20} />
                <h3 className="font-bold text-lg">Shipping Partner</h3>
             </div>
             <p className="text-gray-600 text-sm">
                We primarily use <strong>India Post (Speed Post/Parcel)</strong> for maximum reach. This ensures we can deliver to even remote locations across India.
             </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
             <h3 className="font-bold text-lg mb-2">Shipping Charges</h3>
             <p className="text-gray-600 text-sm">
                Charges are based on the total weight of your custom order. 
                <br />
                <span className="text-xs text-gray-400 mt-1 block">Typically ₹40 - ₹80 per Kg depending on the state.</span>
             </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
             <h3 className="font-bold text-lg mb-2">Delivery Time</h3>
             <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                <li>South India: 3-5 Days</li>
                <li>Rest of India: 5-8 Days</li>
                <li>Remote Areas: +1-2 Days</li>
             </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
             <h3 className="font-bold text-lg mb-2">Tracking</h3>
             <p className="text-gray-600 text-sm">
                We share the India Post tracking number on WhatsApp immediately after dispatch.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};