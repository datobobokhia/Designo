import "./index.css";
import Contact from "./FooterContact.js";
import FooterFooter from "./FooterFooter.js";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <Contact />
        <FooterFooter />
      </div>
    </footer>
  );
}
