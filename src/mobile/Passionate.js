import "./SelfDescriptionPassResFrie.css";
import PassionateImage from "./photo_assets/image-passionate.png";

function Passionate() {
  return (
    <div className="selfDescriprion">
      <img src={PassionateImage} alt="passionate boy" />
      <div className="selfTextDescription">
        <div className="descriptionHeadline">PASSIONATE</div>
        <div className="descriptionParagraph">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </div>
      </div>
    </div>
  );
}

export default Passionate;
