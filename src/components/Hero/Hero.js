import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/images/BannerImg.jpg";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="relative overflow-hidden h-[60vh] md:h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
      </div>
    </div>
  );
};

export default Hero;
