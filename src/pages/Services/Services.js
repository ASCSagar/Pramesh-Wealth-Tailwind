import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart2, Shield, Briefcase, LoaderPinwheel } from "lucide-react";
import FAQs from "../../components/Common/FAQs";
import sipBanner from "../../assets/images/MutualFund.jpeg";
import insuranceBanner from "../../assets/images/insurance.jpeg";
import investmentBanner from "../../assets/images/retirement.jpeg";
import RealEstate from "../../assets/images/RealEstate.jpeg";
import ExpandableSection from "../../components/UI/ExpandableSection";
import SIP from "../../components/Services/SIP";
import Insurance from "../../components/Services/Insurance";
import InvestmentProducts from "../../components/Services/InvestmentProducts";
import Loan from "../../components/Services/Loan";

const services = [
  { id: "sip", name: "Mutual Fund", icon: BarChart2 },
  { id: "insurance", name: "Insurance", icon: Shield },
  { id: "loan", name: "Loans", icon: LoaderPinwheel },
  { id: "investment", name: "Real Estate", icon: Briefcase },
];

const bannerImages = {
  sip: sipBanner,
  insurance: insuranceBanner,
  loan: investmentBanner,
  investment: RealEstate,
};

const bannerTitles = {
  sip: "",
  insurance: "",
  loan: "",
  investment: "",
};

const bannerDescriptions = {
  sip: "",
  insurance: "",
  loan: "",
  investment: "",
};

const Services = () => {
  const [activeSection, setActiveSection] = useState("sip");
  const renderContent = () => {
    switch (activeSection) {
      case "sip":
        return (
          <>
            <SIP />
            <div className="mt-8">
              <ExpandableSection title="What is a SIP?">
                <p className="text-secondary-600">
                  Imagine planting a seed today and watching it grow into a lush
                  tree over time. That's the magic of a Systematic Investment
                  Plan (SIP). It's a disciplined investment approach where you
                  invest a fixed amount at regular intervals—be it weekly,
                  monthly, or quarterly—into mutual funds. SIPs harness the
                  power of compounding and rupee-cost averaging, allowing your
                  money to grow exponentially over time while mitigating market
                  volatility.
                </p>
              </ExpandableSection>
              <ExpandableSection title="Product Offerings">
                <ul className="list-disc pl-5 space-y-2 text-secondary-600">
                  <li>
                    <strong>Dream Builder SIP:</strong> Perfect for those aiming
                    to fulfill long-term goals like buying a home or funding
                    education.
                  </li>
                  <li>
                    <strong>Wealth Accumulator SIP:</strong> Ideal for investors
                    looking to build substantial wealth over time with higher
                    risk appetite.
                  </li>
                  <li>
                    <strong>Retirement Bliss SIP:</strong> Designed to secure
                    your golden years with a steady growth plan.
                  </li>
                  <li>
                    <strong>Tax Saver SIP:</strong> Combine wealth creation with
                    tax benefits under Section 80C.
                  </li>
                  <li>
                    <strong>Child's Future SIP:</strong> Invest in your child's
                    aspirations and ensure they have the financial support they
                    need.
                  </li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="How to Start">
                <ol className="list-decimal pl-5 space-y-2 text-secondary-600">
                  <li>
                    <strong>Select Your SIP Plan:</strong> Choose a plan that
                    aligns with your financial goals and risk tolerance.
                  </li>
                  <li>
                    <strong>Complete Quick Registration:</strong> Fill out a
                    simple form online or visit our branch for personalized
                    assistance.
                  </li>
                  <li>
                    <strong>Start Investing:</strong> Set up auto-debit
                    instructions and let your wealth creation journey begin.
                  </li>
                </ol>
                <p className="mt-4">
                  Our dedicated team is here to guide you at every step,
                  ensuring a smooth and rewarding experience.
                </p>
              </ExpandableSection>
            </div>
            <div className="mt-12">
              <FAQs category="sip" />
            </div>
          </>
        );
      case "insurance":
        return (
          <>
            <Insurance />
            <div className="mt-12">
              <FAQs category="insurance" />
            </div>
          </>
        );
      case "loan":
        return (
          <>
            <Loan />
            <div className="mt-12">
              <FAQs category="loan" />
            </div>
          </>
        );
      case "investment":
        return (
          <>
            <InvestmentProducts />
            <div className="mt-12">
              <FAQs category="investment" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Our Services
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === service.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-primary-600 hover:bg-primary-100"
              }`}
              onClick={() => setActiveSection(service.id)}
            >
              <service.icon className="w-5 h-5 mr-2" />
              {service.name}
            </button>
          ))}
        </div>

        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={bannerImages[activeSection]}
              alt="Banner"
              className="absolute inset-0 w-full h-full object-cover  "
            />
          </motion.div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                key={`${activeSection}-content`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  {bannerTitles[activeSection]}
                </h2>
                <p className="text-xl text-white/90">
                  {bannerDescriptions[activeSection]}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-soft p-8 mb-16"
        >
          {renderContent()}
        </motion.div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Expert Guidance
              </h3>
              <p className="text-secondary-600">
                Our team of certified financial advisors is dedicated to helping
                you make informed decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Customized Solutions
              </h3>
              <p className="text-secondary-600">
                We understand that one size doesn't fit all; we tailor our
                products to meet your unique needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Technology-Driven
              </h3>
              <p className="text-secondary-600">
                Utilize our state-of-the-art online platforms for seamless
                investing and portfolio tracking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Transparent Processes
              </h3>
              <p className="text-secondary-600">
                We believe in building trust through complete transparency in
                our operations.
              </p>
            </div>
          </div>
          <div className="text-center relative mt-12 pt-4">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-400/20 rounded-full blur-xl"></div>
            </div>

            <Link
              to="/contact"
              className="relative z-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
