import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

// Add token to requests
API.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Handle responses
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth
export const authAPI = {
  sendOTP: (phone: string) => API.post('/auth/send-otp', { phone }),
  verifyOTP: (phone: string, otp: string, name?: string) =>
    API.post('/auth/verify-otp', { phone, otp, name }),
  getCurrentUser: () => API.get('/auth/me'),
  updateProfile: (data: any) => API.put('/auth/profile', data),
  refreshToken: (refreshToken: string) =>
    API.post('/auth/refresh-token', { refreshToken }),
};

// Products
export const productAPI = {
  getAll: (params?: any) => API.get('/products', { params }),
  getById: (id: string) => API.get(`/products/${id}`),
  getBestsellers: () => API.get('/products/bestsellers'),
  getCategories: () => API.get('/categories'),
  addReview: (productId: string, data: any) =>
    API.post(`/products/${productId}/review`, data),
};

// Cart
export const cartAPI = {
  getCart: () => API.get('/cart'),
  addItem: (productId: string, quantity: number) =>
    API.post('/cart/add', { productId, quantity }),
  updateItem: (productId: string, quantity: number) =>
    API.put('/cart/update', { productId, quantity }),
  removeItem: (productId: string) => API.delete(`/cart/${productId}`),
  clearCart: () => API.delete('/cart'),
};

// Orders
export const orderAPI = {
  create: (data: any) => API.post('/orders/create', data),
  getAll: () => API.get('/orders'),
  getById: (id: string) => API.get(`/orders/${id}`),
  cancel: (id: string) => API.put(`/orders/${id}/cancel`, {}),
};

// Payments
export const paymentAPI = {
  createOrder: (orderId: string, amount: number) =>
    API.post('/payments/create-order', { orderId, amount }),
  verify: (razorpayOrderId: string, razorpayPaymentId: string, razorpaySignature: string) =>
    API.post('/payments/verify', { razorpayOrderId, razorpayPaymentId, razorpaySignature }),
  refund: (orderId: string) => API.post(`/payments/refund/${orderId}`),
};

// Admin
export const adminAPI = {
  login: (email: string, password: string) =>
    API.post('/admin/login', { email, password }),
  getDashboard: () => API.get('/admin/dashboard'),
  createProduct: (data: any) => API.post('/admin/products', data),
  updateProduct: (id: string, data: any) =>
    API.put(`/admin/products/${id}`, data),
  deleteProduct: (id: string) => API.delete(`/admin/products/${id}`),
  getOrders: (params?: any) => API.get('/admin/orders', { params }),
  updateOrderStatus: (id: string, status: string) =>
    API.put(`/admin/orders/${id}/status`, { status }),
  createCoupon: (data: any) => API.post('/admin/coupons', data),
  getCoupons: () => API.get('/admin/coupons'),
  updateCoupon: (id: string, data: any) =>
    API.put(`/admin/coupons/${id}`, data),
  deleteCoupon: (id: string) => API.delete(`/admin/coupons/${id}`),
};

export default API;
