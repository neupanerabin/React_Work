import React, { useState } from 'react';

function ColourPicker() {
  const [color, setColor] = useState("#FFFFFF")

  function handleColorChanghe(event) {
    setColor(event.target.value);
  }

  return (
    <div className='colour-picker-container'>
      <h1 className='color-display-head'> Colour Picker </h1>
      <div className='color-display' style={{ backgroundColor: color }}>
        <p>Select a Color: {color}</p>
      </div>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={handleColorChanghe} />

    </div>
  )
}

export default ColourPicker