import React, { useState } from 'react';
import './signup.css'; 
import { Link } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [submitted, setSubmitted] = useState(false);
  

  
  const handleName = (e) => {
    setName(e.target.value);
  };

  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert('enter all values')
      setSubmitted(false);
    } else {
      setSubmitted(true);
      
    }
  };


  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
      <form>
        <label className="label_name">Name</label>
        <input onChange={handleName} className="input_name" value={name} type="text" />

        <label className="label_email">Email</label>
        <input onChange={handleEmail} className="input_email" value={email} type="email" />

        <label className="label_password">Password</label>
        <input onChange={handlePassword} className="input_password" value={password} type="password" />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
      {
      submitted && <div className="user_added">
        <p>User registered Sucessfully</p>
        
        </div>
      }
    </div>
  );
}
