import { useState } from "react";
import "./officeSpaces.scss";

const officeList = [
  {
    COUNTRY: "UGANDA",
    IMG: "uganda.png",
    OFFICES: [
      {
        NAME: "nexwave shipping",
        ADDRESS: "kampala",
        CITY: "kampala",
        PO: "671523",
        COUNTRY: "Uganda",
        OFFICEPHONE: "+9521833486",
        FIRSTPERSON: "fasal",
        ROLL: "Managing Director",
        PHONE: "+128345853",
        SECONDPERSON: "Muhammed",
        SECPHONE: "+128345853",
        MAIL: "info@nexwave.com",
      },
      {
        NAME: "nexwave shipping",
        ADDRESS: "kampala",
        CITY: "jinja",
        PO: "671523",
        COUNTRY: "Uganda",
        OFFICEPHONE: "+9521833486",
        FIRSTPERSON: "fasal",
        ROLL: "Managing Director",
        PHONE: "+128345853",
        SECONDPERSON: "Muhammed",
        SECPHONE: "+128345853",
        MAIL: "info@nexwave.com",
      },
    ],
  },
  {
    COUNTRY: "RWANDA",
    IMG: "rwanda.png",
    OFFICES: [
      {
        NAME: "nexwave shipping",
        ADDRESS: "kigali",
        CITY: "kigali",
        PO: "671523",
        COUNTRY: "Rwanda",
        OFFICEPHONE: "+952134563486",
        MAIL: "info@nexwave.com",
        FIRSTPERSON: "fasal",
        ROLL: "Director",
        PHONE: "+123235853",
        SECONDPERSON: "Arun",
        SECPHONE: "+1283455643",
      },
    ],
  },
  {
    COUNTRY: "UAE",
    IMG: "uae.jpg",
    OFFICES: [
      {
        name: "nexwave LLC",
        ADDRESS: "dubai",
        CITY: "dubai",
        PO: "671523",
        COUNTRY: "UAE",
        OFFICEPHONE: "+952134486",
        FIRSTPERSON: "Salman",
        ROLL: "Manager",
        PHONE: "+123235853",
        SECONDPERSON: "asif",
        SECPHONE: "+12455643",
        MAIL: "info@nexwave.com",
      },
      {
        name: "nexwave LLC",
        ADDRESS: "dubai",
        CITY: "abu dabi",
        PO: "671523",
        COUNTRY: "UAE",
        OFFICEPHONE: "+952134486",
        FIRSTPERSON: "Salman",
        ROLL: "Manager",
        PHONE: "+123235853",
        SECONDPERSON: "asif",
        SECPHONE: "+12455643",
        MAIL: "info@nexwave.com",
      },
    ],
  },
];

const OfficeInfo = ({ index }) => {

  const offices = officeList[index].OFFICES;
  console.log(offices);
  return (
    <>
      {offices.map((item, i) => (
        <div className="officeInfo" key={i}>
          <h3>{item.CITY} OFFICE</h3>
          <div className="officeInfoItem">
            <div className="infoleft">
              <ul>
                <li>
                  <p>{item.NAME}</p>
                  <p>{item.ADDRESS}</p>
                  <p>{item.PO}</p>
                  <p>{item.CITY}</p>
                  <p>{item.COUNTRY}</p>
                </li>
                <li>{item.OFFICEPHONE}</li>
                <li>
                  <p>{item.MAIL}</p>
                </li>
              </ul>
            </div>
            <div className="infoRight">
              <ul>
                <li>
                  {item.FIRSTPERSON}
                  <br />
                  {item.ROLL} <br />
                  <p>{item.PHONE}</p>
                </li>
                <li>
                  <p>{item.SECONDPERSON}</p>
                  <p>{item.SECPHONE}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

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
            <img src={"./" + officeList[selectedIndex].IMG} alt="" />
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
          <div className="right">
            <OfficeInfo index={selectedIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSpaces;
