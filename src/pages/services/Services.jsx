import "./services.scss";
import ServiceList from "../../components/serviceList/ServiceList";

import { motion } from "framer-motion";

const Services = () => {
  const variants = {
    initial: { y: -300, opacity: 0 },
    animate: {
      y: -25,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const liVariants = {
    initial: { y: 200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="services">
      <div className="servicesWrapper">
        <div className="topSectionConatiner">
          <div className="topSection">
            <span>
              <img src="./exam.png" alt="" />
              <h1>Our Services</h1>
            </span>
          </div>
        </div>
        <div className="seviceHeadingConatiner">
          <motion.div
            className="top"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <h2>Why Choose NexWave ?</h2>
          </motion.div>
          <motion.div
            className="bottom"
            variants={liVariants}
            initial="initial"
            animate="animate"
          >
            <ul>
              <li>
                Reliable & Secure Shipping
                <span>– Trusted partners in global logistics.</span>
              </li>
              <li>
                Competitive Pricing
                <span>– Cost-effective freight solutions.</span>
              </li>
              <li>
                Fast & Efficient Delivery
                <span>– Timely shipping across continents.</span>
              </li>
            </ul>
            <ul>
              <li>
                Expert Team <span>– Experienced logistics professionals.</span>
              </li>
              <li>
                Customizable Solutions
                <span>– Tailored services for every business.</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <ServiceList />
      </div>
    </div>
  );
};

export default Services;
