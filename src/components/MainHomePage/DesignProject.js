import "./DesignProject.css";
// import { BrowserRouter as Link } from "react-router-dom";

export default function WebDesign({ design }) {
  return (
    <div className="webDesign">
      <img
        src={
          design === "web"
            ? "/assets/photo/image-web-design.jpg"
            : design === "app"
            ? "/assets/photo/image-app-design.jpg"
            : "/assets/photo/image-graphic-design.jpg"
        }
        alt="Design"
        className="designImage"
      />
      <div
        className={
          design === "web"
            ? "innerTextWeb"
            : design === "app"
            ? "innerTextApp"
            : "innerTextGraphic"
        }
      >
        <div
          className={design === "graphic" ? "designTypeGraph" : "designType"}
        >
          {design === "web"
            ? "WEB DESIGN"
            : design === "app"
            ? "APP DESIGN"
            : "GRAPHIC DESIGN"}
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
    </div>
  );
}
