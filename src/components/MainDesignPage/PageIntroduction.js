import "./PageIntroduction.css";

export default function PageIntroduction() {
  return (
    <div className="pageIntroduction">
      <img
        src="/assets/photo/bg-pattern-two-circles.svg"
        alt="two little circles"
        className="twoCircles"
      />
      <div className="pageOpenings">
        <div className="pageOpeningHeadline">Web Design</div>
        <div className="pageOpeningsParagraph">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </div>
      </div>
    </div>
  );
}
