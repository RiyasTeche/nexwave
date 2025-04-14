import { motion, useInView, useScroll, useTransform } from "motion/react";
import "./serviceList.scss";
import { useRef } from "react";

import {servicesList} from "../../../public/data"
const serviceListLengath = servicesList.length;

const ServicePageItem = (props) => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when element enters and leaves
  });

  // Parallax transform: the image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-300%", "300%"]);
  const isInView = useInView(ref, { amount: 0.4, once: false }); // 50% visible, only trigger once

  return (
    <div className="serviceListItem">
      <motion.div
        className="scrollIndicator"
        style={{
          scaleX: useScroll().scrollYProgress,
          originX: 0,
        }}
      />
      <motion.div
        className="imgConatiner"
        ref={ref}
        variants={variants}
        animate={isInView ? "animate" : "initial"}
      >
        <img className="imgService" src={`./${props.service.img}`} alt="" />
        <motion.h2 className="imgNumber" style={{ y }}>
          #00{props.index + 1}
        </motion.h2>
      </motion.div>
      <div className="textConatiner">
        <h1>{props.service.title}</h1>
        <p>{props.service.desc}</p>
        {serviceListLengath != props.index + 1 && (
          <div className="scrollConatiner">
            <motion.img
              className="scroll"
              src="./scroll.png"
              alt=""
              initial={{ y: "-10px", opacity: 0 }}
              animate={{ y: "0px", opacity: .5 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceList = () => {
  return (
    <div className="serviceList">
      <div className="serviceListConatiner">
        {/* <h1>Global Freight Solutions (Sea, Air, and Land)</h1> */}
        {servicesList.map((service, index) => (
          <ServicePageItem key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
