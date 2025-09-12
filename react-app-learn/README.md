React Props Guide
Props
Props (short for properties) are read-only attributes used to pass data from a parent component to a child component in React. They allow components to be dynamic and reusable by enabling data sharing.

Purpose: Share data between components.

Usage: Props are passed to a component as attributes in JSX.

Example:
<Component key="value" />

In this example, key is the prop name, and "value" is the prop value passed to the Component.


PropTypes
PropTypes is a mechanism in React to enforce type-checking for props, ensuring that the passed values are of the correct data type. This helps catch errors during development.

Purpose: Validate the data type of props to prevent runtime errors.

Usage: Define PropTypes for a component to specify the expected type of each prop.

Example:
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  age: PropTypes.number
};

In this example, the age prop must be a number, and React will warn if a different type is passed.


defaultProps
defaultProps allows you to set default values for props in case they are not provided by the parent component. This ensures the component has fallback values to work with.

Purpose: Provide default values for optional props.

Usage: Define defaultProps as a static property of the component.

Example:
MyComponent.defaultProps = {
  name: "Guest"
};

In this example, if the name prop is not passed to MyComponent, it defaults to "Guest".


## Conditional Rendering 
It allows you to control what gets rendered in your application based on certain conditions(show, hide, or chnage components)

## Click event = 
An interraction when a user clicks on a specific element. We can respond to clicks by passing a callback to the onClick event handler.