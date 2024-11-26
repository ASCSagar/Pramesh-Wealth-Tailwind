import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/pramesh-wealth-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-filter backdrop-blur-lg bg-white bg-opacity-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
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
              to="/about"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/downloads"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Downloads
            </Link>
            <Link
              to="/announcement"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Announcements
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium flex items-center gap-1">
                LogIn
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden">
                  <div className="py-2">
                    <Link
                      to="/admin"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Admin LogIn
                    </Link>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Branch LogIn
                    </Link>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Employee LogIn
                    </Link>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Customer LogIn
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <button
            className="md:hidden text-gray-800 hover:text-primary-600 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <Link
            to="/"
            className="block py-2 text-gray-800 hover:text-primary-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-800 hover:text-primary-600"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="block py-2 text-gray-800 hover:text-primary-600"
          >
            Services
          </Link>
          <Link
            to="/downloads"
            className="block py-2 text-gray-800 hover:text-primary-600"
          >
            Downloads
          </Link>
          <Link
            to="/announcement"
            className="block py-2 text-gray-800 hover:text-primary-600"
          >
            Announcements
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-800 hover:text-primary-600"
          >
            Contact
          </Link>
          <div>
            <Link
              to="/login"
              className="block py-2 text-gray-800 hover:text-primary-600"
            >
              LogIn
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
