import React, { useState } from "react";
import InputField from "../UI/InputField";
import ResultDisplay from "../UI/ResultDisplay";

const FixedDepositCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [tenure, setTenure] = useState(5);

  const calculateMaturityAmount = () => {
    const maturityAmount = principal * Math.pow(1 + rate / 100, tenure);
    return Math.round(maturityAmount);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">
        Fixed Deposit Calculator
      </h4>
      <InputField
        label="Principal Amount"
        value={principal}
        onChange={setPrincipal}
        min={1000}
        max={10000000}
        step={1000}
      />
      <InputField
        label="Interest Rate (%)"
        value={rate}
        onChange={setRate}
        min={1}
        max={15}
        step={0.1}
      />
      <InputField
        label="Tenure (Years)"
        value={tenure}
        onChange={setTenure}
        min={1}
        max={20}
        step={1}
      />
      <ResultDisplay
        label="Maturity Amount"
        value={calculateMaturityAmount()}
      />
    </div>
  );
};

export default FixedDepositCalculator;
