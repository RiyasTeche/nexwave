import { useState } from "react";
import "./officeSpaces.scss";

const officeList = [
  {
    COUNTRY: "UGANDA",
    IMG: "uganda.png",
    OFFICES: {
      NAME: "nexwave shipping",
      ADDRESS: "kampala",
      CITY: "kampala",
      PO: "671523",
      COUNTRY: "Uganda",
      OFFICEPHONE: "+9521833486",
      MANAGER: "fasal",
      PHONE: "+128345853",
      SECONDPERSON: "Muhammed",
      SECPHONE: "+128345853",
      MAIL: "info@nexwave.com",
    },
  },
  {
    COUNTRY: "RWANDA",
    IMG: "rwanda.png",
    OFFICES: {
      NAME: "nexwave shipping",
      ADDRESS: "kigali",
      CITY: "kigali",
      PO: "671523",
      COUNTRY: "Rwanda",
      OFFICEPHONE: "+952134563486",
      MANAGER: "fasal",
      PHONE: "+123235853",
      SECONDPERSON: "Arun",
      SECPHONE: "+1283455643",
      MAIL: "info@nexwave.com",
    },
  },
  {
    COUNTRY: "UAE",
    IMG: "uae.jpg",
    OFFICES: {
      name: "nexwave LLC",
      ADDRESS: "dubai",
      CITY: "dubai",
      PO: "671523",
      COUNTRY: "UAE",
      OFFICEPHONE: "+952134486",
      MANAGER: "Salman",
      PHONE: "+123235853",
      SECONDPERSON: "asif",
      SECPHONE: "+12455643",
      MAIL: "info@nexwave.com",
    },
  },
];

const OfficeSpaces = () => {
  const [selectedIndex, setselectedIndex] = useState(0);

  return (
    <div className="officeSpaces">
      <div className="officeConatiner">
        <div className="top">
          <h1>Our Spaces</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={"./"+ officeList[selectedIndex].IMG} alt="" />
          </div>
          <div className="center">
            {officeList.map((item, i) => (
              <div className="countryName" key={i}>
                <h3
                  className={selectedIndex === i ? "active" : ""}
                  onClick={() => setselectedIndex(i)}
                >
                  {item.COUNTRY}
                </h3>
              </div>
            ))}
          </div>
          <div className="right">{officeList[selectedIndex].OFFICES.SECONDPERSON}</div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSpaces;
