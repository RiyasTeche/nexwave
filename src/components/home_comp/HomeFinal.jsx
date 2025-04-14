import { useRef } from "react";
import "./homeFinal.scss";
import { motion,useInView } from "framer-motion";

const HomeFinal = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { amount: 0.4, once: false }); // 50% visible, only trigger once

  const variants = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div className="homeFinal" ref={textRef}>
      <motion.div
        className="homeFinalWrapper"
        variants={variants}
        animate={isInView ? "animate" : "initial"}
      >
        <div className="left">
          <div className="textContainer">
            <h1>Our Key Routes.</h1>
            <div className="listConatiner">
              <ul>
                <li> China to India & Africa & Global Markets </li>
                <li> Middle East to India, Africa & Global Markets </li>
                <li> India to Middle East, Africa & Global Markets </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </motion.div>
    </div>
  );
};

export default HomeFinal;
