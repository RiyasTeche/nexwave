import OfficeSpaces from "../../components/contact_comp/OfficeSpaces";
import "./contact.scss";

const Contact = () => {
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
              <input type="text" name="name" placeholder="Enter your name"  autoFocus required/>
            </div>
            <div className="fromItem">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="info@nexwave.com" required/>
            </div>
            <div className="fromItem">
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" placeholder="+00 1234567890" required/>
            </div>
            <div className="fromItem">
              <textarea
                name="message"
                rows={7}
                placeholder="message.."
              ></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
      <section>
        <OfficeSpaces />
      </section>
    </div>
  );
};

export default Contact;
