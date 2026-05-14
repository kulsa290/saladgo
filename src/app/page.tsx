'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { productAPI } from '@/utils/api';

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  isBestseller?: boolean;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await productAPI.getAll({ limit: 8 });
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            🥗 Fresh Salads & Farm Vegetables
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-lg md:text-xl text-green-50 mb-8"
          >
            Delivered Fresh in 20 Minutes • 100% Organic • Best Prices
          </motion.p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition transform hover:scale-105"
            >
              Order Now 🛒
            </Link>
            <a
              href={`https://wa.me/919929622655?text=Hi%20SaladGo,%20I%20want%20to%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition transform hover:scale-105"
            >
              WhatsApp Order 💬
            </a>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-green-600">20 min</p>
              <p className="text-gray-600">Fast Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">10K+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="text-gray-600">Fresh & Organic</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">₹0</p>
              <p className="text-gray-600">Delivery Charges</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
          
          {loading ? (
            <div className="text-center py-12">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
                >
                  <div className="bg-gray-200 h-40 flex items-center justify-center">
                    <span className="text-4xl">{product.isBestseller ? '⭐' : '🥗'}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        {product.discountPrice ? (
                          <>
                            <span className="text-xl font-bold text-green-600">
                              ₹{product.discountPrice}
                            </span>
                            <span className="text-sm text-gray-400 ml-2 line-through">
                              ₹{product.price}
                            </span>
                          </>
                        ) : (
                          <span className="text-xl font-bold">₹{product.price}</span>
                        )}
                      </div>
                    </div>
                    <Link
                      href={`/products/${product._id}`}
                      className="w-full py-2 bg-green-600 text-white rounded-lg text-center hover:bg-green-700 transition block"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Eat Fresh?</h2>
        <p className="text-lg mb-8">Join thousands of healthy eaters</p>
        <Link
          href="/products"
          className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition inline-block"
        >
          Start Shopping 🛒
        </Link>
      </section>
    </div>
  );
}
