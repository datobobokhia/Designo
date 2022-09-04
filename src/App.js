import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WebDesign from "./pages/WebDesign";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/webdesign" element={<WebDesign />} />
      </Routes>
    </Router>
  );
}
