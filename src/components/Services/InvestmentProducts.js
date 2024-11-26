import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  PiggyBank,
  Clock,
  Calculator,
  ArrowRight,
} from "lucide-react";
import FixedDepositCalculator from "../../../components/Calculater/FixedDepositCalculator";
import MutualFundCalculator from "../../../components/Calculater/MutualFundCalculator";
import RetirementCalculator from "../../../components/Calculater/RetirementCalculator";
import TaxSavingCalculator from "../../../components/Calculater/TaxSavingCalculator";

const products = {
  mutualFunds: {
    title: "Mutual Funds",
    icon: <TrendingUp className="w-12 h-12 mb-4 text-primary-600" />,
    description:
      "Diversify your portfolio with our range of mutual funds. Professional management and diversification help you achieve your financial goals.",
    items: [
      {
        name: "Equity Funds",
        description: "Invest in stocks for potential high returns",
      },
      {
        name: "Debt Funds",
        description: "Stable returns through fixed-income securities",
      },
      {
        name: "Hybrid Funds",
        description: "Balance of equity and debt for moderate risk",
      },
      {
        name: "Index Funds",
        description: "Track market indices for passive investing",
      },
      {
        name: "International Funds",
        description: "Global exposure to diversify your portfolio",
      },
    ],
    calculator: <MutualFundCalculator />,
    cta: "Start Investing in Mutual Funds",
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
  retirementPlans: {
    title: "Retirement Plans",
    icon: <Clock className="w-12 h-12 mb-4 text-primary-600" />,
    description:
      "Plan for your golden years with our retirement solutions. Ensure financial independence and peace of mind post-retirement.",
    items: [
      {
        name: "Pension Plans",
        description: "Regular income stream after retirement",
      },
      {
        name: "Deferred Annuity",
        description: "Start receiving payments at a future date",
      },
      {
        name: "Immediate Annuity",
        description: "Begin receiving payments right away",
      },
      {
        name: "Gratuity Plans",
        description: "Employer-provided retirement benefit",
      },
    ],
    calculator: <RetirementCalculator />,
    cta: "Secure Your Retirement",
  },
  taxSaving: {
    title: "Tax-saving Instruments",
    icon: <Calculator className="w-12 h-12 mb-4 text-secondary-600" />,
    description:
      "Maximize your savings with tax-efficient investments. Reduce your tax liability while growing your wealth.",
    items: [
      {
        name: "ELSS Funds",
        description: "Equity-linked savings with tax benefits",
      },
      {
        name: "Public Provident Fund (PPF)",
        description: "Long-term savings with tax-free returns",
      },
      {
        name: "National Pension System (NPS)",
        description: "Government-backed retirement scheme",
      },
      {
        name: "Fixed Deposits (Tax Saver)",
        description: "FDs with tax deduction under Section 80C",
      },
    ],
    calculator: <TaxSavingCalculator />,
    cta: "Optimize Your Tax Savings",
  },
};

const InvestmentProducts = () => {
  const [activeProduct, setActiveProduct] = useState("mutualFunds");

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
          <p className="text-primary-600 mb-6">
            {products[activeProduct].description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary-700">
              Key Features
            </h4>
            <ul className="space-y-4">
              {products[activeProduct].items.map((item, index) => (
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
                  <p className="text-primary-600">{item.description}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary-700">
              Calculator
            </h4>
            {products[activeProduct].calculator}
          </div>
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
