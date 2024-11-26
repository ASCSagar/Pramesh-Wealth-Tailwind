import React, { useState } from "react";
import InputField from "../UI/InputField";
import ResultDisplay from "../UI/ResultDisplay";

const TaxSavingCalculator = () => {
  const [income, setIncome] = useState(1000000);
  const [investment, setInvestment] = useState(150000);

  const calculateTaxSaved = () => {
    // Simplified tax calculation for demonstration
    const taxWithoutInvestment =
      income > 1000000
        ? (income - 1000000) * 0.3 + 112500
        : (income - 500000) * 0.2 + 12500;
    const taxableIncomeAfterInvestment = Math.max(income - investment, 500000);
    const taxWithInvestment =
      taxableIncomeAfterInvestment > 1000000
        ? (taxableIncomeAfterInvestment - 1000000) * 0.3 + 112500
        : (taxableIncomeAfterInvestment - 500000) * 0.2 + 12500;
    return Math.round(Math.max(taxWithoutInvestment - taxWithInvestment, 0));
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">
        Tax Saving Calculator
      </h4>
      <InputField
        label="Annual Income"
        value={income}
        onChange={setIncome}
        min={250000}
        max={10000000}
        step={10000}
      />
      <InputField
        label="Section 80C Investment"
        value={investment}
        onChange={(value) => setInvestment(Math.min(value, 150000))}
        min={0}
        max={150000}
        step={1000}
      />
      <ResultDisplay label="Estimated Tax Saved" value={calculateTaxSaved()} />
    </div>
  );
};

export default TaxSavingCalculator;
