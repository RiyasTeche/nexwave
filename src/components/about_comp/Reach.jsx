import { useRef, useState } from "react";
import "./reach.scss";
import { motion, useInView } from "framer-motion";

const Reach = () => {
  const [counter, setCounter] = useState(
    { packages: 1 },
    { client: 1 },
    { countries: 1 },
    { goods: 1 }
  );

  const variants = {
    initial: { y: 200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false }); // 50% visible, only trigger once

  return (
    <div className="reach">
      <div className="reachContainer">
        <h1>Our Reach</h1>
        <p>
          Our reach spans across domestic and international markets, enabling us
          to provide seamless logistics solutions tailored to diverse business
          needs. Through a network of trusted partners and strategically located
          hubs, we ensure that shipments move efficiently from origin to
          destination, regardless of distance or complexity. Our presence in key
          regions allows us to maintain consistent service standards and meet
          time-sensitive demands with confidence.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether you’re shipping across cities or continents, our logistics
          capabilities are built to scale with your operations. We bridge the
          gap between suppliers, distributors, and customers through a reliable
          and responsive network, giving you the confidence to expand your
          business wherever opportunity takes you.
        </p>

        <div className="reachItems" ref={ref}>
          <motion.div
            className="reachItem"
            variants={variants}
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="imgContainer">
              <img src="./package.png" alt="" />
            </div>
            <div className="number">
              <motion.span
                animate={isInView ? { count: 5135 } : { count: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                onUpdate={(latest) => {
                  setCounter((prevItems) => ({
                    ...prevItems,
                    packages: Math.floor(latest.count),
                  }));
                }}
              >
                {counter.packages}
              </motion.span>
              <span>M</span>
            </div>
            <h4>Deliverd Packages</h4>
          </motion.div>
          <motion.div
            className="reachItem"
            variants={variants}
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="imgContainer">
              <img src="./boy.png" alt="" />
            </div>
            <div className="number">
              <motion.span
                animate={isInView ? { count: 7456 } : { count: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                onUpdate={(latest) => {
                  setCounter((prevItems) => ({
                    ...prevItems,
                    client: Math.floor(latest.count),
                  }));
                }}
              >
                {counter.client}
              </motion.span>
              <span></span>
            </div>
            <h4>Satisfied Client</h4>
          </motion.div>
          <motion.div
            className="reachItem"
            variants={variants}
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="imgContainer">
              <img src="./flags.png" alt="" />
            </div>
            <div className="number">
              <motion.span
                animate={isInView ? { count: 52 } : { count: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                onUpdate={(latest) => {
                  setCounter((prevItems) => ({
                    ...prevItems,
                    countries: Math.floor(latest.count),
                  }));
                }}
              >
                {counter.countries}
              </motion.span>
              <span>+</span>
            </div>
            <h4>Countries Covered</h4>
          </motion.div>
          <motion.div
            className="reachItem"
            variants={variants}
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="imgContainer">
              <img src="./goods.png" alt="" />
            </div>
            <div className="number">
              <motion.span
                animate={isInView ? { count: 4582 } : { count: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                onUpdate={(latest) => {
                  setCounter((prevItems) => ({
                    ...prevItems,
                    goods: Math.floor(latest.count),
                  }));
                }}
              >
                {counter.goods}
              </motion.span>
              <span>M</span>
            </div>
            <h4>Tons of Goods</h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reach;
