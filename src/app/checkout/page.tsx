'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { orderAPI, paymentAPI } from '@/utils/api';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('razorpay');

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 mb-4">Please log in to checkout</p>
        <button
          onClick={() => router.push('/login')}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Go to Login
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 mb-4">Your cart is empty</p>
        <button
          onClick={() => router.push('/products')}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      alert('Please enter delivery address');
      return;
    }

    setLoading(true);
    try {
      // Create order
      const orderResponse = await orderAPI.create({
        addressId: null,
        paymentMethod,
        notes,
        couponCode: null,
      });

      if (orderResponse.data.success) {
        const orderId = orderResponse.data.order._id;

        if (paymentMethod === 'razorpay') {
          // Create Razorpay order
          const razorpayResponse = await paymentAPI.createOrder(orderId, total);

          if (razorpayResponse.data.success) {
            // Open Razorpay
            const options = {
              key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
              amount: Math.round(total * 100),
              currency: 'INR',
              name: 'SaladGo',
              description: 'Fresh Salads Delivery',
              order_id: razorpayResponse.data.razorpayOrderId,
              handler: async (response: any) => {
                try {
                  await paymentAPI.verify(
                    response.razorpay_order_id,
                    response.razorpay_payment_id,
                    response.razorpay_signature
                  );
                  clearCart();
                  alert('Payment successful! Order placed');
                  router.push(`/orders/${orderId}`);
                } catch (error) {
                  alert('Payment verification failed');
                }
              },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
          }
        } else {
          // WhatsApp order
          const msg = `Order Details:\n\nTotal: ₹${total}\nItems: ${items.length}\nAddress: ${address}`;
          window.open(
            `https://wa.me/919929622655?text=${encodeURIComponent(msg)}`
          );
          clearCart();
          router.push(`/orders/${orderId}`);
        }
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error creating order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <form onSubmit={handleCheckout} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                value={user?.name}
                disabled
                className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Phone</label>
              <input
                type="tel"
                value={user?.phone}
                disabled
                className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Delivery Address *</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full delivery address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                rows={3}
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Special Instructions</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="E.g., Ring the bell twice, leave at door, etc."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                rows={2}
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-4">Payment Method</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="razorpay"
                    checked={paymentMethod === 'razorpay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span>💳 Card / UPI (Razorpay)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="whatsapp"
                    checked={paymentMethod === 'whatsapp'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span>💬 WhatsApp Order</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Complete Order 🎉'}
            </button>
          </form>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="mb-6 border-b pb-4">
              {items.map((item) => (
                <div key={item.productId} className="flex justify-between mb-3">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6 border-b pb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600 font-semibold">
                <span>Delivery (FREE)</span>
                <span>₹0</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-bold text-green-600">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg text-sm text-gray-700">
              <p>✅ 100% Fresh & Organic</p>
              <p>✅ 20-30 Minutes Delivery</p>
              <p>✅ Easy Returns</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
