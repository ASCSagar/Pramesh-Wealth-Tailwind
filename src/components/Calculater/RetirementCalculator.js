import React, { useState } from "react";
import InputField from "../UI/InputField";
import ResultDisplay from "../UI/ResultDisplay";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);

  const calculateCorpusNeeded = () => {
    const years = retirementAge - currentAge;
    const inflationAdjustedExpense =
      monthlyExpense * Math.pow(1 + inflation / 100, years);
    const corpusNeeded = inflationAdjustedExpense * 12 * 20; // Assuming 20 years post-retirement
    return Math.round(corpusNeeded);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">
        Retirement Calculator
      </h4>
      <InputField
        label="Current Age"
        value={currentAge}
        onChange={setCurrentAge}
        min={18}
        max={100}
        step={1}
      />
      <InputField
        label="Retirement Age"
        value={retirementAge}
        onChange={setRetirementAge}
        min={45}
        max={100}
        step={1}
      />
      <InputField
        label="Monthly Expense"
        value={monthlyExpense}
        onChange={setMonthlyExpense}
        min={10000}
        max={1000000}
        step={1000}
      />
      <InputField
        label="Expected Inflation (%)"
        value={inflation}
        onChange={setInflation}
        min={1}
        max={15}
        step={0.5}
      />
      <ResultDisplay
        label="Retirement Corpus Needed"
        value={calculateCorpusNeeded()}
      />
    </div>
  );
};

export default RetirementCalculator;
