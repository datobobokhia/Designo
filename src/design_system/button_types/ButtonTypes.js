import "./ButtonTypes.css";

function ButtonTypes({ mode }) {
  return (
    <div>
      <button className={mode === "dark" ? "dark" : "light"}>Learn More</button>
    </div>
  );
}

export default ButtonTypes;
