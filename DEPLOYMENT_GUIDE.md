# 🥗 SaladGo - Full-Stack Quick-Commerce Platform

Complete production-grade e-commerce application for healthy salad and farm vegetable delivery.

## 📦 Project Structure

```
SALADGO/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/             # Admin dashboard
│   │   ├── customer/          # Customer pages
│   │   ├── checkout/          # Checkout page
│   │   ├── cart/              # Cart page
│   │   ├── products/          # Products listing
│   │   ├── login/             # Authentication
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ClientLayout.tsx
│   ├── context/               # React context (Auth, Cart)
│   ├── utils/                 # Utilities and API client
│   └── app/globals.css        # Global styles
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js

SALADGO-Backend/
├── src/
│   ├── models/               # MongoDB schemas
│   ├── controllers/          # API logic
│   ├── routes/               # Express routes
│   ├── middleware/           # Authentication & error handling
│   ├── utils/                # JWT, validation utilities
│   ├── config/               # Database config
│   └── index.js              # Main server
├── package.json
└── .env.example
```

## 🚀 Features

### Customer Features
- ✅ OTP-based authentication
- ✅ Product browsing & filtering
- ✅ Shopping cart management
- ✅ Razorpay payment integration
- ✅ WhatsApp ordering
- ✅ Order tracking
- ✅ Profile management

### Admin Features
- ✅ Dashboard analytics
- ✅ Product management (CRUD)
- ✅ Order management & status updates
- ✅ Coupon management
- ✅ Inventory tracking
- ✅ User management

### Technical Features
- ✅ TypeScript support
- ✅ Framer Motion animations
- ✅ Responsive design (mobile-first)
- ✅ JWT authentication
- ✅ Rate limiting & security
- ✅ Error handling

## 🛠️ Tech Stack

### Frontend
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Axios
- React Context API

### Backend
- Node.js & Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT Authentication
- Razorpay API
- Rate Limiting

### Deployment
- **Frontend**: Vercel
- **Backend**: Railway or Render
- **Database**: MongoDB Atlas

## 📋 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account
- Razorpay merchant account
- GitHub account

### 1. Backend Setup

```bash
cd SALADGO-Backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Fill in environment variables
# - MONGODB_URI
# - JWT_SECRET
# - RAZORPAY_KEY_ID & RAZORPAY_KEY_SECRET
# - Twilio credentials (optional)

# Start development server
npm run dev    # runs on port 5000

# Build for production
npm run build
```

### 2. Frontend Setup

```bash
cd SALADGO

# Install dependencies
npm install

# Create .env.local
# NEXT_PUBLIC_API_URL=http://localhost:5000/api
# NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id

# Start development server
npm run dev    # runs on port 3000

# Build for production
npm run build
npm start
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/send-otp` - Send OTP
- `POST /api/auth/verify-otp` - Verify OTP & Login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Products
- `GET /api/products` - List products
- `GET /api/products/:id` - Get product
- `GET /api/categories` - Get categories

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart/add` - Add to cart
- `PUT /api/cart/update` - Update quantity
- `DELETE /api/cart/:id` - Remove item

### Orders
- `POST /api/orders/create` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

### Payments
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment

## 🚢 Deployment

### Deploy Backend on Railway

1. Push code to GitHub
2. Create account on railway.app
3. Create new project from GitHub
4. Select SALADGO-Backend repository
5. Add environment variables
6. Deploy automatically

**Railway URL**: https://saladgo-backend.railway.app

### Deploy Frontend on Vercel

1. The frontend is already set up at vercel.com/kulsa290s-projects
2. Update environment variables for backend API:
   ```
   NEXT_PUBLIC_API_URL=https://saladgo-backend.railway.app/api
   ```
3. Redeploy

**Vercel URL**: https://saladgo.vercel.app

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/saladgo
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=key_id
RAZORPAY_KEY_SECRET=key_secret
FRONTEND_URL=https://saladgo.vercel.app
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://saladgo-backend.railway.app/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=key_id
NEXT_PUBLIC_WHATSAPP_NUMBER=919929622655
```

## 📱 Mobile Responsive

- ✅ Mobile-first design
- ✅ Touch-optimized UI
- ✅ Sticky CTA buttons
- ✅ Responsive navigation
- ✅ Fast performance

## 🔐 Security

- ✅ JWT authentication
- ✅ Password hashing with bcrypt
- ✅ Rate limiting
- ✅ CORS configured
- ✅ Input validation
- ✅ Helmet.js security headers

## 📊 Database Schema

### User
- Phone, name, email
- Addresses, orders, wishlist
- Loyalty points, referral code

### Product
- Name, description, category
- Price, stock, images
- Reviews, ratings, tags

### Order
- Items, total amount
- Status, payment info
- Delivery address, estimated time

### Admin
- Email, password, role
- Permissions, login history

## 🎯 Next Steps / Future Features

- [ ] Payment methods (PayPal, Apple Pay)
- [ ] Live order tracking with map
- [ ] Push notifications
- [ ] PWA support
- [ ] AI recommendations
- [ ] Subscription plans
- [ ] Referral rewards
- [ ] Loyalty program
- [ ] Delivery partner app
- [ ] Analytics dashboard

## 📞 Support

- **Phone**: +91 9929622655
- **Email**: support@saladgo.in
- **Hours**: 7 PM - 11 PM IST
- **Location**: Bikaner, Rajasthan

## 📄 License

MIT License - feel free to use and modify

---

**Built with ❤️ for healthy eating**
