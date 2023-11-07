import React, { useState, useEffect } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Login(){
  const user = "";
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [pass, setPass] = useState('');

  const [loginUser, setLoginUser] = useState({
    username:"",
    password:""
  })

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  
  
  const navigate = useNavigate();


  const login = async () => {
    console.log("sending: ", username, password)
    const user = {username:username, password:password}
    console.log(user)
    await fetch(`http://localhost:8000/Login/`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if(json.message == "Success"){
          console.log("Validated")
          alert("You have successfully signed in!")
          navigate(`/Homepage/` + username)
        }
        else{
          alert("There was an issue with your credentials")
        }
      })
      
  }

  return (  
   <div className="main_container">
    <div className="form_container">
      <div className="form_container_title">
        <p className='text_sign_in'>Sign In</p>
      </div>
      <div className="input_email">
        <p className='text_email'>Username</p>
        <input type="username" name="username" id="user_email"  onChange={handleUsername} />
      </div>
      <div className="input_password">
      <p className='text_password'>Password</p>
      <input type="password" name="password" id="user_password" onChange={handlePassword} />
      </div>
      <div className="log_in_button">
        <button onClick={login} id = "button" className=' border-0'><p className="btn btn-primary">Login</p></button>
      </div>
      <div className="sign_in_button">
        <button className='border-0'><Link  to="Signup" className="btn btn-primary">New User? Sign up!</Link></button>
      </div>
      <div className="forgot_passoword_link">
        <a>Forgot Password?</a>
      </div>
    </div>
   </div>
  )
}
