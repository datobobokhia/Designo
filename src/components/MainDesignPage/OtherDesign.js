import "./OtherDesign.css";
import DesignProject from "../MainHomePage/DesignProject.js";
export default function OtherDesign() {
  return (
    <div className="otherDesigns">
      <DesignProject design="app" />
      <DesignProject design="graphic" />
    </div>
  );
}
