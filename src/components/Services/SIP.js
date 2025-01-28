import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  IndianRupee,
  Calendar,
  TrendingUp,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const mutualFundTypes = [
  {
    title: "Equity Funds",
    description: "Invest primarily in stocks; suitable for long-term growth.",
  },
  {
    title: "Debt Funds",
    description:
      "Invest in bonds and fixed-income securities; suitable for stable returns.",
  },
  {
    title: "Hybrid Funds",
    description: "Combine equity and debt investments for a balanced approach.",
  },
  {
    title: "Index Funds",
    description:
      "Track and replicate the performance of a specific market index (e.g., Nifty 50).",
  },
  {
    title: "Sectoral/Thematic Funds",
    description:
      "Focus on specific sectors or themes, such as technology or healthcare.",
  },
];

const SIP = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [chartData, setChartData] = useState([]);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const calculateSIP = () => {
    const monthlyRate = expectedReturnRate / 12 / 100;
    const months = investmentPeriod * 12;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    return Math.round(futureValue);
  };

  const totalInvestment = monthlyInvestment * investmentPeriod * 12;
  const estimatedReturns = calculateSIP() - totalInvestment;

  useEffect(() => {
    const data = [];
    for (let year = 0; year <= investmentPeriod; year++) {
      const monthlyRate = expectedReturnRate / 12 / 100;
      const months = year * 12;
      const invested = monthlyInvestment * months;
      const futureValue =
        monthlyInvestment *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
      data.push({
        year,
        invested: Math.round(invested),
        totalValue: Math.round(futureValue),
      });
    }
    setChartData(data);
  }, [monthlyInvestment, investmentPeriod, expectedReturnRate]);

  const InputRange = ({
    value,
    setValue,
    min,
    max,
    step,
    icon: Icon,
    label,
    tooltip,
  }) => (
    <div className="mb-8 relative">
      <label className="block text-sm font-medium text-primary-700 mb-2 flex items-center">
        <Icon className="w-5 h-5 mr-2 text-primary-500" />
        {label}: {typeof value === "number" ? value.toLocaleString() : value}
        {tooltip && (
          <HelpCircle
            className="w-4 h-4 ml-2 text-primary-400 cursor-help"
            onMouseEnter={() => setActiveTooltip(label)}
            onMouseLeave={() => setActiveTooltip(null)}
          />
        )}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
      />
      <AnimatePresence>
        {activeTooltip === label && tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-10 p-2 mt-1 text-sm text-white bg-primary-700 rounded-md shadow-lg"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const ResultCard = ({ title, value, color }) => (
    <motion.div
      className={`bg-${color}-100 p-6 rounded-xl shadow-md`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-lg font-semibold mb-2 text-primary-700">{title}</h3>
      <p className={`text-2xl font-bold text-${color}-600`}>
        ₹{value.toLocaleString()}
      </p>
    </motion.div>
  );

  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold mb-6 text-center gradient-text">
        Invest Smartly to Grow Your Wealth
      </h2>
      <p className="mb-8 text-lg text-secondary-700 text-center max-w-3xl mx-auto">
        Investing in mutual funds is a smart option to grow your wealth. Mutual
        funds pool money from various investors to buy a diversified portfolio
        of stocks, bonds, and other securities. This diversified approach
        reduces risk and allows you to benefit from professional fund
        management.
        <br />
        Mutual funds offer an easy entry point into the world of investing,
        making them an excellent choice for both beginners and experienced
        investors. With mutual funds, your money is managed by skilled fund
        managers who analyze the market and select the best investment
        opportunities.
      </p>

      <div className="bg-primary-50 p-8 rounded-2xl shadow-soft mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-primary-800">
          Types of Mutual Funds:
        </h3>
        <motion.ul
          className="space-y-4 list-disc pl-5"
          variants={listVariants}
          initial="hidden"
          animate="show"
        >
          {mutualFundTypes.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start"
            >
              <ArrowRight className="w-5 h-5 text-primary-500 mr-2 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-primary-700">{item.title}:</strong>{" "}
                {item.description}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-soft mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-primary-800 text-center">
          Key Features
        </h3>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={listVariants}
          initial="hidden"
          animate="show"
        >
          {[
            {
              title: "Professional Management",
              description: "Skilled fund managers make investment decisions.",
            },
            {
              title: "Diversification",
              description: "Spread your risk across various assets.",
            },
            {
              title: "Liquidity",
              description: "Easily buy and sell fund units as per your needs.",
            },
            {
              title: "Transparency",
              description: "Regular updates on the fund's performance.",
            },
            {
              title: "SIP Option",
              description:
                "Invest a fixed amount regularly for financial discipline.",
            },
          ].map((feature, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="bg-primary-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-semibold mb-2 text-primary-700">
                {feature.title}
              </h4>
              <p className="text-secondary-600">{feature.description}</p>
            </motion.li>
          ))}
        </motion.ul>
        <p className="text-center mt-8 text-secondary-700">
          Mutual funds provide a flexible and convenient way to grow your money
          over time. Start your investment journey today for a brighter
          financial future.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-soft mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          SIP Calculator
        </h2>

        <InputRange
          value={monthlyInvestment}
          setValue={setMonthlyInvestment}
          min={500}
          max={100000}
          step={500}
          icon={IndianRupee}
          label="Monthly Investment (₹)"
          tooltip="The amount you plan to invest each month in your SIP."
        />
        <InputRange
          value={investmentPeriod}
          setValue={setInvestmentPeriod}
          min={1}
          max={30}
          step={1}
          icon={Calendar}
          label="Investment Period (years)"
          tooltip="The total duration for which you plan to continue your SIP."
        />

        <InputRange
          value={expectedReturnRate}
          setValue={setExpectedReturnRate}
          min={1}
          max={30}
          step={0.5}
          icon={TrendingUp}
          label="Expected Return Rate (%)"
          tooltip="The annual rate of return you expect on your investments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ResultCard
            title="Total Investment"
            value={totalInvestment}
            color="primary"
          />
          <ResultCard
            title="Estimated Returns"
            value={estimatedReturns}
            color="secondary"
          />
          <ResultCard
            title="Total Value"
            value={calculateSIP()}
            color="primary"
          />
        </div>

        <div className="h-80 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="year" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#F3F4F6",
                  border: "none",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "#374151" }}
              />
              <Line
                type="monotone"
                dataKey="invested"
                stroke="#8E7CC3"
                strokeWidth={2}
                name="Invested Amount"
              />
              <Line
                type="monotone"
                dataKey="totalValue"
                stroke="#C3A47C"
                strokeWidth={2}
                name="Total Value"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="text-center relative">
        {/* Background gradient circles for effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-400/20 rounded-full blur-xl"></div>
        </div>

        {/* Button */}
        <Link
          to="/contact"
          className="relative z-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Start Your SIP Journey
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default SIP;
