import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  Mail,
  ArrowRight,
} from "lucide-react";
import logo from "../../assets/pramesh-wealth-logo.png";

const MobileMenu = ({ isOpen, setIsOpen }) => (
  <div
    className={`fixed inset-0 z-50 transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 ease-in-out`}
  >
    <div
      className="absolute inset-0 bg-black opacity-50"
      onClick={() => setIsOpen(false)}
    ></div>
    <nav className="relative z-10 bg-white h-full w-64 shadow-xl flex flex-col">
      <div className="p-4 flex justify-between items-center border-b">
        <span className="font-bold text-lg">Menu</span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-neutral-500 hover:text-neutral-700"
        >
          <X size={24} />
        </button>
      </div>
      <div className="py-4 flex flex-col">
        <Link
          to="/"
          className="px-4 py-2 text-neutral-900 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="px-4 py-2 text-neutral-900 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 text-neutral-900 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 text-neutral-900 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
      <div className="mt-auto p-4">
        <button className="w-full bg-primary-500 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-primary-600 transition duration-300 ease-in-out flex items-center justify-center">
          Get Started <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </nav>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-filter backdrop-blur-lg bg-white bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-24">
          <Link to="/" className="flex-shrink-0 mr-auto">
            <img className="h-12 w-auto" src={logo} alt="Pramesh Wealth" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-primary-600 transition duration-300 ease-in-out flex items-center">
              Get Started <ArrowRight size={18} className="ml-2" />
            </button>
          </nav>

          <button
            className="md:hidden text-gray-800 hover:text-primary-600 ml-auto"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg border-t border-gray-200 px-4 py-2 flex justify-around items-center">
        <Link
          to="/"
          className="flex flex-col items-center text-gray-800 hover:text-primary-600"
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/services"
          className="flex flex-col items-center text-gray-800 hover:text-primary-600"
        >
          <Briefcase size={20} />
          <span className="text-xs mt-1">Services</span>
        </Link>
        <Link
          to="/about"
          className="flex flex-col items-center text-gray-800 hover:text-primary-600"
        >
          <Users size={20} />
          <span className="text-xs mt-1">About</span>
        </Link>
        <Link
          to="/contact"
          className="flex flex-col items-center text-gray-800 hover:text-primary-600"
        >
          <Mail size={20} />
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
