import { motion } from "framer-motion";

export const AnimatedCard = ({ children, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.div>
);
