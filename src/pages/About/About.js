import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  History,
  Target,
  Users,
  Award,
  Heart,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import Awards from "../../components/About/Awards";
import MissionVision from "../../components/About/MissionVision";
import CompanyHistory from "../../components/About/CompanyHistory";
import LeadershipTeam from "../../components/About/LeadershipTeam";

const ExpandableSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary-200 last:border-b-0">
      <button
        className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-primary-800">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-5"
          >
            <div className="text-primary-600 leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About = () => {
  const [activeSection, setActiveSection] = useState("history");

  const sections = [
    { id: "history", name: "Our History", icon: History },
    { id: "mission", name: "Mission & Vision", icon: Target },
    { id: "leadership", name: "Leadership Team", icon: Users },
    { id: "awards", name: "Awards", icon: Award },
    { id: "values", name: "Our Values", icon: Heart },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "history":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-2xl font-semibold text-primary-800 mb-6">
                Company Timeline
              </h3>
              <CompanyHistory />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h3 className="text-2xl font-semibold text-primary-800 mb-6">
                  Our Story
                </h3>
                <ExpandableSection title="Our Founding Story">
                  <p className="text-secondary-600">
                    Founded in 2001, Pramesh Wealth Pvt. Ltd. has grown to
                    become one of the Leading Financial Services Providers. Our
                    wide network spans more than 5 own branches in Gujarat and
                    serves an esteemed clientele of 10000+ investors.
                  </p>
                  <p className="mt-2 text-secondary-600">
                    Presently, the company is engaged in multiple areas of
                    Financial Services -- Mutual Fund, Insurance, Fixed Income
                    Securities, Corporate Real Estate Agent, Various Types of
                    Loan arrangement as Direct Selling Agent with reputed Banks,
                    PMS, Corporate FDs, NCD, Bonds.
                  </p>
                </ExpandableSection>

                <div className="mt-6">
                  <ExpandableSection title="Our Approach">
                    <p className="text-secondary-600">
                      Over the stages of your lifetime, wealth will play
                      different roles for you. At Pramesh Wealth, first, we
                      understand Clients' financial needs/goals, risk appetite,
                      Investment Time Horizons etc., and offer clients a
                      comprehensive suite of Wealth Creation Services that match
                      clients' financial and lifestyle needs/goals.
                    </p>
                    <p className="mt-2 text-secondary-600">
                      Our Professional and Dedicated Members of Team to help
                      clients carefully plan to afford their life's necessities,
                      achieve a comfortable lifestyle, feel confident about
                      financial security and help others in meaningful ways -
                      according to clients' unique financial and lifetime
                      needs/goals.
                    </p>
                    <p className="mt-2 text-secondary-600">
                      At Pramesh Wealth Pvt. Ltd., we deliver our services on a
                      personalized level, in the context of a one-on-one
                      relationship with an experienced financial team. The
                      management team consists of professionals with in-depth
                      financial expertise in Financial Investment Services.
                    </p>
                  </ExpandableSection>
                </div>
              </div>
            </div>
          </div>
        );
      case "mission":
        return (
          <>
            <MissionVision />
            <div className="mt-8">
              <ExpandableSection title="Extended Mission">
                <p className="text-secondary-600">
                  To help those who are at the bottom of the pyramid. To work
                  with vigour, dedication and innovation to achieve excellence
                  in service, quality, reliability, safety and customer care as
                  the ultimate goal. To earn the trust and confidence of all
                  stakeholders, exceeding their expectations and making the
                  Company a respected household name.
                </p>
              </ExpandableSection>
              <ExpandableSection title="Extended Vision">
                <p className="text-secondary-600">
                  To attain globally best standards and become a world-class
                  financial services enterprise -- guided by its purpose to move
                  towards a greater degree of sophistication and maturity.
                </p>
              </ExpandableSection>
            </div>
          </>
        );
      case "leadership":
        return <LeadershipTeam />;
      case "awards":
        return <Awards />;
      case "values":
        return (
          <div>
            <p className="mb-4 text-secondary-600">
              To our customers, we are committed to providing quality products
              and services that consistently represent an exceptional value and
              result in high customer satisfaction.
            </p>
            <p className="mb-4 text-secondary-600">
              We're here to help our clients in Creating, Managing and
              protecting wealth by ethical and professional financial services
              by having concept of Long Term, Systematic investment in line with
              investment objective of the clients.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          About Pramesh Wealth Pvt Ltd
        </h1>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-primary-700">
            Build Your Income The Right Way
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-primary-600 hover:bg-primary-100"
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              <section.icon className="w-5 h-5 mr-2" />
              {section.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-b from-primary-50 to-white rounded-2xl shadow-soft p-8 mb-16"
        >
          {renderContent()}
        </motion.div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">
            Join Our Team
          </h2>
          <p className="text-center mb-6 text-secondary-600">
            We're always looking for talented individuals to join our mission.
            Explore career opportunities with us and be part of our journey to
            become a world-class financial services enterprise.
          </p>
          <div className="text-center relative">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-400/20 rounded-full blur-xl"></div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="relative z-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
