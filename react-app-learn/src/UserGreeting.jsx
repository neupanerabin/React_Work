import PropTypes from "prop-types";

function UserGreetings(props) {

  const welcomeMessage = <h2 className="welcome-message"> Welcome {props.username} </h2>;
  const loginPrompt = <h2 className="login-prompt">Please login to Continue</h2>;

  return (props.isLoggedIn ? welcomeMessage : loginPrompt);


}
UserGreetings.prototypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,

}

UserGreetings.defaultProps = {
  isLoggedIn: true,
  username: "Guest",

}

export default UserGreetings