import React from 'react';
import { Circle } from 'lucide-react';
import { motion } from 'framer-motion';

const CompanyHistory = () => {
  const historyPoints = [
    {
      year: "2001",
      title: "Company Foundation",
      description: "Pramesh Wealth was established with a vision to provide comprehensive financial services."
    },
    {
      year: "2005",
      title: "Expansion of Services",
      description: "Introduced Mutual Fund advisory and Insurance services to our portfolio."
    },
    {
      year: "2010",
      title: "Network Growth",
      description: "Expanded our presence across Gujarat with multiple branch offices."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched digital platforms for seamless client service and portfolio management."
    },
    {
      year: "2018",
      title: "5000+ Client Milestone",
      description: "Achieved a significant milestone of serving over 5000 satisfied investors."
    },
    {
      year: "2020",
      title: "Service Enhancement",
      description: "Integrated comprehensive wealth management solutions including PMS, Corporate FDs, NCDs, and Bonds."
    },
    {
      year: "2023",
      title: "Recognition & Growth",
      description: "Became one of the leading financial services providers in Gujarat with 5+ branches."
    }
  ];

  return (
    <div className="space-y-8 relative">
      {/* Timeline line */}
      <div className="absolute left-[21px] top-6 bottom-6 w-0.5 bg-primary-200" />
      
      {/* Timeline points */}
      {historyPoints.map((point, index) => (
        <motion.div
          key={point.year}
          className="flex gap-6 items-start relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center relative z-10">
            <span className="text-primary-600 font-semibold text-sm">{point.year}</span>
          </div>
          
          <div className="flex-grow bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-primary-800 mb-2">
              {point.title}
            </h3>
            <p className="text-primary-600">
              {point.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CompanyHistory;