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
            <div className="w-12 h-12 flex-shrink-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <style>{`.leaf { fill: #16a34a; } .fork { fill: #15803d; }`}</style>
                </defs>
                <rect x="85" y="120" width="30" height="70" rx="15" className="fork"/>
                <rect x="70" y="50" width="8" height="70" rx="4" className="fork"/>
                <rect x="96" y="40" width="8" height="80" rx="4" className="fork"/>
                <rect x="122" y="50" width="8" height="70" rx="4" className="fork"/>
                <circle cx="100" cy="120" r="12" className="fork"/>
                <ellipse cx="60" cy="80" rx="16" ry="24" className="leaf" transform="rotate(-35 60 80)"/>
                <ellipse cx="50" cy="110" rx="14" ry="20" className="leaf" transform="rotate(-15 50 110)"/>
                <ellipse cx="140" cy="80" rx="16" ry="24" className="leaf" transform="rotate(35 140 80)"/>
                <ellipse cx="150" cy="110" rx="14" ry="20" className="leaf" transform="rotate(15 150 110)"/>
                <ellipse cx="100" cy="35" rx="12" ry="18" className="leaf" transform="rotate(0 100 35)"/>
              </svg>
            </div>
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

      {/* WhatsApp Order Flow */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-32 right-6 z-40 animate-bounce">
          <a
            href="https://wa.me/919929622655?text=Hi%20SaladGo,%20I%20want%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all hover:scale-110"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.951 1.263 9.932 9.932 0 00-3.55 3.213 9.913 9.913 0 00-.896 4.77 9.865 9.865 0 00.334 2.693l-.532 1.943 1.99-.523a9.853 9.853 0 004.652 1.188h.005c5.445 0 9.877-4.422 9.877-9.882 0-2.637-.996-5.122-2.809-6.993a9.847 9.847 0 00-7.051-2.891M2.354 0A1.17 1.17 0 001.154 1.19l.622 10.995c.36 2.201 1.916 4.291 4.04 5.456l9.21 5.784c.515.323 1.181.322 1.695-.002l9.52-6.031c2.08-1.22 3.554-3.356 3.894-5.495L23.125 1.154A1.202 1.202 0 0022.657.28H1.46a1.169 1.169 0 00-.106 0z"/>
            </svg>
          </a>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              💨 Order in Minutes
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Order Fresh in Minutes 🥗
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Healthy salads, sprouts, peeled garlic, and farm fresh vegetables delivered fast.
            </p>
          </div>

          {/* Badges Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { label: 'Freshly Prepared', icon: '👨‍🍳' },
              { label: '100% Hygienic', icon: '✨' },
              { label: 'Farm Fresh', icon: '🌾' },
              { label: 'Delivered Fast', icon: '🚴' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-green-50">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>

          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                step: '1',
                title: 'Browse Menu',
                description: 'Choose your favorite salads, sprouts, and fresh products.',
                icon: '📋',
                color: 'from-green-400 to-green-600',
              },
              {
                step: '2',
                title: 'Order on WhatsApp',
                description: 'Send your order instantly with one tap.',
                icon: '💬',
                color: 'from-green-500 to-green-700',
              },
              {
                step: '3',
                title: 'Fast Delivery',
                description: 'Freshly packed and delivered to your doorstep in minutes.',
                icon: '🚀',
                color: 'from-green-600 to-green-800',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-50 hover:border-green-200"
              >
                {/* Step Number Badge */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white font-black text-xl mb-6 group-hover:scale-110 transition-transform`}>
                  {item.step}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-1 bg-gradient-to-r from-green-400 to-transparent transform translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Section with Badges */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16" />

            <div className="relative z-10">
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">
                  ⏱️ 20 Min Delivery
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">
                  🎉 Free Delivery Today
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Order?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of happy customers enjoying fresh, healthy meals delivered to their doorstep.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919929622655?text=Hi%20SaladGo,%20I%20want%20to%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-green-50 transition shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.951 1.263 9.932 9.932 0 00-3.55 3.213 9.913 9.913 0 00-.896 4.77 9.865 9.865 0 00.334 2.693l-.532 1.943 1.99-.523a9.853 9.853 0 004.652 1.188h.005c5.445 0 9.877-4.422 9.877-9.882 0-2.637-.996-5.122-2.809-6.993a9.847 9.847 0 00-7.051-2.891M2.354 0A1.17 1.17 0 001.154 1.19l.622 10.995c.36 2.201 1.916 4.291 4.04 5.456l9.21 5.784c.515.323 1.181.322 1.695-.002l9.52-6.031c2.08-1.22 3.554-3.356 3.894-5.495L23.125 1.154A1.202 1.202 0 0022.657.28H1.46a1.169 1.169 0 00-.106 0z"/>
                  </svg>
                  Order on WhatsApp
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-green-600 transition hover:scale-105"
                >
                  📋 View Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-green-200 p-4 z-30 shadow-2xl">
        <a
          href="https://wa.me/919929622655?text=Hi%20SaladGo,%20I%20want%20to%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.951 1.263 9.932 9.932 0 00-3.55 3.213 9.913 9.913 0 00-.896 4.77 9.865 9.865 0 00.334 2.693l-.532 1.943 1.99-.523a9.853 9.853 0 004.652 1.188h.005c5.445 0 9.877-4.422 9.877-9.882 0-2.637-.996-5.122-2.809-6.993a9.847 9.847 0 00-7.051-2.891M2.354 0A1.17 1.17 0 001.154 1.19l.622 10.995c.36 2.201 1.916 4.291 4.04 5.456l9.21 5.784c.515.323 1.181.322 1.695-.002l9.52-6.031c2.08-1.22 3.554-3.356 3.894-5.495L23.125 1.154A1.202 1.202 0 0022.657.28H1.46a1.169 1.169 0 00-.106 0z"/>
          </svg>
          Order Now on WhatsApp
        </a>
      </div>

      {/* Padding for sticky button on mobile */}
      <div className="md:hidden h-20" />

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
