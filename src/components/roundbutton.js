import { useState } from "react";

const RoundButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      style={{
        borderRadius: "50%",
        width: "32px",
        height: "30px",
        backgroundColor: isChecked ? "#4DC4DC" : "#fff",
        color: isChecked ? "#FFFFFF" : "#9CA3AF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #93b0cd",
        cursor: "pointer",
      }}
      onClick={handleButtonClick}
    >
      {isChecked && <span style={{ fontSize: "24px" }}>&#x2713;</span>}
    </button>
  );
};

export default RoundButton;
