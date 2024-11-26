import { motion } from "framer-motion";

export const AnimatedHeading = ({ children, className }) => (
  <motion.h2
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h2>
);
