import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabContent = {
  Personal: {
    title: "Personal Loan",
    description:
      "A personal loan is a loan that does not require collateral or security and is offered with minimal documentation. You can use the funds from this loan for any legitimate financial need. Like any other loan, you must repay it accordance to the agreed terms with the bank.",
    ctaText: "Contact us now",
  },
  Business: {
    title: "Bussiness Loan",
    description:
      "Those whose business has been profit making for the previous 2 years. The business should have a Minimal Annual Income (ITR) of Rs. 1.5 lakhs per annum. The applicant should be at least 21 years at the time of applying for the loan, and should be no older than 65 years at the time of loan maturity.",
    ctaText: "Contact us now",
  },
  Education: {
    title: "Education Loan",
    description:
      "In either case, an education loan is a good idea and a commonly sought after resort. Pursuing higher studies usually involves high fees and an education loan comes in handy at this point. Banks provide education loans for graduation/PG, diploma or professional courses, at attractive interest rates. To get a loan from a lender, you generally have to pledge security such as house property, fixed deposits, shares, bond, etc., to take the loan. There is no margin requirement if you apply for a loan within this limit through a scheduled commercial bank under the CGFSEL scheme.",
    ctaText: "Contact us now",
  },
  Commercial_Purchase: {
    title: "Commercial Purchase",
    description:
      "A commercial purchase agreement allows for a seller to make a deal with an eligible buyer to transfer ownership of their real estate in exchange for cash or other trade. The buyer will commonly be required to deposit earnest money, known as 'consideration', in order for the contract to be valid.",
    ctaText: "Contact us now",
  },
  Home: {
    title: "Home Loan",
    description:
      "A home loan is a secured loan that is obtained to purchase a property by offering it as collateral. Home loans offer high-value funding at economical interest rates and long tenors. They are repaid through EMIs. After repayment, the property's title is transferred back to the borrower.",
    ctaText: "Contact us now",
  },
  Balance_Transfer: {
    title: "Balance Transfer",
    description:
      "A balance transfer is moving a debt balance from one account to another account. The most common type of balance transfer is shifting debt from one credit card to another credit card. Most often, people transfer a balance in order to take advantage of a lower interest rate.",
    ctaText: "Contact us now",
  },
  Top_Up: {
    title: "Top Up",
    description:
      "A top-up loan is a financing option offered over and above the existing loan amount for products such as home loan and personal loan. The top-up loan is offered to customers who have an existing relationship with the lender, have a good credit score and have repayment ability.",
    ctaText: "Contact us now",
  },
};

const Loan = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  return (
    <section className="mb-12 bg-gradient-to-b from-primary-50 to-white p-8 rounded-2xl shadow-soft">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
        We are offering all types of Loan services…
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(tabContent).map((tab) => (
          <motion.button
            key={tab}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-primary-500 text-white shadow-md"
                : "bg-white text-primary-600 hover:bg-primary-100"
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.replace(/_/g, " ")}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-soft"
        >
          <div className="text-center mb-6">
            <h3 className="text-3xl font-semibold mb-4 text-primary-800">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-secondary-600 mb-6">
              {tabContent[activeTab].description}
            </p>
            <motion.button
              className="px-8 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tabContent[activeTab].ctaText}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Loan;
