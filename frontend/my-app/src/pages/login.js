import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

const login = () => {
  return (


    // <div className="container_1">
    //   <form className="Auth-form">
    //     <div className="Auth-form-content">
    //       <h3 className="title">Sign In</h3>
    //       <div className="form-group mt-3">
    //         <label>Email address</label>
    //         <input
    //           type="email"
    //           className="form-control mt-1"
    //           placeholder="Enter email"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Password</label>
    //         <input
    //           type="password"
    //           className="form-control mt-1"
    //           placeholder="Enter password"
    //         />
    //       </div>
    //       <div className="d-grid gap-2 mt-3">
    //         <button type="submit" className="btn btn-primary">
    //           Submit
    //         </button>

    //       </div>
    //       <div className="d-grid gap-2 mt-3">
    //       <Link to="Signup" className="btn btn-primary">Sign iN</Link>
    //       </div>
    //       <p className="forgot-password text-center mt-2">
    //         Forgot <a href="#">password?</a>
    //       </p>
          

    //     </div>
    //   </form>
      
    // </div>
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
        <button className=' border-0'><Link  to="Signup" className="btn btn-primary">Sign In</Link></button>
      </div>
      <div className="forgot_passoword_link">
        <a>Forget Password</a>
      </div>
    </div>
   </div>
  )
}

export default login