import "./serviceList.scss";

const servicesList = [
  {
    img: "airplane.png",
    title: "LCL Shipping",
    desc: "Less than Container Load Lorem ipsum dolotetur adipisicing elit. Quaerat illum porro pariatur neque, blanditiis reprehenderit. Ut exe vtis? Et quas placeat ratione assumenda.",
  },
  {
    img: "airplane.png",
    title: "FCL Shipping",
    desc: "(Full Container Load) ",
  },
  {
    img: "truck.png",
    title: "Air Freight for Fast Delivery",
    desc: "Lorem ipsum dolotetur adipisicing elit. Quaerat illum porro pariatur neque, blanditiis reprehenderit. Ut exe vtis? Et quas placeat ratione assumenda.",
  },
  {
    img: "truck.png",
    title: "Ocean Freight for Large Shipments",
    desc: "Flexible",
  },
  {
    img: "truck.png",
    title: "Customs Clearance & Documentation",
    desc: "Flexible",
  },
  {
    img: "truck.png",
    title: "Door-to-Door Delivery",
    desc: "Lorem ipsum dolotetur adipisicing elit. Quaerat illum porro pariatur neque, blanditiis reprehenderit. Ut exe vtis? Et quas placeat ratione assumenda.",
  },
  { img: "truck.png", title: "Warehousing & Distribution", desc: "Flexible" },
  {
    img: "truck.png",
    title: "Freight Forwarding & Logistics Consulting",
    desc: "Flexible",
  },
];

const ServicePageItem = ({ service }) => {
  return (
    <div className="serviceListItem">
      <div className="imgConatiner">aa</div>
      <div className="textConatiner">
        <h1>{service.title}</h1>
        <p>
            {service.desc}
        </p>
      </div>
    </div>
  );
};

const ServiceList = () => {
  return (
    <div className="serviceList">
      <div className="serviceListConatiner">
        <h1>Global Freight Solutions (Sea, Air, and Land)</h1>
        {servicesList.map((service, i) => (
          <ServicePageItem key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
