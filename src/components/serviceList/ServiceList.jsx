import { motion, useInView, useScroll, useTransform } from "motion/react";
import "./serviceList.scss";
import { useRef } from "react";

const servicesList = [
  {
    img: "lcl.jpg",
    title: "LCL Shipping – Cost-Effective Global Freight",
    desc: "LCL (Less than Container Load) shipping is the smart solution for smaller shipments that don't require a full container. Share container space and reduce costs while still enjoying reliable, secure, and timely delivery. Perfect for growing businesses and flexible logistics needs.",
  },
  {
    img: "vessal.jpg",
    title: "FCL Shipping",
    desc: "(Full Container Load) ",
  },
  {
    img: "air.jpg",
    title: "Air Freight – Fast & Reliable Delivery",
    desc: "When speed matters, our air freight services deliver. Whether it’s urgent documents or high-value cargo, we ensure swift, secure, and on-time delivery across the globe. Count on us for priority handling and seamless logistics from takeoff to touchdown.",
  },
  {
    img: "ship.jpg",
    title: "Ocean Freight for Large Shipments",
    desc: "Flexible",
  },
  {
    img: "doc.jpg",
    title: "Customs Clearance & Documentation",
    desc: "Flexible",
  },
  {
    img: "doortodoor.jpg",
    title: "Door-to-Door Delivery",
    desc: "Lorem ipsum dolotetur adipisicing elit. Quaerat illum porro pariatur neque, blanditiis reprehenderit. Ut exe vtis? Et quas placeat ratione assumenda.",
  },
  {
    img: "wharehouse.jpg",
    title: "Warehousing & Distribution",
    desc: "Flexible",
  },
  {
    img: "consultant.jpg",
    title: "Freight Forwarding & Logistics Consulting",
    desc: "Flexible",
  },
];
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
  const isInView = useInView(ref, { amount: 0.5, once: false }); // 50% visible, only trigger once

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
              animate={{ y: "0px", opacity: 1 }}
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
