import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, Shield, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import SIP from '../components/services/SIP';
import Insurance from '../components/services/Insurance';
import InvestmentProducts from '../components/services/InvestmentProducts';
import FAQs from '../components/common/FAQs';
import sipBanner from '../assets/images/sip.jpeg';
import insuranceBanner from '../assets/images/insurance.jpeg';
import investmentBanner from '../assets/images/retirement.jpeg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6 bg-white rounded-lg shadow-soft">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-primary-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
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

const Services = () => {
  const [activeSection, setActiveSection] = useState('sip');

  const services = [
    { id: 'sip', name: 'SIPs', icon: BarChart2 },
    { id: 'insurance', name: 'Insurance', icon: Shield },
    { id: 'investment', name: 'Investment Products', icon: Briefcase },
  ];

  const bannerImages = {
    sip: sipBanner,
    insurance: insuranceBanner,
    investment: investmentBanner
  };

  const bannerTitles = {
    sip: "",
    insurance: "",
    investment: ""
  };

  const bannerDescriptions = {
    sip: "",
    insurance: "",
    investment: ""
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'sip':
        return (
          <>
            <SIP />
            <div className="mt-8">
              <ExpandableSection title="What is a SIP?">
                <p>Imagine planting a seed today and watching it grow into a lush tree over time. That's the magic of a Systematic Investment Plan (SIP). It's a disciplined investment approach where you invest a fixed amount at regular intervals—be it weekly, monthly, or quarterly—into mutual funds. SIPs harness the power of compounding and rupee-cost averaging, allowing your money to grow exponentially over time while mitigating market volatility.</p>
              </ExpandableSection>
              <ExpandableSection title="Product Offerings">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Dream Builder SIP:</strong> Perfect for those aiming to fulfill long-term goals like buying a home or funding education.</li>
                  <li><strong>Wealth Accumulator SIP:</strong> Ideal for investors looking to build substantial wealth over time with higher risk appetite.</li>
                  <li><strong>Retirement Bliss SIP:</strong> Designed to secure your golden years with a steady growth plan.</li>
                  <li><strong>Tax Saver SIP:</strong> Combine wealth creation with tax benefits under Section 80C.</li>
                  <li><strong>Child's Future SIP:</strong> Invest in your child's aspirations and ensure they have the financial support they need.</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="How to Start">
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Select Your SIP Plan:</strong> Choose a plan that aligns with your financial goals and risk tolerance.</li>
                  <li><strong>Complete Quick Registration:</strong> Fill out a simple form online or visit our branch for personalized assistance.</li>
                  <li><strong>Start Investing:</strong> Set up auto-debit instructions and let your wealth creation journey begin.</li>
                </ol>
                <p className="mt-4">Our dedicated team is here to guide you at every step, ensuring a smooth and rewarding experience.</p>
              </ExpandableSection>
            </div>
            <div className="mt-12">
              <FAQs category="sip" />
            </div>
          </>
        );
        case 'insurance':
          return (
            <>
              <Insurance />
              <div className="mt-8">
                <ExpandableSection title="Life Insurance">
                <p className="mb-4">Life is full of uncertainties, but your family's financial security shouldn't be one of them. Our life insurance policies provide a safety net that ensures your loved ones are protected, no matter what life brings.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Pure Term Plan:</strong> High coverage at low premiums, offering financial protection to your family in your absence.</li>
                  <li><strong>Whole Life Plan:</strong> Coverage that lasts a lifetime, along with wealth accumulation benefits.</li>
                  <li><strong>Endowment Plan:</strong> Combine insurance with savings; get a lump sum on maturity or in case of unforeseen events.</li>
                  <li><strong>Unit-Linked Insurance Plans (ULIPs):</strong> Enjoy the dual benefits of investment and insurance.</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="Health Insurance">
                <p className="mb-4">Medical emergencies can be financially draining. Our comprehensive health insurance plans ensure you receive the best medical care without worrying about costs.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Individual Health Plans:</strong> Customized coverage catering to your specific health needs.</li>
                  <li><strong>Family Health Plans:</strong> One policy to protect your entire family.</li>
                  <li><strong>Senior Citizen Plans:</strong> Specially designed for the healthcare needs of our elders.</li>
                  <li><strong>Critical Illness Cover:</strong> Receive a lump sum on diagnosis of serious illnesses, aiding in recovery without financial stress.</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="General Insurance">
                <p className="mb-4">Safeguard the assets you've worked hard to acquire. Our general insurance products offer peace of mind against unforeseen events.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Motor Insurance:</strong> Comprehensive cover for cars and bikes, including third-party liabilities.</li>
                  <li><strong>Home Insurance:</strong> Protect your home and belongings from natural calamities, theft, and other risks.</li>
                  <li><strong>Travel Insurance:</strong> Journey with confidence; our plans cover medical emergencies, trip cancellations, and baggage loss.</li>
                  <li><strong>Personal Accident Insurance:</strong> Financial protection against accidental injuries or disabilities.</li>
                </ul>
              </ExpandableSection>
            </div>
            <div className="mt-12">
              <FAQs category="insurance" />
            </div>
          </>
        );
        case 'investment':
          return (
            <>
              <InvestmentProducts />
              <div className="mt-8">
                <ExpandableSection title="Mutual Funds">
                <p className="mb-4">Mutual funds are an excellent way to invest in a diversified portfolio managed by expert fund managers.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Equity Funds:</strong> Aim for higher returns by investing in stocks of companies across various sectors.</li>
                  <li><strong>Debt Funds:</strong> Stability and steady income through investments in bonds and money market instruments.</li>
                  <li><strong>Hybrid Funds:</strong> Balance risk and reward with a mix of equities and debts.</li>
                  <li><strong>Index Funds:</strong> Invest in funds that replicate market indices like NIFTY or SENSEX.</li>
                  <li><strong>International Funds:</strong> Gain exposure to global markets and diversify beyond domestic investments.</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="Fixed Deposits">
                <p className="mb-4">Fixed deposits are the bedrock of a stable investment portfolio.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Attractive Interest Rates:</strong> Enjoy competitive rates that beat traditional savings accounts.</li>
                  <li><strong>Flexible Tenures:</strong> Choose from short-term to long-term deposits based on your financial goals.</li>
                  <li><strong>Cumulative & Non-Cumulative Options:</strong> Opt for periodic interest payouts or let your interest compound.</li>
                  <li><strong>Tax Saver FD:</strong> Invest up to INR 1.5 lakh with a 5-year lock-in period and avail tax benefits under Section 80C.</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="Alternative Investments">
                <p className="mb-4">Explore unique opportunities to diversify your investment portfolio.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Real Estate Investment Trusts (REITs):</strong> Invest in real estate properties without the need to purchase physical property.</li>
                  <li><strong>Gold Bonds:</strong> Secure investment in gold with the added benefit of interest earnings.</li>
                  <li><strong>Peer-to-Peer Lending:</strong> Earn higher returns by lending directly to verified borrowers through our platform.</li>
                  <li><strong>Commodity Trading:</strong> Engage in trading commodities like gold, silver, and agricultural products.</li>
                </ul>
              </ExpandableSection>
            </div>
            <div className="mt-12">
              <FAQs category="investment" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Our Services
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button 
              key={service.id}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === service.id 
                  ? 'bg-primary-500 text-white shadow-lg' 
                  : 'bg-white text-primary-600 hover:bg-primary-100'
              }`}
              onClick={() => setActiveSection(service.id)}
            >
              <service.icon className="w-5 h-5 mr-2" />
              {service.name}
            </button>
          ))}
        </div>

        {/* Banner Section */}
        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${bannerImages[activeSection]})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                key={`${activeSection}-content`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  {bannerTitles[activeSection]}
                </h2>
                <p className="text-xl text-white/90">
                  {bannerDescriptions[activeSection]}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-soft p-8 mb-16"
        >
          {renderContent()}
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="bg-primary-50 rounded-2xl p-8 mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">Why Choose Us?</h2>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-soft">
          <h3 className="text-xl font-semibold mb-4 text-primary-700">Expert Guidance</h3>
          <p>Our team of certified financial advisors is dedicated to helping you make informed decisions.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft">
          <h3 className="text-xl font-semibold mb-4 text-primary-700">Customized Solutions</h3>
          <p>We understand that one size doesn't fit all; we tailor our products to meet your unique needs.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft">
          <h3 className="text-xl font-semibold mb-4 text-primary-700">Technology-Driven</h3>
          <p>Utilize our state-of-the-art online platforms for seamless investing and portfolio tracking.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft">
          <h3 className="text-xl font-semibold mb-4 text-primary-700">Transparent Processes</h3>
          <p>We believe in building trust through complete transparency in our operations.</p>
        </div>
      </div>
          <div className="text-center relative mt-12 pt-4">
      {/* Background gradient circles for effect */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-400/20 rounded-full blur-xl"></div>
        </div>
      
      {/* Button */}
      <Link 
          to="/contact" 
          className="relative z-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Contact us Today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Services;