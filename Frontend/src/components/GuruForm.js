import React, { useEffect, useState } from 'react';
import './GuruForm.css';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const GuruForm = () => {
  const nav = useNavigate()
  const bc =  axios.create({baseURL: 'https://gps-k-gi-sl.vercel.app'})
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
    guruFirstSector: '',
    guruSecondChoice: '',
    guruSecondCompany: '',
    guruSecondDesignation: '',
    guruSecondSector: '',
    guruThirdChoice: '',
    guruThirdCompany: '',
    guruThirdDesignation: '',
    guruThirdSector: ''
  });

  useEffect(()=>{
    if(!localStorage.getItem("userId")){
      nav("/")
    }
  },[])

  const departments = ['Computer Science', 'Electronics','Information Technology', 'Mechanical', 'Computer science and Business systems'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const gurus = [
    {
      "Name": "Dr. S.Kalpana",
      "Designation": "HoD / ASP",
      "Company": "AI&DS",
      "Sector": "Edu"
    },
    {
      "Name": "Mr.Sathish R",
      "Designation": "Asst Prof",
      "Company": "AI&DS",
      "Sector": "Edu"
    },
    {
      "Name": "Mr.Rajasekaran. S",
      "Designation": "ASP",
      "Company": "IT",
      "Sector": "Edu"
    },
    {
      "Name": "Mr.V. Vivekanandan",
      "Designation": "Asst Prof",
      "Company": "CSE",
      "Sector": "Edu"
    },
    {
      "Name": "Mrs. Geetha. V",
      "Designation": "Asst Prof",
      "Company": "CSE",
      "Sector": "Edu"
    },
    {
      "Name": "Dr.Leena B",
      "Designation": "Asst Prof",
      "Company": "ECE",
      "Sector": "Edu"
    },
    {
      "Name": "Dr. C. Venkatesh",
      "Designation": "Professor",
      "Company": "ECE",
      "Sector": "Edu"
    },
    {
      "Name": "Dr.Kamalakannan.S",
      "Designation": "ASP",
      "Company": "ECE",
      "Sector": "Edu"
    },
    {
      "Name": "Dr. S.K. Mydhili",
      "Designation": "Professor",
      "Company": "ECE",
      "Sector": "Edu"
    },
    {
      "Name": "Mr.E. Joel Anandraj",
      "Designation": "Asst Prof",
      "Company": "IT",
      "Sector": "Edu"
    },
    {
      "Name": "Dr. P.Krishna Priya",
      "Designation": "Director",
      "Company": "KG Genius Labs",
      "Sector": "Edu"
    },
    {
      "Name": "Ms.Pavithra. T.R",
      "Designation": "Director",
      "Company": "Metazord",
      "Sector": "Edu"
    },
    {
      "Name": "Mr. Navaneeth.M",
      "Designation": "Director",
      "Company": "KGX",
      "Sector": "Edu"
    },
    {
      "Name": "Ms. Ramya Vellingiri",
      "Designation": "Director & Principal Architect",
      "Company": "KGISL",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Vinith Menon",
      "Designation": "Vice President & Regional Head - MEA",
      "Company": "KGISL",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Saranyan Umapathy",
      "Designation": "Vice President - Global Business Development",
      "Company": "KGISL",
      "Sector": "Industry"
    },
    {
      "Name": "Mr. Anand Pulijal",
      "Designation": "Director - Business Development",
      "Company": "KG Invicta Services Pvt LTD",
      "Sector": "Industry"
    },
    {
      "Name": "Mr. Santhosh Sadashivan",
      "Designation": "Director - Products & Solutions",
      "Company": "KG Invicta Services Pvt LTD",
      "Sector": "Industry"
    },
    {
      "Name": "Ms. Usha Venugopal",
      "Designation": "Operations Manager",
      "Company": "KGM",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Shravan Kumar R",
      "Designation": "Deputy Manager - Program Planning & Production Control",
      "Company": "BMW Plant Chennai",
      "Sector": "Industry"
    },
    {
      "Name": "Dr.Chellappa Gopalakrishnan",
      "Designation": "CEO",
      "Company": "Genomatics Pvt Ltd",
      "Sector": "Industry"
    },
    {
      "Name": "Vishwanath Surendiran",
      "Designation": "CEO",
      "Company": "Steam-A",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Dinesh Tantri",
      "Designation": "Founder",
      "Company": "Digithos",
      "Sector": "Industry"
    },
    {
      "Name": "Thamizharasu C",
      "Designation": "Manager - Strategic Projects",
      "Company": "Quadra Systems",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Chinnasamy",
      "Designation": "Founder",
      "Company": "Centillion Labs",
      "Sector": "Industry"
    },
    {
      "Name": "Vishnu Prasad KC",
      "Designation": "Sr. Manager - HR",
      "Company": "NCC Ltd",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Anantha Raman",
      "Designation": "Director - Projects",
      "Company": "ZakApps",
      "Sector": "Industry"
    },
    {
      "Name": "Indu Renganathan",
      "Designation": "HR Generalist",
      "Company": "Glenwood Systems",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Saravanan Theckyam",
      "Designation": "Product Lead",
      "Company": "Google",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Ramesh Gopal",
      "Designation": "Co-Founder",
      "Company": "Colors of India",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Archan Choudhury",
      "Designation": "Founder",
      "Company": "Blackperl Academy",
      "Sector": "Industry"
    },
    {
      "Name": "Mr.Sandeep Joshi",
      "Designation": "Technologist",
      "Company": "Ex- Amazon",
      "Sector": "Industry"
    }
  ];    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleGuruChange = (choice, e) => {
    const selectedGuru = gurus.find(guru => guru.Name === e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      [`${choice}Choice`]: e.target.value,
      [`${choice}Company`]: selectedGuru ? selectedGuru.Company : '',
      [`${choice}Designation`]: selectedGuru ? selectedGuru.Designation : '',
      [`${choice}Sector`]: selectedGuru ? selectedGuru.Sector : '',
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
        guruFirstSector: '',
        guruSecondChoice: '',
        guruSecondCompany: '',
        guruSecondDesignation: '',
        guruSecondSector: '',
        guruThirdChoice: '',
        guruThirdCompany: '',
        guruThirdDesignation: '',
        guruThirdSector: ''
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
                <option key={guru.Name} value={guru.Name}>{guru.Name}</option>
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
            <input
              type="text"
              name="guruFirstSector"
              value={formData.guruFirstSector}
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
                <option key={guru.Name} value={guru.Name}>{guru.Name}</option>
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
            <input
              type="text"
              name="guruSecondSector"
              value={formData.guruSecondSector}
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
                <option key={guru.Name} value={guru.Name}>{guru.Name}</option>
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
            <input
              type="text"
              name="guruThirdSector"
              value={formData.guruThirdSector}
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
