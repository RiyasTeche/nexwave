import "./office.scss";

const Office = () => {
  return (
    <div className="office">
      <div className="officeContainer">
        <div className="left">
          <img src="./office.jpg" alt="" />
        </div>
        <div className="right">
          <h1>Contact Information</h1>
          <div className="infoConatiner">
            <div className="info">
              <div className="headerInfo">
                <div className="imageWrapper">
                  <img src="./location.png" alt="" />
                </div>
                <h2>Head Office</h2>
              </div>
              <p>Nexwave Shipping & Logistics</p>
              <p>London,City</p>
              <p>Country</p>
            </div>
            <div className="info">
              <div className="headerInfo">
                <div className="imageWrapper">
                  <img src="./time.png" alt="" />
                </div>
                <h2>Office Time</h2>
              </div>
              <p>(Monday-Friday)</p>
              <p>Sunday closed</p>
            </div>
          </div>
          <div className="infoConatiner">
            <div className="info">
              <div className="headerInfo">
                <div className="imageWrapper">
                  <img src="./phone.png" alt="" />
                </div>
                <h2>Quick Contact</h2>
              </div>
              <p>Phone :+91 123456789</p>
            </div>

            <div className="info">
              <div className="headerInfo">
                <div className="imageWrapper">
                  <img src="./mail.png" alt="" />
                </div>
                <h2>Contact mail</h2>
              </div>
              <p>Mail:test@test.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
