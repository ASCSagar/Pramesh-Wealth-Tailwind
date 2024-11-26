import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="mb-6 bg-white rounded-lg shadow-soft">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-primary-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableSection;
