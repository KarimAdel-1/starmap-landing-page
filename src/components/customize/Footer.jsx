import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('GBP');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // Add newsletter signup logic here
  };

  return (
    <footer className="bg-yellow px-5 md:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-12">
          <p className="text-lg mb-3">Signup to our newsletter</p>
          <form onSubmit={handleNewsletterSubmit} className="relative w-fit">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="pl-4 pr-12 py-2 bg-transparent border border-gray-800 rounded-full outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
            >
              <svg className="w-3 h-3" viewBox="0 0 7 12" fill="currentColor">
                <path d="M5.29 5.9L0.69 1.3L1.4 0.59L6.71 5.9L1.4 11.21L0.69 10.5L5.29 5.9Z"/>
              </svg>
            </button>
          </form>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-dashed border-gray-800/20 pt-8">
          {/* Currency Selector */}
          <div className="col-span-2 md:col-span-1">
            <p className="mb-2">Currency</p>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent opacity-60 outline-none"
            >
              <option value="GBP">£ GBP</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
            </select>
          </div>

          {/* Shop Links */}
          <div className="space-y-2">
            <p className="font-medium">Shop</p>
            <nav className="space-y-1">
              <a href="/category/booklights" className="block opacity-60 hover:opacity-100 transition-opacity">Booklights</a>
              <a href="/category/bookmarks" className="block opacity-60 hover:opacity-100 transition-opacity">Bookmarks</a>
              <a href="/category/book-holders" className="block opacity-60 hover:opacity-100 transition-opacity">Holders</a>
              <a href="/category/stationery" className="block opacity-60 hover:opacity-100 transition-opacity">Stationery</a>
              <a href="/category/tech" className="block opacity-60 hover:opacity-100 transition-opacity">Tech</a>
              <a href="/sale-category" className="block opacity-60 hover:opacity-100 transition-opacity">Sale</a>
            </nav>
          </div>

          {/* Information Links */}
          <div className="space-y-2">
            <p className="font-medium">Information</p>
            <nav className="space-y-1">
              <a href="/our-background" className="block opacity-60 hover:opacity-100 transition-opacity">About</a>
              <a href="/wholesale-gifts" className="block opacity-60 hover:opacity-100 transition-opacity">Trade</a>
              <a href="/contact-us" className="block opacity-60 hover:opacity-100 transition-opacity">Contact</a>
              <a href="/shipping" className="block opacity-60 hover:opacity-100 transition-opacity">Shipping</a>
              <a href="/refund-policy" className="block opacity-60 hover:opacity-100 transition-opacity">Refunds</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <p className="font-medium">Social</p>
            <nav className="space-y-1">
              <a href="https://instagram.com/thinkinggifts" target="_blank" rel="noreferrer noopener" className="block opacity-60 hover:opacity-100 transition-opacity">
                Instagram
              </a>
              <a href="https://www.facebook.com/thinkinggifts1" target="_blank" rel="noreferrer noopener" className="block opacity-60 hover:opacity-100 transition-opacity">
                Facebook
              </a>
              <a href="https://www.youtube.com/@thinkinggifts2882" target="_blank" rel="noreferrer noopener" className="block opacity-60 hover:opacity-100 transition-opacity">
                YouTube
              </a>
            </nav>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="mt-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">ThinkingGifts®</h1>
          
          <div className="flex flex-col md:flex-row justify-between text-sm opacity-60">
            <p>Copyright © 2025 Thinking Gifts</p>
            <div className="flex gap-4 md:gap-2 mt-2 md:mt-0">
              <a href="/terms-of-service" className="hover:opacity-100 transition-opacity">Terms of service</a>
              <a href="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
