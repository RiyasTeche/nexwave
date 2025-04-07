import "./services.scss";
import HomeFinal from "../../components/home_comp/homeFinal";
import ServiceList from "../../components/serviceList/ServiceList";


const Services = () => {
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
        <div className="top">
          <h2>Why Choose NexWave ?</h2>
        </div>
        <div className="bottom">
          <ul>
            <li>Reliable & Secure Shipping – Trusted partners in global logistics.</li>
            <li>Competitive Pricing – Cost-effective freight solutions.</li>
            <li>Fast & Efficient Delivery – Timely shipping across continents.</li>
          </ul>
          <ul>
            <li>Expert Team – Experienced logistics professionals.</li>
            <li>Customizable Solutions – Tailored services for every business.</li>
          </ul>
        </div>
        </div>
        <ServiceList/>
      </div>
    </div>
  );
};

export default Services;
