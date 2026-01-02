import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import Profile from "./Profile";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0 text-2xl font-bold">
          <span className="text-black">FLA</span>
          <span className="text-yellow-400">VORIZ</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden gap-8 ml-20 text-gray-500 md:flex">
          <Link to="/">
            <li className="transition hover:text-black">Home</li>
          </Link>
          <Link to="/">
            <li className="transition hover:text-black">Contact</li>
          </Link>
          <Link to="/">
            <li className="transition hover:text-black">Blog</li>
          </Link>
          <Link to="/">
            <li className="transition hover:text-black">About Us</li>
          </Link>
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Search Button */}
        <button
          className="items-center hidden h-10 gap-2 px-5 py-2 font-bold text-white transition shadow-md md:flex bg-amber-500 rounded-3xl hover:bg-amber-400"
          onClick={() => navigate("/search-recipe")}
        >
          <Search size={16} />
          Search
        </button>

        {/* User/Profile */}
        <div className="relative ml-4" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center justify-center w-10 h-10 transition bg-black rounded-full hover:scale-105"
          >
            <User size={20} className="text-white" />
          </button>
          {showProfile && <Profile show={showProfile} />}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="ml-4 md:hidden">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700">
            <Link to="/">
              <li
                className="transition hover:text-black"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </li>
            </Link>
            <Link to="/">
              <li
                className="transition hover:text-black"
                onClick={() => setMobileMenu(false)}
              >
                Contact
              </li>
            </Link>
            <Link to="/">
              <li
                className="transition hover:text-black"
                onClick={() => setMobileMenu(false)}
              >
                Blog
              </li>
            </Link>
            <Link to="/">
              <li
                className="transition hover:text-black"
                onClick={() => setMobileMenu(false)}
              >
                About Us
              </li>
            </Link>
            <li>
              <button
                className="flex items-center w-full h-10 gap-2 px-5 font-bold text-white bg-amber-500 rounded-3xl hover:bg-amber-400"
                onClick={() => {
                  navigate("/search-recipe");
                  setMobileMenu(false);
                }}
              >
                <Search size={16} />
                Search
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
