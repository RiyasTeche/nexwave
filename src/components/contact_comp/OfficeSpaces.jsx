import { useState } from "react";
import "./officeSpaces.scss";
import { officeList } from "../../../public/data";
import { motion } from "framer-motion";

const OfficeInfo = ({ index }) => {
  const offices = officeList[index].OFFICES;
  return (
    <>
      {offices.map((item, i) => (
        <div className="officeInfo">
          <h3>{item.CITY} OFFICE</h3>
          <div className="officeInfoItem">
            <div className="infoleft">
              <ul>
                <li className="office">
                  <p>{item.NAME}</p>
                  <p>{item.ADDRESS}</p>
                  <p>{item.PO}</p>
                  <p>{item.CITY}</p>
                  <p>{item.COUNTRY}</p>
                </li>
                <li className="phone">{item.OFFICEPHONE}</li>
                <li className="mail">
                  <p>{item.MAIL}</p>
                </li>
              </ul>
            </div>
            <div className="infoRight">
              <ul>
                <li className="phone">
                  {item.FIRSTPERSON}
                  <br />
                  {item.ROLL} <br />
                  <p>{item.PHONE}</p>
                </li>
                <li className="phone">
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const variants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="officeSpaces">
      <div className="officeConatiner">
        <div className="top">
          <h1>Our Spaces</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <motion.img
              src={"./" + officeList[selectedIndex].IMG}
              alt=""
              variants={variants}
              key={selectedIndex}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
          <div className="center">
            {officeList.map((item, i) => (
              <div className="countryName" key={i}>
                <h3
                  className={selectedIndex === i ? "active" : ""}
                  onClick={() => setSelectedIndex(i)}
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
