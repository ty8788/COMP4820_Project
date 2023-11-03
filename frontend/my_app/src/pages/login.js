import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

const login = () => {
  return (


  
   <div className="main_container">
    <div className="form_container">
      <div className="form_container_title">
        <p className='text_sign_in'>Sign In</p>
      </div>
      <div className="input_email">
        <p className='text_email'>Email</p>
        <input type="email" name="email" id="user_email" />
      </div>
      <div className="input_password">
      <p className='text_password'>Password</p>
      <input type="password" name="password" id="user_password" />
      </div>
      <div className="log_in_button">
        <button className=' border-0'><Link  to="Homepage" className="btn btn-primary">Login</Link></button>
      </div>
      <div className="sign_in_button">
        <button className=' border-0'><Link  to="Signup" className="btn btn-primary">New User? Sign up!</Link></button>
      </div>
      <div className="forgot_passoword_link">
        <a>Forgot Password?</a>
      </div>
    </div>
   </div>
  )
}

export default login