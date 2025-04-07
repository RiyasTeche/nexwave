import "./homedesc.scss";

const HomeDesc = () => {
  return (
    <div className="homeDesc">
      <div className="homeDescWrapper">
        <div className="left">
          <img src="./box.jpg" alt="" />
        </div>
        <div className="showCounter">
          <div className="counterTop"><img src="./parcel.png" alt="" /></div>
          <div className="counterBottom">
            <h3>12.34<span> K</span></h3>
            <p>Deliverd Goods</p>
          </div>
        </div>
        <div className="right">
          <p>Beyond Borders, Within Time</p>
          <h1>Who We Are!</h1>
          <div className="homeDescContainer">
            <div className="homeDescContainerLeft">
              <p>
                We are a leading logistics and shipping company connecting
                India, China, the Middle East, and Africa with seamless air and
                sea cargo solutions. With a strong presence in key trade
                corridors, we specialize in moving goods swiftly and securely
                across borders, helping businesses grow through efficient,
                end-to-end logistics support.
                <br />
                Our expertise spans international freight forwarding, customs
                clearance, warehousing, and supply chain management. Whether
                you're shipping high-priority air cargo or large-volume sea
                freight, we ensure timely deliveries, transparent communication,
                and tailored services that meet your specific needs.
              </p>
            </div>
            <div className="homeDescContainerRight">
              <ul>
                <li>
                  Driven by innovation and reliability, we are your trusted
                  partner in global trade—delivering more than cargo; we deliver
                  peace of mind.
                </li>
                <li>
                  <b>Our Mission –</b>provide cost-effective, reliable, and fast
                  shipping solutions.
                </li>
                <li>
                  <b>Our Vision –</b> To become a trusted logistics partner for
                  businesses worldwide.
                </li>
              </ul>
            </div>
          </div>
          <div className="sign">
            <h7>Muhammed Fasalurahman O</h7>
            <p>Founder & Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesc;
