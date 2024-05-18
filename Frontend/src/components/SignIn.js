import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../styles/AuthForm.css'; // Corrected path
import background from '../assets/background.jpg';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const SignIn = () => {
  const nav = useNavigate()
  const bc = axios.create({baseURL: "https://gps-k-gi-sl.vercel.app"})
  const [formData, setFormData] = useState({
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
      const res = await bc.post('/api/users/login', { email:formData.email, password:formData.password });
      console.log(res.data);
      localStorage.setItem("userId","_id")
      nav("/formg")
    } catch (error) {
      console.error(error.response.data.message);
      alert('Error: ' + error.response.data.message)

    }
  };

  return (
    <div className="auth-container" style={{ backgroundImage: `url(${background})` }}>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign In Here</h2>
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
        <button type="submit">Sign In</button>
        <p>Have you no Account? <a href="/signup">Create Account</a></p>
        <Button href="/admin">Admin</Button> 
      </form>
    </div>
  );
};

export default SignIn;
