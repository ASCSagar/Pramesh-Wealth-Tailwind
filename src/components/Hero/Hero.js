import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../../assets/images/invest-banner.jpeg";

const buttons = [
  { text: "SIP", link: "/", delay: 0 },
  { text: "INSURANCE", link: "/", delay: 0.1 },
  { text: "MUTUAL FUNDS", link: "/", delay: 0.3 },
  { text: "TAX PLANNING", link: "/", delay: 0.4 },
  { text: "BONDS", link: "/", delay: 0.5 },
  { text: "GENERAL", link: "/", delay: 0.6 },
];

const fallAnimation = {
  initial: {
    opacity: 0,
    y: -100,
    rotate: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
  },
};

const Hero = ({ title, subtitle }) => {
  return (
    <div className="relative overflow-hidden h-[60vh] md:h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8 text-primary-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            </div>
          </div>
        </div>
        <div className="relative z-10 pb-8">
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {buttons.map((button, index) => (
              <motion.div
                key={button.text}
                variants={fallAnimation}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 0.6,
                  delay: button.delay,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <Link
                  to={button.link}
                  className="inline-block px-6 py-3 
                    bg-gradient-to-r from-primary-500/90 to-secondary-500/90 
                    hover:from-primary-600/90 hover:to-secondary-600/90 
                    backdrop-blur-sm text-white font-semibold rounded-full 
                    transition-all duration-300 border border-white/20 
                    hover:border-white/30 hover:shadow-lg 
                    hover:scale-105 transform 
                    text-sm md:text-base"
                >
                  {button.text}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
