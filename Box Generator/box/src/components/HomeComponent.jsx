import { useState } from "react";
import "../App.css";

  const HomeComponent = () => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim() !== "") {
      setBoxes([...boxes, color]);
      setColor("");
    }
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <label>Color:{" "} </label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)}
          placeholder="e.g. red" />
        <button type="submit">Add </button>
      </form>

      <div className="box-container">
        {boxes.map((col, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: col }} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
