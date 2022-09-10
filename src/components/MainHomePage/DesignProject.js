import "./DesignProject.css";
import { Link } from "react-router-dom";

export default function WebDesign({ design }) {
  const getImageSource = () => {
    if (design === "web") {
      return "/assets/photo/image-web-design.jpg";
    } else if (design === "app") {
      return "/assets/photo/image-app-design.jpg";
    } else {
      return "/assets/photo/image-graphic-design.jpg";
    }
  };

  const getInnerText = () => {
    if (design === "web") {
      return "innerTextWeb";
    } else if (design === "app") {
      return "innerTextApp";
    } else {
      return "innerTextGraphic";
    }
  };

  const getHeadline = () => {
    if (design === "web") {
      return "WEB DESIGN";
    } else if (design === "app") {
      return "APP DESIGN";
    } else {
      return "GRAPHIC DESIGN";
    }
  };

  return (
    <div className="webDesign">
      <Link to="webdesign">
        <img src={getImageSource()} alt="Design" className="designImage" />
        <div className={getInnerText()}>
          <div
            className={design === "graphic" ? "designTypeGraph" : "designType"}
          >
            {getHeadline()}
          </div>
          <div className="linkText">
            VIEW PROJECTS
            <img
              src="/assets/photo/icon-right-arrow.svg"
              alt="Arrow Icon"
              className="arrowIcon"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
