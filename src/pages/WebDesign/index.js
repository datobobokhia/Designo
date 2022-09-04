import Header from "../../components/Header";
import MainDesignPage from "../../components/MainDesignPage";
import OtherDesign from "../../components/MainDesignPage/OtherDesign";
import Footer from "../../components/Footer";

export default function WebDesign() {
  return (
    <>
      <Header />
      <MainDesignPage />
      <OtherDesign />
      <Footer necessity="webdesign" />
    </>
  );
}
