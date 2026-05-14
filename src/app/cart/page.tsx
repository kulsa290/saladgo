'use client';

import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some fresh products to get started</p>
        <Link
          href="/products"
          className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition inline-block"
        >
          Continue Shopping 🛒
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {items.map((item, index) => (
              <motion.div
                key={item.productId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b last:border-b-0 p-4 flex gap-4 items-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center text-3xl">
                  🥗
                </div>

                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price} each</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-20"
        >
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-4 border-b pb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span className="font-semibold text-green-600">FREE</span>
            </div>
          </div>

          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span className="text-green-600">₹{total.toFixed(2)}</span>
          </div>

          <Link
            href="/checkout"
            className="w-full block text-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold mb-2"
          >
            Proceed to Checkout 💳
          </Link>

          <a
            href={`https://wa.me/919929622655?text=I%20have%20items%20worth%20₹${total}%20in%20my%20cart`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold mb-2"
          >
            Order via WhatsApp 💬
          </a>

          <button
            onClick={clearCart}
            className="w-full py-2 text-gray-600 border border-gray-300 rounded-lg hover:border-gray-400 transition"
          >
            Clear Cart
          </button>
        </motion.div>
      </div>
    </div>
  );
}
