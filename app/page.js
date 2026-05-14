export default function SaladGoWebsite() {
  const products = [
    {
      name: 'Fresh Green Salad',
      price: '₹99',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Mix Sprouts Bowl',
      price: '₹120',
      image:
        'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Farm Fresh Vegetables',
      price: 'Starting ₹40',
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Peeled Garlic Pack',
      price: '₹79',
      image:
        'https://images.unsplash.com/photo-1615477550927-6ecf6f8f39ea?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7fff6] text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="SaladGo Logo" 
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-green-700">SaladGo</h1>
              <p className="text-xs text-gray-500">Freshness Delivered Fast</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-green-600 transition">
              Home
            </a>
            <a href="#products" className="hover:text-green-600 transition">
              Products
            </a>
            <a href="#subscription" className="hover:text-green-600 transition">
              Subscription
            </a>
            <a href="#about" className="hover:text-green-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-green-600 transition">
              Contact
            </a>
          </nav>

          <button className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-xl font-semibold shadow-lg">
            Order Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-green-100 via-white to-green-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⚡ Quick Delivery in Minutes
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Fresh Salads &
              <span className="text-green-600 block">Farm Vegetables</span>
              Delivered Fast
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Healthy eating made simple with fresh salads, sprouts,
              vegetables, peeled garlic, and quick grocery delivery at your
              doorstep.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition">
                Start Ordering
              </button>

              <button className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-4 rounded-2xl font-bold transition">
                View Menu
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              <div>
                <h3 className="text-3xl font-black text-green-700">10K+</h3>
                <p className="text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-green-700">20 Min</h3>
                <p className="text-gray-500">Average Delivery</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-green-700">100%</h3>
                <p className="text-gray-500">Fresh Products</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-green-300 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
              alt="Salad"
              className="relative rounded-[40px] shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              '🥗 Fresh Salads',
              '🥦 Vegetables',
              '🧄 Peeled Garlic',
              '🌱 Healthy Sprouts',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 hover:bg-green-100 transition rounded-3xl p-8 text-center shadow-sm hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-green-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-[#f8fff7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-green-600 font-bold uppercase tracking-widest mb-3">
              Fresh Products
            </p>
            <h2 className="text-5xl font-black mb-4">
              Best Selling Items
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Freshly prepared healthy meals and vegetables sourced directly
              from farms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-green-600 text-xl font-black mb-5">
                    {product.price}
                  </p>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-bold transition">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section
        id="subscription"
        className="py-20 bg-gradient-to-r from-green-700 to-green-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6">
            Healthy Subscription Plans
          </h2>

          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-14">
            Daily healthy salads and fresh groceries delivered automatically to
            your doorstep.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Basic',
                price: '₹999/month',
                features: ['Daily Salad', 'Fresh Vegetables', 'Morning Delivery'],
              },
              {
                title: 'Premium',
                price: '₹1999/month',
                features: ['2 Salads Daily', 'Sprouts', 'Priority Delivery'],
              },
              {
                title: 'Family Pack',
                price: '₹3499/month',
                features: ['Family Meals', 'Vegetables', 'Custom Orders'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-[30px] p-10 shadow-2xl"
              >
                <h3 className="text-3xl font-black mb-3">{plan.title}</h3>
                <p className="text-4xl font-black text-green-600 mb-8">
                  {plan.price}
                </p>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="text-lg font-medium">
                      ✓ {feature}
                    </p>
                  ))}
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-lg transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
              alt="Vegetables"
              className="rounded-[40px] shadow-2xl"
            />
          </div>

          <div>
            <p className="text-green-600 font-bold uppercase tracking-widest mb-4">
              About SaladGo
            </p>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Healthy Food,
              <span className="text-green-600 block">Fast Delivery</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              SaladGo is a modern quick-commerce brand focused on delivering
              fresh salads, farm vegetables, sprouts, and healthy products with
              speed, hygiene, and freshness.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                  🚚
                </div>
                <div>
                  <h3 className="font-bold text-xl">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Fresh products delivered within minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                  🌱
                </div>
                <div>
                  <h3 className="font-bold text-xl">Farm Fresh</h3>
                  <p className="text-gray-600">
                    Direct sourcing from trusted farms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                  🥗
                </div>
                <div>
                  <h3 className="font-bold text-xl">Healthy Lifestyle</h3>
                  <p className="text-gray-600">
                    Helping customers eat healthy every day.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center bg-white rounded-[40px] shadow-2xl p-14">
          <h2 className="text-5xl font-black mb-6">
            Ready To Eat Fresh?
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Start your healthy journey today with fresh salads, vegetables, and
            healthy meals delivered directly to your home.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition shadow-xl">
              Order Now
            </button>

            <button className="border-2 border-green-600 text-green-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-50 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-black text-green-400 mb-4">
              SaladGo
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Fresh salads, vegetables, sprouts, and healthy food delivered
              quickly to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Quick Links</h3>
            <div className="space-y-3 text-gray-400">
              <p>Home</p>
              <p>Products</p>
              <p>Subscription</p>
              <p>About</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p>📞 +91 9929622655</p>
              <p>📍 Bikaner, Rajasthan</p>
              <p>🕒 7 AM - 11 PM</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Newsletter</h3>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="saladgo.in@gmail.com"
                className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3 outline-none"
              />

              <button className="bg-green-600 hover:bg-green-700 py-3 rounded-2xl font-bold transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          © 2026 SaladGo. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
