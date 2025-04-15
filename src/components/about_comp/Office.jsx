import { useRef } from "react";
import "./office.scss";
import { motion,useInView } from "framer-motion";

const Office = () => {

  const variants = {
    initial: { x: 200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: false }); // 50% visible, only trigger once


  return (
    <div className="office">
      <div className="officeContainer" ref={ref}>
        <div className="left">
          <img src="./office.jpg" alt="" />
        </div>
        <div className="right">
          <motion.h1 variants={variants} animate={isInView ? "animate" : "initial"} transition={{ duration: .4, ease: "easeInOut" }}>Contact Information</motion.h1>
          <div className="infoConatiner">
            <motion.div className="info" variants={variants} animate={isInView ? "animate" : "initial"} transition={{ duration: 1, ease: "easeInOut" }}>
              <div className="headerInfo">
                <div className="imageWrapper">
                  <img src="./location.png" alt="" />
                </div>
                <h2>Head Office</h2>
              </div>
              <p>Nexwave Shipping & Logistics</p>
              <p>London,City</p>
              <p>Country</p>
            </motion.div>
            <motion.div className="info" variants={variants} animate={isInView ? "animate" : "initial"} transition={{ duration: 1.5, ease: "easeInOut" }}>
              <div className="headerInfo">
                <div className="imageWrapper">
                  <img src="./time.png" alt="" />
                </div>
                <h2>Office Time</h2>
              </div>
              <p>(Monday-Friday)</p>
              <p>Sunday closed</p>
            </motion.div>
          </div>
          <div className="infoConatiner">
            <motion.div className="info" variants={variants} animate={isInView ? "animate" : "initial"} transition={{ duration: 2, ease: "easeInOut" }}>
              <div className="headerInfo">
                <div className="imageWrapper">
                  <img src="./phone.png" alt="" />
                </div>
                <h2>Quick Contact</h2>
              </div>
              <p>Phone :+91 123456789</p>
            </motion.div>

            <motion.div className="info" variants={variants} animate={isInView ? "animate" : "initial"} transition={{ duration: .5, ease: "easeInOut" }}>
              <div className="headerInfo">
                <div className="imageWrapper">
                  <img src="./mail.png" alt="" />
                </div>
                <h2>Contact mail</h2>
              </div>
              <p>Mail:test@test.com</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
