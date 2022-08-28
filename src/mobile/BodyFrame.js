import "./BodyFrame.css";
import HeroCircleHome from "./photo_assets/bg-pattern-hero-home.svg";
import ButtonTypes from "../design_system/button_types/ButtonTypes.js";
import HeroPhone from "./photo_assets/image-hero-phone.png";

function BodyFrame() {
  return (
    <div className="bodyFrame">
      <img
        src={HeroCircleHome}
        alt="big pattern hero home"
        className="heroCircleHome"
      />
      <div className="bodyFrameIntro">
        <div className="discription">
          <div className="headline">
            Award-winning custom designs and digital branding solutions
          </div>
          <div className="introduction">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </div>
        </div>
        <ButtonTypes mode={"dark"} />
      </div>
      <img src={HeroPhone} alt="phone" className="phoneFrame" />
    </div>
  );
}

export default BodyFrame;
