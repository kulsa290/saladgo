'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { productAPI, cartAPI } from '@/utils/api';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  image: string;
  stock: number;
  rating: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, [selectedCategory]);

  const loadProducts = async () => {
    try {
      const params = selectedCategory !== 'all' ? { category: selectedCategory } : {};
      const response = await productAPI.getAll(params);
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await productAPI.getCategories();
      if (response.data.success) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      productId: product._id,
      name: product.name,
      price: product.discountPrice || product.price,
      quantity: 1,
      image: product.image,
    });
    alert('Added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      {/* Category Filter */}
      <div className="mb-8 flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg transition ${
            selectedCategory === 'all'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {categories.map((cat: any) => (
          <button
            key={cat._id}
            onClick={() => setSelectedCategory(cat._id)}
            className={`px-4 py-2 rounded-lg transition ${
              selectedCategory === cat._id
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-50 h-48 flex items-center justify-center relative">
                <span className="text-6xl">🥗</span>
                {product.discountPrice && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Sale
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      ₹{product.discountPrice || product.price}
                    </span>
                    {product.discountPrice && (
                      <span className="text-sm text-gray-400 ml-2 line-through">
                        ₹{product.price}
                      </span>
                    )}
                  </div>
                  <div className="text-yellow-500">⭐ {product.rating}</div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
