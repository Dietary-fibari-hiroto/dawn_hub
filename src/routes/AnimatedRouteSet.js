import { motion } from "framer-motion";

const AnimatedRouteSet = ({ children }) => {
  const animation = {
    initial: { filter: "blur(10px) saturate(0%)", opacity: 0 },
    animate: { filter: "blur(0px) saturate(100%)", opacity: 1 },
    exit: { filter: "blur(10px) saturate(0%)", opacity: 0 },
    transition: { duration: 0.5 },
  };

  return <motion.div {...animation}>{children}</motion.div>;
};

export default AnimatedRouteSet;
