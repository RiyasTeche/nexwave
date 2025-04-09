import "./services.scss";
import HomeFinal from "../../components/home_comp/homeFinal";
import ServiceList from "../../components/serviceList/ServiceList";

import { motion } from "framer-motion";


const Services = () => {

  const variants = {
    initial: { y: -600, opacity: 0 },
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
           <img src="./exam.png" alt="" />
           <h1>Our Solutions.</h1>
          </div>
        </div>
        <div className="seviceHeadingConatiner">
        <motion.div className="top" variants={variants} initial="initial" animate="animate">
          <h2>Why Choose NexWave ?</h2>
        </motion.div>
        <motion.div className="bottom" variants={liVariants} initial="initial" animate="animate">
          <ul>
            <li>Reliable & Secure Shipping – Trusted partners in global logistics.</li>
            <li>Competitive Pricing – Cost-effective freight solutions.</li>
            <li>Fast & Efficient Delivery – Timely shipping across continents.</li>
          </ul>
          <ul>
            <li>Expert Team – Experienced logistics professionals.</li>
            <li>Customizable Solutions – Tailored services for every business.</li>
          </ul>
        </motion.div>
        </div>
        <ServiceList/>
      </div>
    </div>
  );
};

export default Services;
