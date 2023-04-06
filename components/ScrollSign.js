import { motion, useScroll, useSpring } from "framer-motion";

const ScrollSign = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="origin-left fixed left-1 right-0 bg-secondary h-1 progressbar"
      style={{ scaleX }}
    />
  );
};

export default ScrollSign;
