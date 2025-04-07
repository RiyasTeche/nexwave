import HomeDesc from "../../components/home_comp/HomeDesc";
import HomeFinal from "../../components/home_comp/homeFinal";
import "./home.scss";

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
  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="heroConatiner">
          <div className="top">
            <div className="left">
              <p>Moving Cargo, Building Trust</p>
              <h1>
                Logistics Simplified.
                <br />
                Delivery Amplified.
              </h1>
              <p>
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
              </p>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom"></div>
          <div className="serviceLinks">
            {services.map((service) => (
              <ServiceLink service={service} key={service.title} />
            ))}
          </div>
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
