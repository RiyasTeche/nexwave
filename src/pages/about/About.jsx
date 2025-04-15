import "./about.scss";
import Reach from "../../components/about_comp/Reach";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Office from "../../components/about_comp/Office";

const About = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { amount: 0.8, once: false }); // 50% visible, only trigger once

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
    <div className="about">
      <div className="aboutWrapper">
        <div className="aboutConatiner" ref={textRef}>
          <motion.div
            className="left"
            variants={variants}
            animate={isInView ? "animate" : "initial"}
          >
            <h1>Our History</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              odit modi hic inventore assumenda esse consectetur facilis, ipsum
              rerum. Odio dolore voluptate ab dignissimos iste consequuntur ad
              ullam repellendus neque!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              odit modi hic inventore assumenda esse consectetur facilis, ipsum
              rerum. Odio dolore voluptate ab dignissimos iste consequuntur ad
              ullam repellendus neque!
            </p>
            <button>View More !</button>
          </motion.div>
          <div className="right">
          </div>
        </div>
      </div>
      <section>
        <Reach />
      </section>
      <section>
        <Office />
      </section>
    </div>
  );
};

export default About;
