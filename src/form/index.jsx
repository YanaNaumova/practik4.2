import { useState } from "react";

function Form({ colorFunction }) {
  const [newColor, setNewColor] = useState("blue");
  function handleChange(color) {
    setNewColor(color);
  }
  function handleSubmit(event) {
    event.preventDefault();
    colorFunction(newColor);
  }

  const styles = {
    display: "flex",
    flexDirection: "colum",
    gap: "10px",
  };

  return (
    <form onSubmit={handleSubmit} style={styles}>
      <input
        type="color"
        onChange={(event) => handleChange(event.target.value)}
      />
      <input type="submit" value="Поменять цвет" />
    </form>
  );
}
export default Form;
