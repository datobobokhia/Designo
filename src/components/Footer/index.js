import "./index.css";
import Contact from "./FooterContact.js";
import FooterFooter from "./FooterFooter.js";

export default function Footer({ necessity }) {
  return (
    <footer>
      <div className={necessity === "webdesign" ? "webDesignFooter" : "footer"}>
        <Contact />
        <FooterFooter />
      </div>
    </footer>
  );
}
