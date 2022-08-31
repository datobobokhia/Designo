import "./index.css";

export default function ButtonTypes({ mode }) {
  return (
    <div>
      <button className={mode === "dark" ? "dark" : "light"}>Learn More</button>
    </div>
  );
}
