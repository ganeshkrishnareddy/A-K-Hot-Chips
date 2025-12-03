import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-500">
            Have a question about bulk orders or customizations?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-brand-light p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-orange">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-lg font-bold text-gray-900">+91 9502701115</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-orange">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                  <p className="text-lg font-bold text-gray-900">+91 9502701115</p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-sm text-brand-orange hover:underline">Chat now &rarr;</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-orange">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg font-bold text-gray-900">support@akhotchips.in</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4">Bulk & Custom Orders?</h3>
              <p className="text-gray-600 mb-4">
                Planning a wedding, party, or corporate event? We undertake bulk orders with customized packaging and flavors.
              </p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in a customized bulk order.`}
                className="inline-block bg-brand-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Enquire for Bulk Order
              </a>
            </div>
          </div>

          {/* FAQ Preview */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900">How do I place an enquiry?</h3>
                <p className="text-gray-600 mt-2 text-sm">Simply add items to your cart and click "Enquire on WhatsApp". Our team will confirm availability and customization options.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900">Do you sell customized chips?</h3>
                <p className="text-gray-600 mt-2 text-sm">Yes! "A K Hot Chips" specializes in customized flavors for bulk orders. Contact us on WhatsApp for details.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900">What is the shelf life?</h3>
                <p className="text-gray-600 mt-2 text-sm">Since we use no preservatives, we recommend consuming chips within 20 days and namkeens within 30 days for best taste.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};