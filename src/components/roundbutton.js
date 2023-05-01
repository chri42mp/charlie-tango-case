import { useState } from "react";

const RoundButton = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    if (isChecked) {
      props.setSelected((prev) =>
        prev.filter((selectedId) => selectedId !== props.id)
      );
    } else {
      props.setSelected((prev) => prev.concat(props.id));
    }
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
