import React, { useEffect, useState } from 'react';
import './GuruForm.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const GuruForm = () => {
  const nav = useNavigate();
  const bc = axios.create({ baseURL: 'https://gps-k-gi-sl.vercel.app' });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    studentName: '',
    dept: '',
    year: '',
    guruFirstDomain: '',
    guruFirstChoice: '',
    guruFirstCompany: '',
    guruFirstDesignation: '',
    guruFirstSector: '',
    guruSecondDomain: '',
    guruSecondChoice: '',
    guruSecondCompany: '',
    guruSecondDesignation: '',
    guruSecondSector: '',
    guruThirdDomain: '',
    guruThirdChoice: '',
    guruThirdCompany: '',
    guruThirdDesignation: '',
    guruThirdSector: ''
  });

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      nav("/");
    }
  }, []);

  const departments = ['Computer Science', 'Electronics','Information Technology', 'Mechanical', 'Computer science and Business systems','Artificial Intelligence and Data Science','MBA'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const domains = ['AI/ML', "Blockchain", "Cloud and Devops", "Cyber Security", "Full Stack", "Java"];
  const gurus = [
    {
      "id": 1,
      "Name": "Dr. S.Kalpana",
      "Designation": "HoD / ASP",
      "Company": "AI&DS",
      "Sector": "Edu",
      "Domain": ["AI & ML"]
    },
    {
      "id": 2,
      "Name": "Mr.Sathish R",
      "Designation": "Asst Prof",
      "Company": "AI&DS",
      "Sector": "Edu",
      "Domain": ["AI & ML"]
    },
    {
      "id": 3,
      "Name": "Mr.Rajasekaran. S",
      "Designation": "ASP",
      "Company": "IT",
      "Sector": "Edu",
      "Domain": ["Cloud & Dev Ops"]
    },
    {
      "id": 4,
      "Name": "Mr.V. Vivekanandan",
      "Designation": "Asst Prof",
      "Company": "CSE",
      "Sector": "Edu",
      "Domain": ["Cloud & Dev Ops"]
    },
    {
      "id": 5,
      "Name": "Mrs. Geetha. V",
      "Designation": "Asst Prof",
      "Company": "CSE",
      "Sector": "Edu",
      "Domain": [""]
    },
    {
      "id": 6,
      "Name": "Dr.Leena B",
      "Designation": "Asst Prof",
      "Company": "ECE",
      "Sector": "Edu",
      "Domain": ["ML & Image Processing"]
    },
    {
      "id": 7,
      "Name": "Dr. C. Venkatesh",
      "Designation": "Professor",
      "Company": "ECE",
      "Sector": "Edu",
      "Domain": ["Wireless Communication"]
    },
    {
      "id": 8,
      "Name": "Dr.Kamalakannan.S",
      "Designation": "ASP",
      "Company": "ECE",
      "Sector": "Edu",
      "Domain": ["Wireless Communication"]
    },
    {
      "id": 9,
      "Name": "Dr. S.K. Mydhili",
      "Designation": "Professor",
      "Company": "ECE",
      "Sector": "Edu",
      "Domain": ["Embedded Systems & Machine Learning"]
    },
    {
      "id": 10,
      "Name": "Mr.E. Joel Anandraj",
      "Designation": "Asst Prof",
      "Company": "IT",
      "Sector": "Edu",
      "Domain": ["Cyber Security"]
    },
    {
      "id": 11,
      "Name": "Dr. P.Krishna Priya",
      "Designation": "Director",
      "Company": "KG Genius Labs",
      "Sector": "Edu",
      "Domain": ["Full Stack", "Mobile Application"]
    },
    {
      "id": 12,
      "Name": "Ms.Pavithra. T.R",
      "Designation": "Director",
      "Company": "Metazord",
      "Sector": "Edu",
      "Domain": ["Block Chain", "Full Stack", "Cloud & Dev Ops"]
    },
    {
      "id": 13,
      "Name": "Mr. Navaneeth.M",
      "Designation": "Director",
      "Company": "KGX",
      "Sector": "Edu",
      "Domain": ["AI & ML", "Full Stack", "Embedded Systems"]
    },
    {
      "id": 14,
      "Name": "Ms. Ramya Vellingiri",
      "Designation": "Director & Principal Architect",
      "Company": "KGISL",
      "Sector": "Industry",
      "Domain": ["Python", "AI & ML"]
    },
    {
      "id": 15,
      "Name": "Mr.Vinith Menon",
      "Designation": "Vice President & Regional Head - MEA",
      "Company": "KGISL",
      "Sector": "Industry",
      "Domain": ["Networking"]
    },
    {
      "id": 16,
      "Name": "Mr.Saranyan Umapathy",
      "Designation": "Vice President - Global Business Development",
      "Company": "KGISL",
      "Sector": "Industry",
      "Domain": ["Project Management"]
    },
    {
      "id": 17,
      "Name": "Mr. Anand Pulijal",
      "Designation": "Director - Business Development",
      "Company": "KG Invicta Services Pvt LTD",
      "Sector": "Industry",
      "Domain": ["Sales & Marketing - Digital"]
    },
    {
      "id": 18,
      "Name": "Mr. Santhosh Sadashivan",
      "Designation": "Director - Products & Solutions",
      "Company": "KG Invicta Services Pvt LTD",
      "Sector": "Industry",
      "Domain": ["Full Stack", "Database Management", "Analytics"]
    },
    {
      "id": 19,
      "Name": "Ms. Usha Venugopal",
      "Designation": "Operations Manager",
      "Company": "KGM",
      "Sector": "Industry",
      "Domain": ["AWS", "Digital Marketing"]
    },
    {
      "id": 20,
      "Name": "Mr.Shravan Kumar R",
      "Designation": "Deputy Manager - Program Planning & Production Control",
      "Company": "BMW Plant Chennai",
      "Sector": "Industry",
      "Domain": ["Project Management"]
    },
    {
      "id": 21,
      "Name": "Dr.Chellappa Gopalakrishnan",
      "Designation": "CEO",
      "Company": "Genomatics Pvt Ltd",
      "Sector": "Industry",
      "Domain": ["Bio Informatics", "Big Data"]
    },
    {
      "id": 22,
      "Name": "Vishwanath Surendiran",
      "Designation": "CEO",
      "Company": "Steam-A",
      "Sector": "Industry",
      "Domain": ["Web Application", "Mobile Application", "Communication Protocal"]
    },
    {
      "id": 23,
      "Name": "Mr.Dinesh Tantri",
      "Designation": "Founder",
      "Company": "Digithos",
      "Sector": "Industry",
      "Domain": ["Software Engineering", "Cyber Security"]
    },
    {
      "id": 24,
      "Name": "Thamizharasu C",
      "Designation": "Manager - Strategic Projects",
      "Company": "Quadra Systems",
      "Sector": "Industry",
      "Domain": ["Application Development using Power App & Power Automate", "Deployment of Microsoft Products"]
    },
    {
      "id": 25,
      "Name": "Mr.Chinnasamy",
      "Designation": "Founder",
      "Company": "Centillion Labs",
      "Sector": "Industry",
      "Domain": ["Software Development", "Programming Languages"]
    },
    {
      "id": 26,
      "Name": "Vishnu Prasad KC",
      "Designation": "Sr. Manager - HR",
      "Company": "NCC Ltd",
      "Sector": "Industry",
      "Domain": ["HR"]
    },
    {
      "id": 27,
      "Name": "Mr.Anantha Raman",
      "Designation": "Director - Projects",
      "Company": "ZakApps",
      "Sector": "Industry",
      "Domain": ["Software Engineering", "Programming Languages"]
    },
    {
      "id": 28,
      "Name": "Indu Renganathan",
      "Designation": "HR Generalist",
      "Company": "Glenwood Systems",
      "Sector": "Industry",
      "Domain": ["HR"]
    },
    {
      "id": 29,
      "Name": "Mr.Saravanan Theckyam",
      "Designation": "Product Lead",
      "Company": "Google",
      "Sector": "Industry",
      "Domain": ["Embedded Systems", "AI & ML"]
    },
    {
      "id": 30,
      "Name": "Mr.Ramesh Gopal",
      "Designation": "Co-Founder",
      "Company": "Colors of India",
      "Sector": "Industry",
      "Domain": ["Block Chain"]
    },
    {
      "id": 31,
      "Name": "Mr.Archan Choudhury",
      "Designation": "Founder",
      "Company": "Blackperl Academy",
      "Sector": "Industry",
      "Domain": ["Cyber Security"]
    },
    {
      "id": 32,
      "Name": "Mr.Sandeep Joshi",
      "Designation": "Technologist",
      "Company": "Ex- Amazon",
      "Sector": "Industry",
      "Domain": ["Cloud & Dev Ops"]
    }
  ];
  
  const getAllDomains = () => {
    const domainsSet = new Set();
    gurus.forEach(guru => {
      guru.Domain.forEach(domain => {
        if (domain) {
          domainsSet.add(domain);
        }
      });
    });
    return Array.from(domainsSet).sort();
  };
  
  const allDomains = getAllDomains();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDomainChange = (choice, e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [`${choice}Domain`]: value,
      [`${choice}Choice`]: '',
      [`${choice}Company`]: '',
      [`${choice}Designation`]: '',
      [`${choice}Sector`]: ''
    }));
  };

  const handleGuruChange = (choice, e) => {
    const selectedGuru = gurus.find(guru => guru.Name === e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      [`${choice}Choice`]: e.target.value,
      [`${choice}Company`]: selectedGuru ? selectedGuru.Company : '',
      [`${choice}Designation`]: selectedGuru ? selectedGuru.Designation : '',
      [`${choice}Sector`]: selectedGuru ? selectedGuru.Sector : ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormData({...formData,studentName: formData.firstName + " " + formData.lastName})
      const { data } = await bc.post("/api/students", formData);
      console.log(data);
      alert(data);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        studentName: '',
        dept: '',
        year: '',
        guruFirstDomain: '',
        guruFirstChoice: '',
        guruFirstCompany: '',
        guruFirstDesignation: '',
        guruFirstSector: '',
        guruSecondDomain: '',
        guruSecondChoice: '',
        guruSecondCompany: '',
        guruSecondDesignation: '',
        guruSecondSector: '',
        guruThirdDomain: '',
        guruThirdChoice: '',
        guruThirdCompany: '',
        guruThirdDesignation: '',
        guruThirdSector: ''
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
    console.log('Form Data: ', formData);
  };

  const logout = async () => {
    try {
      localStorage.removeItem("userId");
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  const filterGurusByDomain = (domain) => {
    return gurus.filter(guru => guru.Domain.includes(domain));
  };

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
              disabled
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
          {['First', 'Second', 'Third'].map((choice, index) => (
            <div className="form-group" key={index}>
              <label>Guru {choice} Domain</label>
              <select
                name={`guru${choice}Domain`}
                value={formData[`guru${choice}Domain`]}
                onChange={(e) => handleDomainChange(`guru${choice}`, e)}
                required
              >
                <option value="">Select</option>
                {allDomains.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
              <label>Guru {choice} Choice</label>
              <select
                name={`guru${choice}Choice`}
                value={formData[`guru${choice}Choice`]}
                onChange={(e) => handleGuruChange(`guru${choice}`, e)}
                required
              >
                <option value="">Select</option>
                {filterGurusByDomain(formData[`guru${choice}Domain`]).map(guru => (
                  <option key={guru.Name} value={guru.Name}>{guru.Name}</option>
                ))}
              </select>
              <input
                type="text"
                name={`guru${choice}Company`}
                value={formData[`guru${choice}Company`]}
                disabled
              />
              <input
                type="text"
                name={`guru${choice}Designation`}
                value={formData[`guru${choice}Designation`]}
                disabled
              />
              <input
                type="text"
                name={`guru${choice}Sector`}
                value={formData[`guru${choice}Sector`]}
                disabled
              />
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GuruForm;
