import { Link } from "react-router-dom";
import "./footer.scss";

import { company } from "../../../public/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerConatiner">
        <div className="firstConatiner">
          <h1> Subscribe US </h1>
        </div>
        <div className="top">
          <div className="left">
            <h4>Get in Touch</h4>
            <div className="address">
              {company.map((add, i) => (
                <div key={i}>
                  <p>
                    {add.name}
                    <br />
                    {add.address},{add.city},{add.country}
                    <br />
                    {add.phone}
                    <br />
                    {add.mail}
                  </p>
                  {company.length != i + 1 && <hr />}
                </div>
              ))}
            </div>
          </div>
          <div className="center">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className="right">
            <h4>Newsletter</h4>
            <div className="newsLetter">
              <div className="newsTop">
                <p>
                  If you'd like something with a different tone—more casual,
                  more corporate, or more focused on deals or tracking—just let
                  me know!
                </p>
              </div>
              <div className="newsbottom">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  name="footerMail"
                />
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="footerInfoLeft">
            <p>
              Copyright © 2010-2025 nexwave shipping lines ltd. All rights
              reserved.
            </p>
          </div>
          <div className="footerInfoRigth">
            <p>Privacy</p>
            <p>Terms</p>
            <p>FAQs</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
