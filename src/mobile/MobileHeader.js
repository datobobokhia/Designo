import "./MobileHeader.css";
import LogoDark from "./photo_assets/logo-dark.png";
import IconHamburger from "./photo_assets/icon-hamburger.svg";

function MobileHeader() {
  return (
    <div className="header">
      <div className="headerContent">
        <img src={LogoDark} alt="header logo" className="headerLogo" />
        <img
          src={IconHamburger}
          alt="header hamburger icon"
          className="hamburgerIcon"
        />
      </div>
    </div>
  );
}

export default MobileHeader;
