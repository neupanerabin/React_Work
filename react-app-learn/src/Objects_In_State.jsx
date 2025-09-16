import { useState } from "react";


function UpdateObjectState() {

  const [car, setCar] = useState({ year: 2024, make: "Tesla", model: "Model-3 " });

  function handleYearChange(event) {
    setCar(c => ({ ...c, year: event.target.value }));

  }

  function handleMakeChange(event) {
    setCar(car => ({ ...car, make: event.target.value }))

  }

  function handleModelChange(event) {
    setCar(car => ({ ...car, model: event.target.value }));

  }



  return (<div>
    <p>Your favourite car is : {car.year}{car.make} {car.model} </p>

    <input type="number" value={car.year} onChange={handleYearChange} /> <br />
    <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
    <input type="text" value={car.model} onChange={handleModelChange} /> <br />

  </div>);


}
export default UpdateObjectState