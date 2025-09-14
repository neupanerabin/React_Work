React Props and Hooks Guide
This guide provides an overview of key React concepts, including Props, PropTypes, defaultProps, Conditional Rendering, Click Events, and React Hooks, formatted for clarity in a README file.
Props
Props (short for properties) are read-only attributes used to pass data from a parent component to a child component in React. They make components dynamic and reusable by enabling data sharing.

Purpose: Share data between components.
Usage: Props are passed as attributes in JSX.
Example:<Component key="value" />

Here, key is the prop name, and "value" is the prop value passed to Component.

PropTypes
PropTypes is a type-checking mechanism to ensure props are of the correct data type, helping catch errors during development.

Purpose: Validate prop data types to prevent runtime errors.
Usage: Define PropTypes for a component to specify expected prop types.
Example:import PropTypes from 'prop-types';

MyComponent.propTypes = {
  age: PropTypes.number
};

In this example, the age prop must be a number, or React will log a warning.

defaultProps
defaultProps allows you to set default values for props when they are not provided by the parent component, ensuring fallback values.

Purpose: Provide default values for optional props.
Usage: Define defaultProps as a static property of the component.
Example:MyComponent.defaultProps = {
  name: "Guest"
};

If the name prop is not passed, it defaults to "Guest".

Conditional Rendering
Conditional rendering allows you to control what is rendered based on specific conditions, enabling dynamic UI updates.

Purpose: Show, hide, or change components based on conditions.
Example:{isLoggedIn ? <UserDashboard /> : <LoginScreen />}

Renders UserDashboard if isLoggedIn is true, otherwise renders LoginScreen.

Click Event
A click event is triggered when a user clicks on an element. You can respond to clicks by passing a callback function to the onClick event handler.

Purpose: Handle user interactions like button clicks.
Example:<button onClick={() => alert("Clicked!")}>Click Me</button>

Displays an alert when the button is clicked.

React Hooks
React Hooks are special functions that allow functional components to use React features like state and lifecycle methods without class components (introduced in React v16.8).

Purpose: Enable state and other React features in functional components.
Common Hooks: useState, useEffect, useContext, useReducer, useCallback, and more.

useState Hook
The useState hook allows you to create a stateful variable and a setter function to update its value in the Virtual DOM.

Purpose: Manage state in functional components.
Usage: Declare a state variable and its setter function.
Example:import { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState("Guest");
  return <button onClick={() => setName("User")}>{name}</button>;
}

Clicking the button updates the name state from "Guest" to "User".

## Onchange ;
event handler used primarily with form elements ex. <input>, <textarea>, <select>, <radio>
Triggers a function every time the value of the input changes
