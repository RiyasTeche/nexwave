import "./about.scss";
import ContainerModelConatiner from "../../components/conatiner/ContainerModelConatiner";
import Reach from "../../components/about_comp/Reach";

const About = () => {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <div className="aboutConatiner">
          <div className="left">
            <h1>Our History.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              odit modi hic inventore assumenda esse consectetur facilis, ipsum
              rerum. Odio dolore voluptate ab dignissimos iste consequuntur ad
              ullam repellendus neque!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              odit modi hic inventore assumenda esse consectetur facilis, ipsum
              rerum. Odio dolore voluptate ab dignissimos iste consequuntur ad
              ullam repellendus neque!
            </p>
            <button>View More !</button>
          </div>
          <div className="right">
            <ContainerModelConatiner />
          </div>
        </div>
      </div>
      <section>
        <Reach />
      </section>
    </div>
  );
};

export default About;
