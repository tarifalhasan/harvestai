// shared/AnimatonVariants.jsx
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const getVariant = (animation) => {
  switch (animation) {
    case "fade-left":
      return {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      };
    case "fade-right":
      return {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      };
    case "fade-up":
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    case "zoom":
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

const AnimatonVariants = ({
  children,
  animation = "fade-up",
  duration = 0.7,
  delay = 0.3,
  once = true,
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariant(animation)}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatonVariants;
