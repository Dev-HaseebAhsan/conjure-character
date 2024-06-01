import './css/CreateAccount.css';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import * as Unicons from '@iconscout/react-unicons';
import {Link } from "react-router-dom"

function CreateAccount() {
  return (
    <div className="test">
      <Header/>
      {/* Background */}
      <div class='createAcc-container'>
        {/* Border */}
        <div class='createAcc-wrapper'>
          <div class='createAcc-form'>
            {/* Create Account Header */}
            <h1>Create an Account</h1>

            {/* Email Input */}
            <div class='input-box'>
              <input type='email' placeholder='Email'/>
              <Unicons.UilEnvelope class='icon' size="20" color="white"/>
            </div>

            {/* Password Input */}
            <div class='input-box'>
              <input type='password' placeholder='Password'/>
              <Unicons.UilLock class='icon' size="20" color="white"/>
            </div>

            {/* Password Confirm */}
            <div class='input-box'>
              <input type='password' placeholder='Confirm Password'/>
              <Unicons.UilLock class='icon' size="20" color="white"/>
            </div>

            <button class='login-button' type="submit">
              <Link to="/">
                <span>Create Account</span>
              </Link>
            </button>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CreateAccount