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
import FixedDepositCalculator from "../Calculater/FixedDepositCalculator";
import MutualFundCalculator from "../Calculater/MutualFundCalculator";
import RetirementCalculator from "../Calculater/RetirementCalculator";
import TaxSavingCalculator from "../Calculater/TaxSavingCalculator";

const products = {
  mutualFunds: {
    title: "Mutual Funds",
    icon: <TrendingUp className="w-12 h-12 mb-4 text-primary-600" />,
    description:
      "A Mutual Fund is a financial intermediary which allows a group of investors to pool in their money with a predetermined investment objective. A qualified fund manager is appointed, who is responsible for investing the pooled money into specific securities and asset classes (usually stocks or bonds). When you invest in a mutual fund, you buy a share (or portion) of the mutual fund. We advise and service clients who wish to invest in any mutual fund available in the market. We also provide the platform to buy, sell and monitor your portfolio online.",
    items: [
      {
        name: "Expert Management",
        description:
          "Mutual Funds are managed by qualified and experienced professionals who have access to company research reports, research analysts, critical and timely market information.",
      },
      {
        name: "Reduced Risks",
        description:
          "Mutual Funds help diversify your portfolio and therefore reduce your overall investment risk. To achieve a comparable diversified equity portfolio, you would not only require a lot of cash, your risk is also completely dependent on how those particular companies perform. Mutual funds offer you diversification across and within specific asset class.",
      },
      {
        name: "Speedy access to your money",
        description:
          "Investors in open-ended mutual funds can buy and sell units at Net Asset Value (NAV) which is declared on a daily basis.",
      },
      {
        name: "Affordability",
        description:
          "Minimum amount required to in a mutual fund is very low. For that amount, you still own a diversified portfolio.",
      },
      {
        name: "Tax Benefits",
        description:
          "Equity Linked Savings Schemes (ELSS) offer tax rebates to investors under Section 80C of the Income Tax Act. Also, Capital Gains from the above Mutual Funds are tax-free in the hands of the investor.",
      },
      {
        name: "Lower Costs",
        description:
          "Mutual Funds buy and sell large amounts of securities at a time, thus help reducing transaction costs. Also, Mutual Funds in India have No Entry Load.",
      },
      {
        name: "Transparency",
        description:
          "Entire portfolio of the Mutual Fund scheme is disclosed to investors on a regular basis. One of the few transparent investment vehicles available in the market today.",
      },
      {
        name: "Regulated for investor protection",
        description:
          "The Mutual Fund industry is regulated by Association of Mutual Funds of India (AMFI) in order to safeguard investors’ interest.",
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
