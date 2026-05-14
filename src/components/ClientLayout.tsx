'use client';

import React from 'react';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}
