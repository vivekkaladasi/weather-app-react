import React from "react";

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="unit-toggle">
      <button onClick={() => onToggle("C")}>°C</button>
      <button onClick={() => onToggle("F")}>°F</button>
    </div>
  );
};

export default UnitToggle;
