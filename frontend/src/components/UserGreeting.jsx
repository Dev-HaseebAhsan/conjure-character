import PropTypes from 'prop-types'

function UserGreeting(props){

  const welcomeMessage =  <h2>
                            Welcome {props.username}
                          </h2>
  const loginPrompt = <h2>
                        Log In Here: 
                      </h2>

  return(props.isLoggedIn ? welcomeMessage : loginPrompt);
  // Above is a ternary operator; it is used as opposed to:
  // if(props.isLoggedIn){
  //   return <h2>Welcome {props.username}</h2>
  // } else {
  //   return <h2>Log In Here: </h2>
  // }
}

UserGreeting.properties = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
}

export default UserGreeting