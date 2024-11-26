import React, { useState } from "react";
import InputField from "../UI/InputField";
import ResultDisplay from "../UI/ResultDisplay";

const MutualFundCalculator = () => {
  const [investment, setInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  const calculateReturns = () => {
    const monthlyRate = returnRate / 12 / 100;
    const months = years * 12;
    const futureValue =
      investment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    return Math.round(futureValue);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">
        Mutual Fund Calculator
      </h4>
      <InputField
        label="Monthly Investment"
        value={investment}
        onChange={setInvestment}
        min={500}
        max={1000000}
        step={500}
      />
      <InputField
        label="Investment Period (Years)"
        value={years}
        onChange={setYears}
        min={1}
        max={40}
        step={1}
      />
      <InputField
        label="Expected Return Rate (%)"
        value={returnRate}
        onChange={setReturnRate}
        min={1}
        max={30}
        step={0.5}
      />
      <ResultDisplay label="Estimated Returns" value={calculateReturns()} />
    </div>
  );
};

export default MutualFundCalculator;
