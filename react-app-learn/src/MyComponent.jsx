import React, { use, useState } from 'react';

function MyComponent() {
  const [name, setName] = useState("Robs");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState("Delivery");


  const updateName = () => {
    setName("Robscode")
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  //  onchange event handler
  function handleNameChange(event) {
    setName(event.target.value)

  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value)
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }


  return (
    <div>
      <p> Name: {name}</p>
      <button onClick={updateName}>Set Name </button>

      <p> Age: {age}</p>
      <button onClick={incrementAge}>Increment Age </button>

      <p> IsEmployed:{isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status </button>
      {/* onChange through the event handler */}
      <div>
        <br />
        <br />
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number' />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions' type="text" />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="visa">Visa </option>
          <option value="Mastercard">Mastercard </option>
          <option value="GiftCard"> GiftCard</option>

        </select>
        <p>Payment: {payment}</p>

        <label>
          <input type="radio" value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange} />
          Delivery
        </label><br />

        <label>
          <input type="radio" value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange} />
          Pick Up
        </label>
        <p>Shipping: {shipping}</p>

      </div>

    </div>
  );

}

export default MyComponent