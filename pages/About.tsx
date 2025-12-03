import React from 'react';
import { Heart, Users, CheckCircle, Award, Facebook, Instagram, Youtube } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About A K Hot Chips
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500">
            The authentic taste of tradition, now known as the "Street Foodie" channel online.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentic Quality Since Day One</h2>
            <div className="prose text-gray-500 text-lg space-y-4">
              <p>
                Welcome to <strong>A K Hot Chips</strong>. You might know us from our popular YouTube channel <strong>"Street Foodie"</strong>, where we showcase our passion for food.
              </p>
              <p>
                We are committed to delivering the freshest, most authentic South Indian snacks. Unlike mass-produced brands, our chips and namkeens are made in small batches to ensure superior quality.
              </p>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Award className="text-green-600" />
                  Our Quality Promise
                </h3>
                <ul className="space-y-3">
                   <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-green-800"><strong>100% Pure Oil:</strong> We use only premium refined Sunflower and Groundnut oil. No cheap palm oil.</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-green-800"><strong>FSSAI Licensed:</strong> We are a fully licensed food business adhering to strict hygiene and safety standards.</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-green-800"><strong>No Preservatives:</strong> Just natural ingredients and traditional spices.</span>
                   </li>
                </ul>
              </div>

              <p>
                 We offer <strong>customized options</strong> for our customers. When you order from us, you get snacks that taste like they were made just for you in our kitchen.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
               <div className="flex items-center gap-2 text-brand-orange font-semibold">
                  <Heart fill="currentColor" /> Made with Love
               </div>
               <div className="flex items-center gap-2 text-brand-orange font-semibold">
                  <Users fill="currentColor" /> Family Recipe
               </div>
            </div>

            {/* Social Media */}
            <div className="mt-10 border-t pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow "Street Foodie" on Social Media</h3>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@Streetfoodie6399" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  <Youtube size={20} /> YouTube
                </a>
                <a href="https://www.instagram.com/somasai_6399?igsh=MXVhNzE5c3gxZ3NpYw==" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                  <Instagram size={20} /> Instagram
                </a>
                <a href="https://www.facebook.com/share/17vszLM4mc/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <Facebook size={20} /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl sticky top-24">
             <img 
               src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80" 
               alt="Freshly Fried Hot Chips Pile"
               className="w-full h-auto object-cover"
             />
             <div className="bg-brand-dark text-white p-4 text-center">
                <p className="font-bold">A K Hot Chips - Fresh & Loose</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};