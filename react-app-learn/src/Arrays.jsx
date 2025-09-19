import React, { useState } from "react";

function Arrays() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFoods() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    if (newFood.trim() !== "") {
      setFoods(f => [...f, newFood]);
    }
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter your food" />
      <button onClick={handleAddFoods}>Add Food</button>
    </>
  );
}

export default Arrays;
