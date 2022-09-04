import "./index.css";
import Frame from "./Frame";
import DesignProject from "./DesignProject";
import ProjectApproach from "./ProjectApproach";

export default function MainHomePage() {
  return (
    <main>
      <Frame />
      <div className="designPortfolio">
        <DesignProject design="web" />
        <DesignProject design="app" />
        <DesignProject design="graphic" />
      </div>
      <div className="selfDescription">
        <ProjectApproach approach="passionate" />
        <ProjectApproach approach="resourceful" />
        <ProjectApproach approach="friendly" />
      </div>
    </main>
  );
}
