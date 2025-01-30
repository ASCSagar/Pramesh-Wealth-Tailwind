import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart2,
  Shield,
  Users,
  TrendingUp,
  PiggyBank,
  Clock,
  Calculator,
  LoaderPinwheel,
} from "lucide-react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatedCard } from "../../components/UI/AnimatedCard";
import { AnimatedSection } from "../../components/UI/AnimatedSection";
import { AnimatedHeading } from "../../components/UI/AnimatedHeading";
import NewsTicker from "../../components/NewsTicker/NewsTicker";
import Contact from "../Contact/Contact";
import Hero from "../../components/Hero/Hero";
import StockTicker from "../../components/StockTicker/StockTicker";
import Service from "../../components/Service/Service";
import FixedDepositCalculator from "../../components/Calculater/FixedDepositCalculator";
import MutualFundCalculator from "../../components/Calculater/MutualFundCalculator";
import RetirementCalculator from "../../components/Calculater/RetirementCalculator";
import TaxSavingCalculator from "../../components/Calculater/TaxSavingCalculator";

const testimonials = [
  {
    name: "Ananya Sharma",
    text: "Working with Pramesh Wealth Pvt. Ltd. has been a game-changer. Their personalized approach helped me clarify my goals and set me on the path to financial freedom.",
  },
  {
    name: "Rajesh Patel",
    text: "I've seen my investments grow steadily over the years. Their expert advice and diverse portfolio options have truly made a difference.",
  },
  {
    name: "Priya Mehta",
    text: "The team's dedication to understanding my unique financial situation has been impressive. I feel confident about my financial future.",
  },
  {
    name: "Vikram Singh",
    text: "The wealth management strategies provided by the team have exceeded my expectations. I've achieved financial milestones I never thought possible.",
  },
  {
    name: "Neha Gupta",
    text: "Their innovative approach to financial planning has opened up new investment avenues for me. I'm grateful for their expertise and guidance.",
  },
];

const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const features = [
  {
    title: "Expert Guidance",
    description:
      "Our team of certified financial advisors is dedicated to helping you make informed decisions.",
  },
  {
    title: "Customized Solutions",
    description:
      "We understand that one size doesn't fit all; we tailor our products to meet your unique needs.",
  },
  {
    title: "Technology-Driven",
    description:
      "Utilize our state-of-the-art online platforms for seamless investing and portfolio tracking.",
  },
  {
    title: "Transparent Processes",
    description:
      "We believe in building trust through complete transparency in our operations.",
  },
];

const Home = () => {
  const [activeCalculator, setActiveCalculator] = useState("mutualFunds");
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <StockTicker />
      <Hero />
      <NewsTicker />

      <section className="py-12 px-4 bg-white">
        <AnimatedHeading className="text-3xl font-bold text-center text-primary-900 mb-8">
          Our Services
        </AnimatedHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <Service
            icon={BarChart2}
            title="Mutual Fund"
            description="Invest systematically and watch your wealth grow over time."
            link="/services#sip"
            index={0}
          />
          <Service
            icon={Shield}
            title="Insurance"
            description="Protect your family's future with our comprehensive insurance solutions."
            link="/services#insurance"
            index={1}
          />
          <Service
            icon={LoaderPinwheel}
            title="Loans"
            description="Secure your future with our diverse range of loan options."
            link="/services#loan"
            index={1}
          />
          <Service
            icon={Users}
            title="Fds/NCds/Bonds"
            description="Explore a wide range of investment options tailored to your needs."
            link="/services#investment"
            index={2}
          />
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50">
        <AnimatedHeading className="text-3xl font-bold text-center text-primary-900 mb-12">
          Financial Calculators
        </AnimatedHeading>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: "mutualFunds", icon: TrendingUp, label: "Mutual Funds" },
                {
                  id: "fixedDeposits",
                  icon: PiggyBank,
                  label: "Fixed Deposits",
                },
                { id: "retirement", icon: Clock, label: "Retirement" },
                { id: "taxSaving", icon: Calculator, label: "Tax Saving" },
              ].map(({ id, icon: Icon, label }, index) => (
                <motion.button
                  key={id}
                  className={`px-4 py-2 rounded-full flex items-center ${
                    activeCalculator === id
                      ? "bg-primary-500 text-white"
                      : "bg-white text-primary-600"
                  }`}
                  onClick={() => setActiveCalculator(id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCalculator}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeCalculator === "mutualFunds" && <MutualFundCalculator />}
                {activeCalculator === "fixedDeposits" && (
                  <FixedDepositCalculator />
                )}
                {activeCalculator === "retirement" && <RetirementCalculator />}
                {activeCalculator === "taxSaving" && <TaxSavingCalculator />}
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-16 px-4 bg-primary-50">
        <AnimatedHeading className="text-3xl font-bold text-center text-primary-800 mb-12">
          What Our Clients Say
        </AnimatedHeading>
        <AnimatedSection>
          <Slider {...testimonialSettings} className="max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-6 rounded-xl shadow-soft h-full flex flex-col justify-between border border-secondary-100">
                  <div className="mb-6">
                    <p className="italic text-secondary-700 mb-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-semibold text-right text-primary-700">
                      - {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </AnimatedSection>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedHeading className="text-3xl font-bold mb-8 text-center text-primary-800">
            Why Choose Us?
          </AnimatedHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard key={feature.title} index={index}>
                <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <section className="py-20 px-4 text-center bg-primary-500 text-white">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl mb-8">
            Schedule a free consultation with our experts
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-500 hover:bg-primary-100 font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            Book Now <ArrowRight className="ml-2" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;
