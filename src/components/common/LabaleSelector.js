import React, { useState } from "react";
import { getRandomColor } from "../../utils/colorUtils";
import labelColors from "../../config/labelColors";

const LabelSelector = ({ selectedLabel, onLabelChange }) => {
  const [newLabel, setNewLabel] = useState("");
  const [dynamicLabels, setDynamicLabels] = useState(Object.keys(labelColors));

  const handleNewLabelChange = (e) => setNewLabel(e.target.value);

  const handleAddNewLabel = () => {
    if (newLabel && !dynamicLabels.includes(newLabel)) {
      const { randomColor, randomColorWithAlpha } = getRandomColor();
      setDynamicLabels((prevLabels) => [...prevLabels, newLabel]);
      labelColors[newLabel] = {
        strokeStyle: randomColor,
        fillStyle: randomColorWithAlpha,
      };
      setNewLabel("");
    }
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      {dynamicLabels.map((label) => (
        <label key={label} className="m-4">
          <input
            type="radio"
            value={label}
            checked={selectedLabel === label}
            onChange={onLabelChange}
            className="customLabelInput"
          />
          <span style={{ color: labelColors[label]?.strokeStyle || "black" }}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </span>
        </label>
      ))}

      <div className="m-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control "
            placeholder="Add New Color"
            aria-label="Add New Color"
            value={newLabel}
            onChange={handleNewLabelChange}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={handleAddNewLabel}
          >
            Add Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabelSelector;
