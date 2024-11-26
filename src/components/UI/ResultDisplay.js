import React from "react";

const ResultDisplay = ({ label, value }) => (
  <div className="bg-white p-4 rounded-xl shadow-soft">
    <p className="text-lg font-semibold text-primary-800">
      {label}:{" "}
      <span className="text-secondary-600">₹{value.toLocaleString()}</span>
    </p>
  </div>
);

export default ResultDisplay;
