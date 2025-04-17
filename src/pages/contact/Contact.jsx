import { useState } from "react";
import ContainerModelConatiner from "../../components/conatiner/ContainerModelConatiner";
import OfficeSpaces from "../../components/contact_comp/OfficeSpaces";
import "./contact.scss";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  return (
    <div className="contact">
      <div className="contacttWrapper">
        <div className="left"></div>
        <div className="right">
          <h2>Thank you for showing interest with us</h2>
          <p>
            We are quick in responding email queries that we receive, but
            sometimes we miss a few. For instant help, please select an option
            from the list below!
          </p>
          <form>
            <div className="fromItem">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Mohd. Riyas"
                autoFocus
                required
              />
            </div>
            <div className="fromItem">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="info@nexwave.com"
                required
              />
            </div>
            <div className="fromItem">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+00 1234567890"
              />
            </div>
            <div className="fromItem">
              <textarea
                name="message"
                rows={7}
                placeholder="Write your enquiry.."
              ></textarea>
            </div>
            <button>Send</button>
            {err && <span className="error">Something went wrong!</span>}
            {success && <span className="success">Message has been send.</span>}
          </form>
        </div>
      </div>
      <section>
        <OfficeSpaces />
      </section>
      <section>
        <div className="containerWrapper">
          <div className="circle"></div>
          <ContainerModelConatiner />
          <h1>NEXWAVE</h1>
        </div>
      </section>
    </div>
  );
};

export default Contact;
