import "./FooterFooter.css";

export default function FooterFooter() {
  return (
    <div className="footerFooter">
      <div className="contactInfo">
        <div className="logoAndLinks">
          <img
            src="/assets/photo/logo-light.png"
            alt="Light Logo"
            className="logo"
          />
          <img src="/assets/photo/rectangle.png" alt="Rectangle" />
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
            <img src="/assets/photo/icon-facebook.svg" alt="Facebook Icon" />
            <img src="/assets/photo/icon-youtube.svg" alt="Youtube Icon" />
            <img src="/assets/photo/icon-twitter.svg" alt="Twitter Icon" />
            <img src="/assets/photo/icon-pinterest.svg" alt="Pinterest Icon" />
            <img src="/assets/photo/icon-instagram.svg" alt="Instagram Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
