import React from "react";

const CalculatorWrapper = ({ title, children }) => {
  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">{title}</h4>
      {children}
    </div>
  );
};

export default CalculatorWrapper;
