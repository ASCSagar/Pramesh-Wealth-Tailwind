import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Pramesh Wealth
            </h3>
            <p className="">
              Founded in 2001, the Pramesh has grown to become one of the
              Leading Financial Services Provider. Our wide network spans more
              than 5 own branches in Gujarat and serving an esteemed clientele
              of 10000+ investors.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-primary-300">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/announcement" className="hover:text-primary-300">
                  Announcements
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
            <h4 className="text-lg font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="https://www.sebi.gov.in/filings/mutual-funds.html"
                  className="hover:text-primary-300"
                  target="_blank"
                >
                  SID/SAI/KIM
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-primary-300"
                >
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
            <h4 className="text-lg font-bold mb-4 text-white">
              Connect With Us
            </h4>
            <p className="mb-4">
              “Pramesh House” 8, Vedant Bunglow,
              <br /> Main Kalali road, Kalali,
              <br />
              Vadodara- 390012
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:8980027228" className="hover:text-primary-300">
                  89800 27228
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:info@prameshwealth.com"
                  className="hover:text-primary-300"
                >
                  info@prameshwealth.com
                </a>
              </p>
            </div>
            <div className="flex space-x-4 mt-8">
              <Link to="https://www.facebook.com/Prameshwealth" target="_blank">
                <Facebook className="w-6 h-6 text-neutral-200" />
              </Link>
              <Link
                to="https://www.instagram.com/pramesh_wealth/"
                target="_blank"
              >
                <Instagram className="w-6 h-6 text-neutral-200" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/pramesh-wealth-pvt-ltd/?viewAsMember=truehttps://www.instagram.com/pramesh_wealth/https://www.linkedin.com/company/pramesh-wealth-pvt-ltd/?viewAsMember=true"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 text-neutral-200" />
              </Link>
              <Link
                to="https://www.youtube.com/channel/UCerCExGJ8tYPJRpNySDXqZQ"
                target="_blank"
              >
                <Youtube className="w-6 h-6 text-neutral-200" />
              </Link>
              <Link to="https://x.com/pramesh_wealth" target="_blank">
                <Twitter className="w-6 h-6 text-neutral-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-xs sm:text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">
                  Mutual Fund Distributor :{" "}
                </span>{" "}
                Registered with AMFI Under ARN No : 100481 - Date of initial
                Registration : 20.02.2015 - Valid Up to 19th February, 2027.
              </p>
              <p>
                <span className="font-semibold">Insurance Business : </span>{" "}
                Registered with IRDAI as Corporate (Agent) Composite Under the
                Registration No : CA0787 - Valid Up to 26.12.2027.
              </p>
              <p>
                <span>PMS - APMI Registration no : </span>
                APRN03881 Valid Up to 02.10.2026.
              </p>
              <p>
                <span className="font-semibold">Grievance Officer : </span>{" "}
                Sarju Parikh | +91-8980027229 | sarju@prameshwealth.com
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
