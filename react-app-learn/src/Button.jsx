

function Button() {

  const handleClick = (e) => e.target.textContent = "OUCH! ";


  return (
    <button onDoubleClick={(e) => handleClick("Robs")}>Click me </button>
  );

}

export default Button 