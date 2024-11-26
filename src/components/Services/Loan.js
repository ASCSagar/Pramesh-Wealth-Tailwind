import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tabContent = {
  loan: {
    items: [
      {
        name: "Personal Loan",
        description:
          "A personal loan is a loan that does not require collateral or security and is offered with minimal documentation. You can use the funds from this loan for any legitimate financial need. Like any other loan, you must repay it accordance to the agreed terms with the bank.",
      },
      {
        name: "Business Loan",
        description:
          "Those whose business has been profit making for the previous 2 years. The business should have a Minimal Annual Income (ITR) of Rs. 1.5 lakhs per annum. The applicant should be at least 21 years at the time of applying for the loan, and should be no older than 65 years at the time of loan maturity.",
      },
      {
        name: "Education Loan",
        description:
          "In either case, an education loan is a good idea and a commonly sought after resort. Pursuing higher studies usually involves high fees and an education loan comes in handy at this point. Banks provide education loans for graduation/PG, diploma or professional courses, at attractive interest rates. To get a loan from a lender, you generally have to pledge security such as house property, fixed deposits, shares, bond, etc., to take the loan. There is no margin requirement if you apply for a loan within this limit through a scheduled commercial bank under the CGFSEL scheme.",
      },
      {
        name: "Commercial Purchase",
        description:
          "A commercial purchase agreement allows for a seller to make a deal with an eligible buyer to transfer ownership of their real estate in exchange for cash or other trade. The buyer will commonly be required to deposit earnest money, known as “consideration”, in order for the contract to be valid.",
      },
      {
        name: "Home Loan",
        description:
          "A home loan is a secured loan that is obtained to purchase a property by offering it as collateral. Home loans offer high-value funding at economical interest rates and for long tenors. They are repaid through EMIs. After repayment, the property's title is transferred back to the borrower.",
      },
      {
        name: "Balance Transfer",
        description:
          "A balance transfer is moving a debt balance from one account to another account. The most common type of balance transfer is shifting debt from one credit card to another credit card. Most often, people transfer a balance in order to take advantage of a lower interest rate.",
      },
      {
        name: "Top Up",
        description:
          "A Top up loan meaning an extra loan is a financing option that is offered over and above the existing loan amount for products such as home loan and personal loan. The top-up loan is offered to customers who have an existing relationship with the lender, have a good credit score and have repayment ability",
      },
    ],
    ctaText: "Contact us For a Quote",
  },
};

const Loan = () => {
  const activeTab = "loan";
  return (
    <section className="mb-12 bg-gradient-to-b from-primary-50 to-white p-8 rounded-2xl shadow-soft">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
        We are offering all types of Loan services …
      </h2>
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
            {tabContent[activeTab].icon}
            <h3 className="text-3xl font-semibold mb-4 text-primary-800">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-primary-600 mb-6">
              {tabContent[activeTab].description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {tabContent[activeTab].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300"
              >
                <h4 className="font-semibold text-lg mb-2 text-primary-700">
                  {item.name}
                </h4>
                <p className="text-primary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {tabContent[activeTab].ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Loan;
