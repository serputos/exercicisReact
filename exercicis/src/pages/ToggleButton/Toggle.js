import { useState } from "react";
import "./Toggle.css";

function ToggleButton() {
  function ViewText() {
    if (!color) {
      setColor(true);
      setPremut("PREMUT");
    } else {
      setColor(false);
      setPremut("NO PREMUT");
    }
  }
  const [color, setColor] = useState(false);
  const [premut, setPremut] = useState("NO PREMUT");

  return (
    <div className="AppToggle">
      <div className="DisplayToggle">
        <>
          <button
            className={color === false ? "boto1" : "boto2"}
            onClick={() => ViewText()}
          >
            TOGGLE BUTTON
          </button>
          <p>{premut}</p>
        </>
      </div>
    </div>
  );
}

export default ToggleButton;
