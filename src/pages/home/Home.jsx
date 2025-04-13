import HomeDesc from "../../components/home_comp/HomeDesc";
import HomeFinal from "../../components/home_comp/homeFinal";
import "./home.scss";

import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { img: "ship.png", title: "Ocean Frieght Services", desc: "Innovative" },
  { img: "airplane.png", title: "Air Frieght Services", desc: "Reliable" },
  {
    img: "wharehouse.png",
    title: "Wharehousing Services",
    desc: "Sustainable",
  },
  { img: "truck.png", title: "Road Frieght Services", desc: "Flexible" },
];

const ServiceLink = ({ service }) => {
  return (
    <div className="serviceItem">
      <div className="serviceImg">
        <img src={service.img} alt="" />
      </div>
      <div className="serviceText">
        <p>{service.desc}</p>
        <h5>{service.title}</h5>
      </div>
    </div>
  );
};

const Home = () => {
  const textVariants = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChilden: 0.2,
      },
    },
  };
  const serviceVariants = {
    initial: { y: 200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChilden: 0.2,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true }); // 50% visible, only trigger once
  const isServiceInView = useInView(ref, { amount: 0.5, once: false }); // 50% visible, only trigger once

  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="heroConatiner">
          <div className="top">
            <motion.div
              ref={ref}
              className="left"
              variants={textVariants}
              animate={isInView ? "animate" : "initial"}
            >
              <p>
              <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Moving Cargo, Building Trust",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Speed. Precision. Delivered.",
            1000,
            "Connecting the World, One Delivery at a Time.",
            1000
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
              </p>
              <h1>
                Logistics Simplified.
                <br />
                Delivery Amplified.
              </h1>
              {/* <p>
                At <span>NEXWAVE</span>, we specialize in comprehensive shipping
                and logistics solutions via air and sea, delivering excellence
                across every mile. With a robust global network and strategic
                operations spanning the Middle East, India, Africa, China, and
                beyond, we are your trusted partner in international cargo
                movement.
                <br />
                &#9;With a commitment to speed, security, and service,
                <span>NEXWAVE</span> keeps your supply chain moving—no matter
                where your business takes you.
              </p> */}
            </motion.div>
            {/* <div className="right"></div> */}
          </div>
          <div className="bottom"></div>
          <motion.div
            className="serviceLinks"
            variants={serviceVariants}
            animate={isServiceInView ? "animate" : "initial"}
          >
            {services.map((service) => (
              <ServiceLink service={service} key={service.title} />
            ))}
          </motion.div>
        </div>
        <section>
          <HomeDesc />
        </section>
        <section>
          <HomeFinal />
        </section>
      </div>
    </div>
  );
};

export default Home;
