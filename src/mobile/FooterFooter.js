import "./FooterFooter.css";
import LightLogo from "../mobile/photo_assets/logo-light.png";
import Rectangle from "../mobile/photo_assets/rectangle.png";
import FacebookIcon from "../mobile/photo_assets/icon-facebook.svg";
import YoutubeIcon from "../mobile/photo_assets/icon-youtube.svg";
import TwitterIcon from "../mobile/photo_assets/icon-twitter.svg";
import PinterestIcon from "../mobile/photo_assets/icon-pinterest.svg";
import InstagramIcon from "../mobile/photo_assets/icon-instagram.svg";

function FooterFooter() {
  return (
    <div className="footerFooter">
      <div className="contactInfo">
        <div className="logoAndLinks">
          <img src={LightLogo} alt="Light Logo" className="logo" />
          <img src={Rectangle} alt="Rectangle" />
          <div className="links">OUR COMPANY</div>
          <div className="links">LOCATIONS</div>
          <div className="links">CONTACT</div>
        </div>
        <div className="addresses">
          <div className="officeAddress">
            Designo Central Office
            <br />
            3886 Wellington Street
            <br />
            Toronto, Ontario M9C 3J5
          </div>
          <div className="officeAddress">
            Contact Us (Central Office)
            <br />
            P : +1 253-863-8967
            <br />M : contact@designo.co
          </div>
          <div className="socMedia">
            <img src={FacebookIcon} alt="Facebook Icon" />
            <img src={YoutubeIcon} alt="Youtube Icon" />
            <img src={TwitterIcon} alt="Twitter Icon" />
            <img src={PinterestIcon} alt="Pinterest Icon" />
            <img src={InstagramIcon} alt="Instagram Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterFooter;
