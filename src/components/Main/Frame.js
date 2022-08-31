import "./Frame.css";
import ButtonTypes from "../../design_system/ButtonTypes";

export default function BodyFrame() {
  return (
    <div className="bodyFrame">
      <img
        src="/assets/photo/bg-pattern-hero-home.svg"
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
      <img
        src="/assets/photo/image-hero-phone.png"
        alt="phone"
        className="phoneFrame"
      />
    </div>
  );
}
