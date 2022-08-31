import "./MobileHeader.css";

export default function MobileHeader() {
  return (
    <div className="header">
      <div className="headerContent">
        <img
          src="/assets/photo/logo-dark.png"
          alt="header logo"
          className="headerLogo"
        />
        <img
          src="/assets/photo/icon-hamburger.svg"
          alt="header hamburger icon"
          className="hamburgerIcon"
        />
      </div>
    </div>
  );
}
