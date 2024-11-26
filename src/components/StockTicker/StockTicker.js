import React, { useEffect, useState } from "react";

const tickerStyles = `
  @keyframes ticker {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-ticker {
    animation: ticker 30s linear infinite;
  }

  .animate-ticker:hover {
    animation-play-state: paused;
  }
`;

const StockTicker = () => {
  const [stockData, setStockData] = useState([
    { symbol: "SENSEX", price: "60,000.00", change: "+1.2%" },
    { symbol: "NIFTY", price: "18,000.00", change: "+0.8%" },
    { symbol: "RELIANCE", price: "2,500.00", change: "+2.1%" },
    { symbol: "TCS", price: "3,200.00", change: "-0.5%" },
    { symbol: "HDFC", price: "1,500.00", change: "+1.5%" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStockData((prevData) =>
        prevData.map((stock) => ({
          ...stock,
          price: (
            parseFloat(stock.price.replace(",", "")) +
            (Math.random() - 0.5) * 10
          ).toFixed(2),
          change: `${((Math.random() - 0.5) * 4).toFixed(1)}%`,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary-800 text-white py-2 overflow-hidden">
      <style>{tickerStyles}</style>
      <div className="flex animate-ticker">
        {stockData.concat(stockData).map((stock, index) => (
          <div key={index} className="flex items-center mx-4 whitespace-nowrap">
            <span className="font-bold">{stock.symbol}</span>
            <span className="ml-2">{stock.price}</span>
            <span
              className={`ml-2 ${
                stock.change.startsWith("-") ? "text-red-400" : "text-green-400"
              }`}
            >
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;
