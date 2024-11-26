import React from "react";
import { Link } from "react-router-dom";
import { AnimatedCard } from "../UI/AnimatedCard";

const Service = ({ icon: Icon, title, description, link, index }) => {
  return (
    <AnimatedCard index={index}>
      <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition duration-300">
        <Link to={link} className="block">
          <Icon className="w-12 h-12 text-primary-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </Link>
      </div>
    </AnimatedCard>
  );
};

export default Service;
