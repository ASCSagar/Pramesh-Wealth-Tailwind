import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/images/Banner.png";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="relative w-full overflow-hidden h-[60vh] md:h-[80vh] bg-gray-900">
      <motion.img
        src={banner}
        alt="BannerImg"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-1/3 -translate-y-1/2 left-8 md:left-20 z-20 max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="relative">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white italic leading-relaxed">
            "Invest Disciplinary and Smartly for Creation of Financial Wealth in
            a More Distant Future."
          </p>
          <motion.div
            className="absolute -bottom-4 left-0 w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
};

export default Hero;
