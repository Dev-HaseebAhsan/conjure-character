import './css/App.css';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import logo from '../img/logo.png';
import * as Unicons from '@iconscout/react-unicons';
import {Link } from "react-router-dom";
import UserGreeting from "../components/UserGreeting.jsx";

function App() {
  return(
    <div>
      <Header/>
      {/* Leave this; it's for testing something related to changing stuff when a user logs in */}
      {/* <UserGreeting isLoggedIn={true} username="Haseeb"></UserGreeting> */}
      <body>
        <div className="app-container">
          {/*Contains Title Logo, Site description, Cool img*/}
          <div class='info-container'>
            {/* Logo Img */}
            <img class='site-logo' src={logo}/>
              {/*Gives Site description*/}
            <p class="site-description"> 
              An intuitive character creation tool to suit your Dungeons and Dragons needs. Made for the player, by the player.
            </p>
            {/* Add a cool img w/ mascot for main site background */}
          </div>

          {/* Login side of main page */}
          <div class='login-container'>
            {/* Border of Login */}
            <div class='login-wrapper'>
              <div class='login-form'>
                {/* Login Header */}
                <h1>Sign In</h1>

                {/* Email Input */}
                <div class='input-container'>
                  <input class='input-box' type='email' placeholder='Email'/>
                  {/* <label>Email</label> */}
                  <Unicons.UilEnvelope class='icon' size="20" color="white"/>
                </div>

                {/* Password Input */}
                <div class='input-container'>
                  <input class='input-box' type='password' placeholder='Password'/>
                  {/* <label>Password</label> */}
                  <Unicons.UilLock class='icon' size="20" color="white"/>
                </div>
                  
                {/* Remember Me + Forgot */}
                <div class='move-to-sides'>
                  <div class='remember'>
                    <input type='checkbox'></input>
                    <label>Remember Me</label>
                  </div>
                  <a href="#">Forgot Password?</a>
                </div>
                
                <button class='login-button' type="submit">Next</button>

                {/* Register */}
                <div class='move-to-sides'>
                  <p>Don't have an account?</p>
                  <Link to='/create-account'>
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer/>
    </div>
  );
}

export default App
