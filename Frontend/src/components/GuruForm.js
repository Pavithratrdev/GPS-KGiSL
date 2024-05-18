import React, { useEffect, useState } from 'react';
import './GuruForm.css';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const GuruForm = () => {
  const nav = useNavigate()
  const bc =  axios.create({baseURL: 'http://localhost:5000'})
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    studentName: '',
    dept: '',
    year: '',
    guruFirstChoice: '',
    guruFirstCompany: '',
    guruFirstDesignation: '',
    guruSecondChoice: '',
    guruSecondCompany: '',
    guruSecondDesignation: '',
    guruThirdChoice: '',
    guruThirdCompany: '',
    guruThirdDesignation: ''
  });

  useEffect(()=>{
    if(!localStorage.getItem("userId")){
      nav("/")
    }
  },[])

  const departments = ['Computer Science', 'Electronics','Information Technology', 'Mechanical', 'Computer science and Business systems'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const gurus = [
    { name: 'Guru 1', company: 'Company A', designation: 'Designation X' },
    { name: 'Guru 2', company: 'Company B', designation: 'Designation Y' },
    { name: 'Guru 3', company: 'Company C', designation: 'Designation Z' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleGuruChange = (choice, e) => {
    const selectedGuru = gurus.find(guru => guru.name === e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      [`${choice}Choice`]: e.target.value,
      [`${choice}Company`]: selectedGuru ? selectedGuru.company : '',
      [`${choice}Designation`]: selectedGuru ? selectedGuru.designation : '',
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await bc.post("/api/students", formData);
      console.log(data)
      alert(data);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        studentName: '',
        dept: '',
        year: '',
        guruFirstChoice: '',
        guruFirstCompany: '',
        guruFirstDesignation: '',
        guruSecondChoice: '',
        guruSecondCompany: '',
        guruSecondDesignation: '',
        guruThirdChoice: '',
        guruThirdCompany: '',
        guruThirdDesignation: ''
      })
    } catch (error) {
      console.log(error)
    }
    console.log('Form Data: ', formData);
  };

  const logout = async() => {
    try {
      localStorage.removeItem("userId")
      nav("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="guru-form-container">
      <nav className="nav">
        <h1>GPS</h1>
        <button onClick={logout}>Logout</button>
      </nav>
      <form className="guru-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Name</h2>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Contact Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>College Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Student Details</h2>
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <select name="dept" value={formData.dept} onChange={handleChange} required>
              <option value="">Select</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Year</label>
            <select name="year" value={formData.year} onChange={handleChange} required>
              <option value="">Select</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Guru Choices</h2>
          <div className="form-group">
            <label>Guru First Choice</label>
            <select
              name="guruFirstChoice"
              value={formData.guruFirstChoice}
              onChange={(e) => handleGuruChange('guruFirst', e)}
              required
            >
              <option value="">Select</option>
              {gurus.map(guru => (
                <option key={guru.name} value={guru.name}>{guru.name}</option>
              ))}
            </select>
            <input
              type="text"
              name="guruFirstCompany"
              value={formData.guruFirstCompany}
              disabled
            />
            <input
              type="text"
              name="guruFirstDesignation"
              value={formData.guruFirstDesignation}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Guru Second Choice</label>
            <select
              name="guruSecondChoice"
              value={formData.guruSecondChoice}
              onChange={(e) => handleGuruChange('guruSecond', e)}
              required
            >
              <option value="">Select</option>
              {gurus.map(guru => (
                <option key={guru.name} value={guru.name}>{guru.name}</option>
              ))}
            </select>
            <input
              type="text"
              name="guruSecondCompany"
              value={formData.guruSecondCompany}
              disabled
            />
            <input
              type="text"
              name="guruSecondDesignation"
              value={formData.guruSecondDesignation}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Guru Third Choice</label>
            <select
              name="guruThirdChoice"
              value={formData.guruThirdChoice}
              onChange={(e) => handleGuruChange('guruThird', e)}
              required
            >
              <option value="">Select</option>
              {gurus.map(guru => (
                <option key={guru.name} value={guru.name}>{guru.name}</option>
              ))}
            </select>
            <input
              type="text"
              name="guruThirdCompany"
              value={formData.guruThirdCompany}
              disabled
            />
            <input
              type="text"
              name="guruThirdDesignation"
              value={formData.guruThirdDesignation}
              disabled
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GuruForm;
