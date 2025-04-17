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
  const isInView = useInView(ref, { amount: 0.6, once: false }); // 50% visible, only trigger once

  return (
    <div className="reach">
      <div className="reachContainer">
        <h1>Our Reach</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad maiores
          accusamus eaque voluptatem! Adipisci corporis nobis ea voluptatem
          molestiae amet, assumenda doloribus, natus voluptatum illum animi
          quisquam ipsum? Dicta.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          nesciunt aperiam nihil ipsum quae amet sed consectetur mollitia,
          dignissimos, repudiandae omnis similique cumque accusantium qui.
          Aperiam quis dolorem nostrum id. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Inventore minus nostrum, expedita
          mollitia vitae provident beatae. Eligendi impedit veritatis doloribus,
          voluptates at fugiat exercitationem repellendus necessitatibus error,
          commodi maxime molestias.
        </p>

        <div className="reachItems" ref={ref}>
          <motion.div className="reachItem" variants={variants} animate={isInView ? "animate" : "initial"}  transition={{ duration: .5, ease: "easeInOut" }}>
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
          <motion.div className="reachItem" variants={variants} animate={isInView ? "animate" : "initial"} transition={{ duration: 1, ease: "easeInOut" }}>
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
          <motion.div className="reachItem" variants={variants} animate={isInView ? "animate" : "initial"} transition={{ duration: 1.5, ease: "easeInOut" }}>
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
          <motion.div className="reachItem" variants={variants} animate={isInView ? "animate" : "initial"} transition={{ duration: 2, ease: "easeInOut" }}>
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
