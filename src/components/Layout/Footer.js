import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pramesh Wealth</h3>
            <p className="text-sm mb-4">The Investment Bridge</p>
            <div className="text-sm space-y-2">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:8980027228" className="hover:text-primary-300">
                  89800 27228
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:sarju@prameshwealth.com"
                  className="hover:text-primary-300"
                >
                  sarju@prameshwealth.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sid-sai-kim" className="hover:text-primary-300">
                  SID/SAI/KIM
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-primary-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-primary-300">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/disclosure" className="hover:text-primary-300">
                  Disclosure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4"></div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-xs sm:text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">MF Distributor:</span> AMFI ARN
                No: 100481 (Valid till 19/02/2027)
              </p>
              <p>
                <span className="font-semibold">Insurance:</span> IRDAI Reg No:
                CA0787 (Valid till 26/12/2024)
              </p>
              <p>
                <span className="font-semibold">Grievance Officer:</span> Sarju
                Parikh | 89800 27228 | sarju@prameshwealth.com
              </p>
            </div>

            <div className="space-y-2 md:text-right">
              <p className="text-neutral-400">
                Investment in securities market are subject to market risks.
              </p>
              <p>
                © {new Date().getFullYear()} Pramesh Wealth. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
