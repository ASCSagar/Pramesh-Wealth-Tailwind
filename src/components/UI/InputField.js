import React from "react";
import { IndianRupee } from "lucide-react";

const InputField = ({ label, value, onChange, min, max, step }) => (
  <div className="mb-4 relative">
    <label className="block text-sm font-medium text-primary-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IndianRupee className="h-5 w-5 text-primary-400" />
      </span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="pl-10 mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
      />
    </div>
  </div>
);

export default InputField;
