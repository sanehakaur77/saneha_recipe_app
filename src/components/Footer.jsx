import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 text-white bg-black">
      {/* Main Footer */}
      <div className="grid grid-cols-1 gap-8 px-6 py-12 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-4">
        {/* Section 1 – Brand */}
        <div>
          <h1 className="text-2xl font-bold">
            FLA<span className="text-yellow-400">VORIZ</span>
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Discover, cook and share amazing recipes from around the world.
          </p>
        </div>

        {/* Section 2 – Quick Links */}
        <div>
          <h2 className="mb-3 font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Recipes</li>
            <li className="cursor-pointer hover:text-white">Blog</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>

        {/* Section 3 – Resources */}
        <div>
          <h2 className="mb-3 font-semibold">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">Help Center</li>
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
            <li className="cursor-pointer hover:text-white">
              Terms of Service
            </li>
            <li className="cursor-pointer hover:text-white">FAQs</li>
          </ul>
        </div>

        {/* Section 4 – Contact */}
        <div>
          <h2 className="mb-3 font-semibold">Contact</h2>
          <p className="text-sm text-gray-400">Email: support@flavoriz.com</p>
          <p className="mt-1 text-sm text-gray-400">Phone: +91 98765 43210</p>
          <p className="mt-1 text-sm text-gray-400">India</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="py-4 text-sm text-center text-gray-500 border-t border-gray-700">
        © 2025 Flavoriz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
