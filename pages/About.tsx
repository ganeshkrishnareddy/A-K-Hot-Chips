import React, { useState } from 'react';
import { Heart, Users, CheckCircle, Award, Facebook, Instagram, Youtube, HelpCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQS = [
  { question: "Do you deliver all over India?", answer: "Yes! We use India Post to ensure delivery to every corner of India, including remote villages and major cities." },
  { question: "Are the snacks fresh?", answer: "Absolutely. We prepare our snacks in small batches daily using fresh oil. We do not use any preservatives or artificial chemicals." },
  { question: "How can I customize my order?", answer: "We specialize in customization! You can choose specific weights on the website, or contact us on WhatsApp to adjust spice levels for bulk orders." },
  { question: "What is the shelf life?", answer: "Since we don't use preservatives, we recommend consuming chips within 20 days and harder snacks like Murukku within 30 days." },
  { question: "How do I pay?", answer: "Once you send your enquiry via WhatsApp, we will share a UPI payment link (GPay/PhonePe). Your order is confirmed after payment." },
  { question: "Is there a minimum order value?", answer: "No, there is no minimum order value. However, shipping costs are more economical when you order in larger quantities (e.g., 1kg or more)." },
  { question: "Do you accept returns?", answer: "Due to the perishable nature of food products, we do not accept returns. However, if the package is damaged during transit, please share a photo on WhatsApp, and we will resolve it." },
];

const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen 
          ? 'bg-white shadow-lg ring-1 ring-brand-orange border-brand-orange' 
          : 'bg-white border-gray-100 shadow-sm hover:border-brand-orange/50 hover:shadow-md'
      }`}
    >
      <button 
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${isOpen ? 'bg-brand-orange text-white' : 'bg-orange-100 text-brand-orange'}`}>
                {index + 1}
            </span>
            <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-orange' : 'text-gray-900'}`}>
              {question}
            </span>
        </div>
        
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-orange' : 'text-gray-400 group-hover:text-brand-orange'}`}>
            <ChevronDown size={24} />
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pl-[4.5rem] text-gray-600 leading-relaxed border-t border-dashed border-gray-100 pt-4 mx-6 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

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

      {/* FAQs Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-orange-100 text-brand-orange rounded-full mb-4">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-gray-500 text-lg">Everything you need to know about our products and delivery.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Still have questions? <Link to="/contact" className="text-brand-orange font-bold hover:underline">Contact us</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};