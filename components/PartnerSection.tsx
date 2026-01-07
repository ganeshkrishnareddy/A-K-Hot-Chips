import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PARTNER_PRODUCTS, PARTNER_360CLEAN } from '../constants';

const PartnerSection: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                {/* Partner Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                        Partner Products
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {PARTNER_360CLEAN.name}
                    </h2>
                    <p className="text-xl text-yellow-400 font-medium mb-4">
                        {PARTNER_360CLEAN.tagline}
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-2">
                        {PARTNER_360CLEAN.description}
                    </p>
                    <p className="text-green-400 font-bold text-lg">
                        60ml Sachets • ₹10 each
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {PARTNER_PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-pink-500 to-blue-500">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-green-400">
                                        ₹{product.price}<span className="text-sm text-gray-400">/{product.unit}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Shop Link */}
                <div className="text-center">
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-colors shadow-lg"
                    >
                        Order Now from Shop
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
