import React, { useState } from "react";
import "./SizeDropdown.scss"; // Import your CSS file

function Dropdown(props) {
  const sizes = [10, 15, 20,25, 30];
const onSelect=(item)=>{
    props.onSelect(item)
}
  return (
    <div className="drop-page">
      <label htmlFor="size">Select Size:</label>
      <select
        id="size"
        className="size-dropdown"
        onChange={(e) => props.onSelect(e.target.value)}
      >
        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
