import "./ProjectApproach.css";

export default function ProjectApproach({ approach }) {
  const getInfo = {
    image: "",
    alt: "",
    headline: "",
    description: "",
  };

  if (approach === "passionate") {
    getInfo.image = "/assets/photo/image-passionate.png";
    getInfo.alt = "passionate boy";
    getInfo.headline = "PASSIONATE";
    getInfo.description = `Each project starts with an in-depth 
                            brand research to ensure we only create 
                            products that serve a purpose. We merge 
                            art, design, and technology into 
                            exciting new solutions.`;
  } else if (approach === "resourceful") {
    getInfo.image = "/assets/photo/image-resourceful.png";
    getInfo.alt = "girl in office";
    getInfo.headline = "RESOURCEFUL";
    getInfo.description = `Everything that we do has a strategic 
                            purpose. We use an agile approach in all 
                            of our projects and value customer 
                            collaboration. It guarantees superior 
                            results that fulfill our clients’ needs.`;
  } else {
    getInfo.image = "/assets/photo/image-friendly.png";
    getInfo.alt = "employees teamworking";
    getInfo.headline = "FRIENDLY";
    getInfo.description = ` We are a group of enthusiastic folks 
                            who know how to put people first. Our 
                            success depends on our customers, and 
                            we strive to give them the best 
                            experience a company can provide.`;
  }

  return (
    <div className="selfDescriprion">
      <img src={getInfo.image} alt={getInfo.alt} />
      <div className="selfTextDescription">
        <div className="descriptionHeadline">{getInfo.headline}</div>
        <div className="descriptionParagraph">{getInfo.description}</div>
      </div>
    </div>
  );
}
