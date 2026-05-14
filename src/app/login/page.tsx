'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/utils/api';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await authAPI.sendOTP(phone);
      setStep('otp');
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(phone, otp, step === 'otp' && !name ? undefined : name);
      router.push('/products');
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4"
      >
        <h1 className="text-3xl font-bold text-center mb-2">🥗 SaladGo</h1>
        <p className="text-gray-600 text-center mb-8">Fresh Salads in 20 Minutes</p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {step === 'phone' ? (
          <form onSubmit={handleSendOTP}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.slice(0, 10))}
                placeholder="9876543210"
                maxLength={10}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />
              <p className="text-sm text-gray-500 mt-1">10-digit Indian mobile number</p>
            </div>

            <button
              type="submit"
              disabled={loading || phone.length !== 10}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold disabled:opacity-50"
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                placeholder="123456"
                maxLength={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 text-2xl tracking-widest"
              />
              <p className="text-sm text-gray-500 mt-1">Check your SMS</p>
            </div>

            {name === '' && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name (for new users)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading || otp.length < 6}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Verify & Login'}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep('phone');
                setOtp('');
                setName('');
              }}
              className="w-full mt-2 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Change Phone Number
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
