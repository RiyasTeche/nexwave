import { motion } from "framer-motion";

const ToggleButton = ({ open }) => {
  const firstVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const secondVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const thirdVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  return (
    <button className="toggleButton">
      <motion.div
        variants={firstVariants}
        animate={open ? "opened" : "closed"}
        className="lines"
      ></motion.div>
      <motion.div
        variants={secondVariants}
        animate={open ? "opened" : "closed"}
        className="lines"
      ></motion.div>
      <motion.div
        variants={thirdVariants}
        animate={open ? "opened" : "closed"}
        className="lines"
      ></motion.div>
    </button>
  );
};

export default ToggleButton;