'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { adminAPI, authAPI } from '@/utils/api';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminToken, setAdminToken] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setAdminToken(token);
      setIsLoggedIn(true);
      loadDashboard(token);
    }
  }, []);

  const loadDashboard = async (token: string) => {
    try {
      // We would need to set auth header here for admin endpoints
      const response = await adminAPI.getDashboard();
      setStats(response.data.stats);
      setOrders(response.data.stats?.recentOrders || []);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await adminAPI.login(loginEmail, loginPassword);
      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        setAdminToken(response.data.token);
        setIsLoggedIn(true);
        await loadDashboard(response.data.token);
      }
    } catch (error: any) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4"
        >
          <h1 className="text-3xl font-bold text-center mb-8">Admin Panel 👨‍💼</h1>

          <form onSubmit={handleAdminLogin}>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@saladgo.in"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Admin Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard 👨‍💼</h1>
        <button
          onClick={() => {
            localStorage.removeItem('adminToken');
            setIsLoggedIn(false);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <p className="text-gray-600 text-sm">Total Orders</p>
              <p className="text-3xl font-bold text-green-600">{stats?.totalOrders || 0}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-3xl font-bold text-green-600">₹{stats?.totalRevenue?.toLocaleString() || 0}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <p className="text-gray-600 text-sm">Total Users</p>
              <p className="text-3xl font-bold text-green-600">{stats?.totalUsers || 0}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <p className="text-gray-600 text-sm">Total Products</p>
              <p className="text-3xl font-bold text-green-600">{stats?.totalProducts || 0}</p>
            </motion.div>
          </div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Order ID</th>
                    <th className="text-left py-3 px-4">Customer</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono text-xs">{order.orderId}</td>
                      <td className="py-3 px-4">{order.userId?.name || 'N/A'}</td>
                      <td className="py-3 px-4 font-semibold">₹{order.totalAmount}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'delivered'
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'cancelled'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-xs">{new Date(order.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
