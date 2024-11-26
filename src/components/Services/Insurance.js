import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Heart, Car, ArrowRight } from "lucide-react";

const tabContent = {
  life: {
    title: "Life Insurance",
    icon: <Shield className="w-12 h-12 mb-4 text-primary-600" />,
    description:
      "Term insurance and standard life insurance vary in that, term plans only pay death benefits in event of the policyholder's demise within the policy's term, but life insurance policies include both death and maturity payment to policyholders. The coverage lasts your entire life, and when you opt to cancel it, you receive a lump-sum payment.",
    items: [
      {
        name: "Term Life Insurance",
        description:
          "Term life insurance is a form of life insurance that ensures the sum of a defined benefit to a nominee if the insured person passes away, within a specific time. It can be renewed, converted to permanent coverage, or allowed to lapse when the policy expires. A person’s age, health, and life expectancy are considered when determining the premium of the term life insurance.",
      },
      {
        name: "Investment Plan",
        description:
          "If you want to develop wealth over time to achieve short- or long-term financial goals, investment plans are perfect. These plans are structured so that a portion of the premium is utilized to provide insurance cover. The remainder is put in a financial instrument. A policyholder's risk tolerance determines the amount of money invested.",
      },
      {
        name: "Savings Plan",
        description:
          "( Income - Saving ) = Expense These investment plans provide a methodical approach to saving and building a corpus, which provides consistent returns that enable you to achieve your future goals. In the event of the policyholder's unexpected death, these policies also cover the nominee or family.",
      },
    ],
    ctaText: "Contact us For a Quote",
  },
  health: {
    title: "Health Insurance",
    icon: <Heart className="w-12 h-12 mb-4 text-secondary-600" />,
    description:
      "Health insurance is a contract where an insurance company provides medical coverage. It covers medical expenses incurred on hospitalization, surgeries, day care procedures, etc. A health insurance policy either reimburses the medical costs or offers cashless treatment.",
    items: [
      {
        name: "Individual Health Plans",
        description:
          "An individual health insurance plan is a type of health insurance that covers the health care expenses of the insured individual. It pays for the hospitalization and surgical expenses of the policyholder up to the sum insured limit.",
      },
      {
        name: "Family Floater Plan",
        description:
          "A family floater health insurance, as the name suggests is a plan that is tailor made for families. It is similar to individual health plans in principle; the only difference is that it is extended to cover your entire family. This acts as an umbrella of coverage for the entire family and therefore the name.",
      },
      {
        name: "Group Health Insurance",
        description:
          "Group Health Insurance is a type of plan that provides insurance coverage to a group of members, usually a group of employees of a company or members of an organization.",
      },
      {
        name: "Critical Illness Insurance",
        description:
          "Critical illness insurance provides additional coverage for medical emergencies like heart attacks, strokes, or cancer. Because these emergencies or illnesses often incur greater-than-average medical costs, these policies pay out cash to help cover those overruns when traditional health insurance may fall short.",
      },
    ],
    ctaText: "Explore Health Coverage Options",
  },
  vehicle: {
    title: "Vehicle Insurance",
    icon: <Car className="w-12 h-12 mb-4 text-primary-600" />,
    description:
      "More popularly known as motor insurance, this type of insurance provides cover for loss or damage to any vehicle like car, two-wheeler or commercial vehicle, etc. This insurance helps mitigate monetary harms due to accidents causing damage to the vehicles.",
    items: [
      {
        name: "Car Insurance",
        description:
          "A car insurance policy is a contract between you, the car owner, and the insurance company. The policy covers the financial losses that you might suffer when you are using your car. These losses might arise when you hurt someone and become financially liable to pay for the injuries or when your own car is damaged or stolen. The coverage that you get depends on the type of car insurance plan that you buy.",
      },
      {
        name: "Two-Wheeler Insurance",
        description:
          "Two-wheeler insurance is a type of insurance that is mandatory in India. Falling under the General insurance product category, it helps protect people against accidents that take place on the road.",
      },
    ],
    ctaText: "Secure Your Assets Now",
  },
};

const Insurance = () => {
  const [activeTab, setActiveTab] = useState("life");

  return (
    <section className="mb-12 bg-gradient-to-b from-primary-50 to-white p-8 rounded-2xl shadow-soft">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
        Comprehensive Insurance Solutions
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(tabContent).map((tab) => (
          <motion.button
            key={tab}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-primary-500 text-white shadow-md"
                : "bg-white text-primary-600 hover:bg-primary-100"
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
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

export default Insurance;