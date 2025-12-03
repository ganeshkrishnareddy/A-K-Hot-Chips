import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Clock, Settings, Star, Quote } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

const TESTIMONIALS = [
  { name: "Priya R., Bangalore", text: "A K Hot Chips really delivers on the custom spice promise. The chili chips were perfect!", rating: 5 },
  { name: "Amit K., Delhi", text: "Ordered the Chili Chips and Garlic Mixture. Delivery to Delhi was smooth. Packaging was excellent.", rating: 5 },
  { name: "Suresh M., Hyderabad", text: "Finally found a place that sells authentic Godhuma Gavalu. Will order monthly!", rating: 5 },
  { name: "Sneha P., Mumbai", text: "The Banana Chips are so thin and crispy. Reminds me of my Kerala trip.", rating: 5 },
  { name: "Rahul V., Chennai", text: "Best place for authentic Murukku. The garlic flavor is spot on!", rating: 5 },
  { name: "Anjali S., Pune", text: "My kids loved the sweet shells (Gavalu). Very fresh and tasty.", rating: 5 },
  { name: "Vikram S., Vizag", text: "Super fast delivery and the chips were still crunchy. Highly recommended.", rating: 5 },
  { name: "Karthik J., Coimbatore", text: "The mixture is perfect for tea time. Not too oily, just right.", rating: 5 },
  { name: "Meera N., Mysore", text: "Authentic homemade taste. The Nuvvulu Chakodi is my favorite.", rating: 5 },
  { name: "Rohan D., Hyderabad", text: "Bulk ordered for a family function. Everyone asked where the chips were from!", rating: 5 },
];

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.popular).slice(0, 4);

  return (
    <div className="space-y-16 pb-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-brand-light sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">A K Hot Chips</span>{' '}
                  <span className="block text-brand-orange xl:inline">Customized & Authentic</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We specialize in customized hot chips and authentic namkeens. Freshly prepared, seasoned to your taste, and delivered pan-India.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/shop"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-700 md:py-4 md:text-lg"
                    >
                      View Menu
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-orange bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg"
                    >
                      Enquire Custom Order
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=1950&q=80"
            alt="Spicy Hot Chips"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-3 bg-red-100 text-red-600 rounded-full mb-4">
              <Settings size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Customized Chips</h3>
            <p className="mt-2 text-gray-500">We customize spice levels and ingredients for bulk orders.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-3 bg-green-100 text-green-600 rounded-full mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">100% Authentic</h3>
            <p className="mt-2 text-gray-500">Traditional recipes made with fresh oil and no preservatives.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
              <Truck size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Pan-India Delivery</h3>
            <p className="mt-2 text-gray-500">We ship your favorite snacks to every corner of India.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-4">
              <Clock size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Fast Dispatch</h3>
            <p className="mt-2 text-gray-500">Orders are packed hygienically and dispatched swiftly.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Bestsellers</h2>
            <p className="mt-2 text-gray-500">Customer favorites you must try</p>
          </div>
          <Link to="/shop" className="hidden sm:flex items-center text-brand-orange font-semibold hover:underline">
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link to="/shop" className="text-brand-orange font-semibold hover:underline">
            View All Products &rarr;
          </Link>
        </div>
      </section>

      {/* Sliding Testimonials */}
      <section className="bg-brand-orange py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
           <h2 className="text-3xl font-bold text-white mb-2">Customer Love</h2>
           <p className="text-orange-100">Join 1000+ happy snackers across India</p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative w-full">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {/* First Set of Testimonials */}
            <div className="flex gap-6 px-4">
              {TESTIMONIALS.map((t, i) => (
                <div key={`t1-${i}`} className="bg-white p-6 rounded-xl shadow-lg w-80 flex-shrink-0 flex flex-col">
                  <div className="text-brand-orange mb-4"><Quote size={32} className="opacity-20" /></div>
                  <p className="text-gray-700 italic mb-4 flex-grow">"{t.text}"</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <div className="flex text-yellow-400 text-xs mt-1">
                        {[...Array(t.rating)].map((_, r) => <Star key={r} size={12} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-6 px-4">
              {TESTIMONIALS.map((t, i) => (
                <div key={`t2-${i}`} className="bg-white p-6 rounded-xl shadow-lg w-80 flex-shrink-0 flex flex-col">
                  <div className="text-brand-orange mb-4"><Quote size={32} className="opacity-20" /></div>
                  <p className="text-gray-700 italic mb-4 flex-grow">"{t.text}"</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <div className="flex text-yellow-400 text-xs mt-1">
                         {[...Array(t.rating)].map((_, r) => <Star key={r} size={12} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            will-change: transform;
          }
        `}</style>
      </section>
    </div>
  );
};