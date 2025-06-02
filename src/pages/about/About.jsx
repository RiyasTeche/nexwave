import "./about.scss";
import Reach from "../../components/about_comp/Reach";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Office from "../../components/about_comp/Office";

const About = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { amount: 0.7, once: false }); // 70% visible, only trigger once

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

  const history = [
    {
      year: "2020",
      point: "Nexwave Shipping & Logistics Ltd is founded in Rwanda.",
    },
    {
      year: "2021",
      point:
        "Expanded operations to the Democratic Republic of Congo and Uganda, strengthening our presence in East and Central Africa.",
    },
    {
      year: "2022",
      point:
        "Entered the Dubai market, creating a vital logistics hub in the Middle East.",
    },
    {
      year: "2023",
      point:
        "Opened operations in China, tapping into Asia’s global trade power.",
    },
    {
      year: "2024",
      point:
        "Established a base in India, completing our strategic footprint across major trade regions.",
    },
  ];

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
              From East Africa to the World – The Nexwave Journey <br />
              Founded in 2020, Nexwave Shipping & Logistics Ltd began its
              journey in Rwanda with a clear mission: to provide reliable,
              efficient, and customer-focused logistics solutions in a
              fast-changing global market.
              <br /> Starting with a modest operation, we quickly gained the
              trust of clients through our dedication to service excellence and
              smart logistics. Our strong foundation in Rwanda laid the
              groundwork for rapid regional and international expansion.
            </p>
            <span> Milestones That Shaped Us:</span>
            <ul>
              {history.map((value, index) => (
                <li key={index}>
                  {value.year} – {value.point}
                </li>
              ))}
            </ul>
            <a href="#reach"><button>View More !</button></a>
          </motion.div>
          <div className="right"></div>
        </div>
      </div>
      <section id="reach">
        <Reach />
      </section>
      <section>
        <Office />
      </section>
    </div>
  );
};

export default About;
