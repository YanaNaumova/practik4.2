import "./App.css";
import { useState } from "react";
import Form from "./form";

function App() {
  const [color, setColor] = useState("blue");
  function updateColor(newColor) {
    setColor(newColor);
  }
  const styles = {
    backgroundColor: color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };
  return (
    <div style={styles}>
      <Form colorFunction={updateColor} />
    </div>
  );
}

export default App;
