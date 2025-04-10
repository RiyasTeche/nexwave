import "./reach.scss";

const Reach = () => {
  return (
    <div className="reach">
      <div className="reachContainer">
        <h1>Our Reach</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad maiores
          accusamus eaque voluptatem! Adipisci corporis nobis ea voluptatem
          molestiae amet, assumenda doloribus, natus voluptatum illum animi
          quisquam ipsum? Dicta.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          nesciunt aperiam nihil ipsum quae amet sed consectetur mollitia,
          dignissimos, repudiandae omnis similique cumque accusantium qui.
          Aperiam quis dolorem nostrum id. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Inventore minus nostrum, expedita
          mollitia vitae provident beatae. Eligendi impedit veritatis doloribus,
          voluptates at fugiat exercitationem repellendus necessitatibus error,
          commodi maxime molestias.
        </p>

        <div className="reachItems">
          <div className="reachItem">
            <div className="imgContainer">
              <img src="./package.png" alt="" />
            </div>
            <div className="number">
              <span>3800</span>
              <span>M</span>
            </div>
            <h4>Deliverd Packages</h4>
          </div>
          <div className="reachItem">
            <div className="imgContainer">
              <img src="./boy.png" alt="" />
            </div>
            <div className="number">
              <span>7456</span>
              <span></span>
            </div>
            <h4>Satisfied Client</h4>
          </div>
          <div className="reachItem">
            <div className="imgContainer">
              <img src="./flags.png" alt="" />
            </div>
            <div className="number">
              <span>52</span>
              <span>+</span>
            </div>
            <h4>Countries Covered</h4>
          </div>
          <div className="reachItem">
            <div className="imgContainer">
              <img src="./parcel.png" alt="" />
            </div>
            <div className="number">
              <span>4582</span>
              <span>M</span>
            </div>
            <h4>Tons of Goods</h4>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reach;
