import { useState } from "react";
const GraphicEQ = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider-wrapper">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <div className="track">
        <div className="thumb" style={{ bottom: `${value}%` }}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default GraphicEQ;
