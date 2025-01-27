import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, House } from "lucide-react";

const products = {
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
        features: [
          "Direct ownership of property",
          "Potential for appreciation",
          "Tax benefits",
          "Regular rental income potential",
        ],
        idealFor:
          "Long-term investors looking for stable returns and asset appreciation",
      },
      {
        name: "SELL",
        description:
          "The most popular way is to buy an investment property and slowly build up your portfolio. Generally, there are two primary ways to make money from real estate assets — appreciation, which is an increase in property value over a period of time, and rental income collected by renting out the property to tenants.",
        features: [
          "Market timing opportunities",
          "Capital gains potential",
          "Portfolio rebalancing",
          "Liquidity generation",
        ],
        idealFor:
          "Investors looking to capitalize on market conditions or rebalance portfolios",
      },
      {
        name: "RENT",
        description:
          "Rental income is any payment you receive for the use or occupation of property. You must report rental income for all your properties. In addition to amounts you receive as normal rent payments, there are other amounts that may be rental income and must be reported on your tax return.",
        features: [
          "Steady income stream",
          "Property maintenance responsibility",
          "Tax implications",
          "Tenant management",
        ],
        idealFor:
          "Property owners seeking regular income and long-term appreciation",
      },
    ],
    cta: "Explore Real Estate Options",
  },
};

const InvestmentProducts = () => {
  const [activeProduct, setActiveProduct] = useState("Real_Estate");

  const renderContent = () => {
    const product = products[activeProduct];

    return (
      <div className="space-y-8">
        {product?.items.map((item, index) => (
          <div key={index} className="bg-primary-50 p-6 rounded-xl shadow-soft">
            <h4 className="text-2xl font-semibold mb-3 text-primary-800">
              {item.name}
            </h4>
            <p className="text-secondary-600 mb-6">{item.description}</p>

            <div className="mb-6">
              <h6 className="text-lg font-medium mb-3 text-primary-700">
                Key Features:
              </h6>
              <ul className="space-y-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-secondary-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="text-primary-700">
                <strong>Ideal for:</strong> {item.idealFor}
              </p>
            </div>
          </div>
        ))}
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
          <button
            key={product}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeProduct === product
                ? "bg-primary-500 text-white shadow-md"
                : "bg-white text-primary-600 hover:bg-primary-100"
            }`}
            onClick={() => setActiveProduct(product)}
          >
            {products[product].title}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-soft">
        <div className="text-center mb-6">
          {products[activeProduct]?.icon}
          <h3 className="text-3xl font-semibold mb-4 text-primary-800">
            {products[activeProduct]?.title}
          </h3>
          <p className="text-secondary-600 mb-6">
            {products[activeProduct]?.description}
          </p>
        </div>

        <div className="grid gap-8 mb-8 grid-cols-1">{renderContent()}</div>

        <div className="text-center">
          <Link
            to="/contact"
            className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {products[activeProduct]?.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestmentProducts;
