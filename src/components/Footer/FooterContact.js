import "./FooterContact.css";
import ButtonTypes from "../../design_system/ButtonTypes/index.js";

export default function Contact() {
  return (
    <div className="contact">
      <img
        src="/assets/photo/bg-pattern-design-pages-intro-mobile.svg"
        alt="Three Circles"
        className="threeCircles"
      />
      <div className="content">
        <div className="contentText">
          <div className="contentHeader">Let’s talk about your project</div>
          <div className="contentParagraph">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </div>
        </div>
        <ButtonTypes mode={"dark"} />
      </div>
    </div>
  );
}
