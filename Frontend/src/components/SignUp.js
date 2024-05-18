import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../styles/AuthForm.css'; // Corrected path
import background from '../assets/background.jpg';
import axios from 'axios';

const SignUp = () => {
  const nav = useNavigate()
  const bc = axios.create({baseURL: 'http://localhost:5000'})
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(()=>{
    if(localStorage.getItem("userId")){
      nav("/formg")
    }
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await bc.post('/api/users/register', { username:formData.username, email:formData.email, password:formData.password });
      console.log(res.data);
      nav("/signin")
    } catch (error) {
      console.error(error.response.data.message);
      alert('Error: ' + error.response.data.message)
    }
  };

  return (
    <div className="auth-container" style={{ backgroundImage: `url(${background})` }}>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up Here</h2>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>Have you an Account? <a href="/signin">Sign In</a></p>
      </form>
    </div>
  );
};

export default SignUp;
