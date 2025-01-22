import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, PiggyBank, ArrowRight, House } from "lucide-react";
import FixedDepositCalculator from "../Calculater/FixedDepositCalculator";

const products = {
  bondsData: {
    title: "Bonds/Ncds",
    icon: <TrendingUp className="w-12 h-12 mb-4 text-primary-600" />,
    description:
      "Bonds are an excellent investment choice for those seeking steady returns with minimal risk. By lending your money to governments or corporations, you earn regular interest while preserving your capital.",
    items: [
      {
        name: "Bonds",
        description: "Secure Growth with Stability",
        fullDescription:
          "Bonds are an excellent investment choice for those seeking steady returns with minimal risk. By lending your money to governments or corporations, you earn regular interest while preserving your capital.",
        features: [
          "Low-risk investment option for stability.",
          "Regular interest income through coupon payments.",
          "Diversification to balance your portfolio.",
          "Wide range of options: government bonds, corporate bonds, tax-free bonds, and more.",
        ],
        idealFor:
          "Investors looking for consistent returns and capital preservation.",
      },
      {
        name: "Non-Convertible Debentures (NCDs)",
        description: "High Yields with Fixed Tenures",
        fullDescription:
          "Non-Convertible Debentures (NCDs) provide higher returns compared to traditional savings options. Issued by companies, NCDs are designed for investors seeking predictable income over a fixed period.",
        features: [
          "Higher interest rates than fixed deposits.",
          "Fixed tenure with predetermined returns.",
          "Secured and unsecured options based on your risk appetite.",
          "Monthly, quarterly, or annual interest payout options.",
        ],
        idealFor:
          "Investors looking for high-yield, fixed-income investments with manageable risk.",
      },
    ],
    cta: "Start Investing in Bonds and NCDs",
  },
  fixedDeposits: {
    title: "Fixed Deposits",
    icon: <PiggyBank className="w-12 h-12 mb-4 text-secondary-600" />,
    description:
      "Secure your savings with our fixed deposit options. Enjoy guaranteed returns and the safety of your principal amount.",
    items: [
      {
        name: "Attractive Interest Rates",
        description: "Competitive rates for better returns",
      },
      {
        name: "Flexible Tenures",
        description: "Choose from short to long-term options",
      },
      {
        name: "Cumulative & Non-Cumulative Options",
        description: "Reinvest or receive periodic payouts",
      },
      {
        name: "Tax Saver FD",
        description: "Save tax under Section 80C with a 5-year lock-in",
      },
    ],
    calculator: <FixedDepositCalculator />,
    cta: "Open a Fixed Deposit Account",
  },
  Real_Estate: {
    title: "Real Estate",
    icon: <House className="w-12 h-12 mb-4 text-primary-600" />,
    description:
      "Plan for your golden years with our retirement solutions. Ensure financial independence and peace of mind post-retirement.",
    items: [
      {
        name: "BUY",
        description:
          "Real estate is a class of 'real property' that includes land and anything permanently attached to it, whether natural or man-made. You can invest in real estate directly by purchasing a home, rental property or other property, or indirectly through a real estate investment trust (REIT).",
      },
      {
        name: "SELL",
        description:
          "The most popular way is to buy an investment property and slowly build up your portfolio. Generally, there are two primary ways to make money from real estate assets — appreciation, which is an increase in property value over a period of time, and rental income collected by renting out the property to tenants.",
      },
      {
        name: "RENT",
        description:
          "Rental income is any payment you receive for the use or occupation of property. You must report rental income for all your properties. In addition to amounts you receive as normal rent payments, there are other amounts that may be rental income and must be reported on your tax return.",
      },
    ],
    cta: "Secure Your Retirement",
  },
};

const InvestmentProducts = () => {
  const [activeProduct, setActiveProduct] = useState("bondsData");

  const renderContent = () => {
    const product = products[activeProduct];

    if (activeProduct === "bondsData") {
      return (
        <div className="space-y-8">
          {product.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-50 p-6 rounded-xl shadow-soft"
            >
              <h4 className="text-2xl font-semibold mb-3 text-primary-800">
                {item.name}
              </h4>
              <h5 className="text-xl font-medium mb-4 text-primary-700">
                {item.description}
              </h5>
              <p className="text-secondary-600 mb-6">{item.fullDescription}</p>

              <div className="mb-6">
                <h6 className="text-lg font-medium mb-3 text-primary-700">
                  {item.name === "Bonds"
                    ? "Why Choose Bonds?"
                    : "Key Features:"}
                </h6>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-secondary-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="text-primary-700">
                  <strong>Ideal for:</strong> {item.idealFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    return (
      <div>
        <h4 className="text-xl font-semibold mb-4 text-primary-700">
          Key Features
        </h4>
        <ul className="space-y-4">
          {product.items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-50 p-4 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300"
            >
              <h5 className="font-semibold text-lg mb-2 text-primary-700">
                {item.name}
              </h5>
              <p className="text-secondary-600">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="mb-12 bg-gradient-to-b from-primary-50 to-white p-8 rounded-2xl shadow-soft">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
        Investment Products
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(products).map((product) => (
          <motion.button
            key={product}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeProduct === product
                ? "bg-primary-500 text-white shadow-md"
                : "bg-white text-primary-600 hover:bg-primary-100"
            }`}
            onClick={() => setActiveProduct(product)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {products[product].title}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activeProduct}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-xl shadow-soft"
      >
        <div className="text-center mb-6">
          {products[activeProduct].icon}
          <h3 className="text-3xl font-semibold mb-4 text-primary-800">
            {products[activeProduct].title}
          </h3>
          <p className="text-secondary-600 mb-6">
            {products[activeProduct].description}
          </p>
        </div>

        <div
          className={`grid gap-8 mb-8 ${
            products[activeProduct].calculator
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {renderContent()}
          {products[activeProduct].calculator && (
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary-700">
                Calculator
              </h4>
              {products[activeProduct].calculator}
            </div>
          )}
        </div>

        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {products[activeProduct].cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvestmentProducts;
