import React, { useState } from 'react';
import '../styles/AuthForm.css'; // Corrected path
import background from '../assets/background2.jpg';
import axios from 'axios';

const AdminLogin = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [students, setStudents] = useState([]);
  const bc = axios.create({ baseURL: 'https://gps-k-gi-sl.vercel.app' });

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (
      adminEmail.toLowerCase() === 'principal@kgkite.ac.in' ||
      adminEmail.toLowerCase() === 'directoracademics@kgkite.ac.in' ||
      adminEmail.toLowerCase() === 'ao@kgkite.ac.in' ||
      adminEmail.toLowerCase() === 'lawrence.b@kgkite.ac.in'
    ) {
      setIsAdminAuthenticated(true);
      alert("Hello! You logged in.");
    } else {
      setIsAdminAuthenticated(false);
      alert('Invalid email. Access denied.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setAdminEmail('');
  };

  const handleAdminEmailChange = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleGetAllStudents = async () => {
    try {
      const { data } = await bc.get('/api/students');
      console.log(data);
      setStudents(data);
    } catch (error) {
      console.log(error);
      alert('Error: ' + error);
    }
  };

  const renderAdminPage = () => {
    if (isAdminAuthenticated) {
      return (
        <div className="admin-page">
          <button onClick={handleAdminLogout}>Logout</button>
          <button onClick={handleGetAllStudents}>View Data</button>
          <div className="table-container">
            <table className='table'>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Student Name</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Guru First Choice</th>
                  <th>Guru First Company</th>
                  <th>Guru First Designation</th>
                  <th>Guru First Domain</th>
                  <th>Guru First Sector</th>
                  <th>Guru Second Choice</th>
                  <th>Guru Second Company</th>
                  <th>Guru Second Designation</th>
                  <th>Guru Second Domain</th>
                  <th>Guru Second Sector</th>
                  <th>Guru Third Choice</th>
                  <th>Guru Third Company</th>
                  <th>Guru Third Designation</th>
                  <th>Guru Third Domain</th>
                  <th>Guru Third Sector</th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 && students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td>{student.studentName}</td>
                    <td>{student.dept}</td>
                    <td>{student.year}</td>
                    <td>{student.guruFirstChoice}</td>
                    <td>{student.guruFirstCompany}</td>
                    <td>{student.guruFirstDesignation}</td>
                    <td>{student.guruFirstDomain}</td>
                    <td>{student.guruFirstSector}</td>
                    <td>{student.guruSecondChoice}</td>
                    <td>{student.guruSecondCompany}</td>
                    <td>{student.guruSecondDesignation}</td>
                    <td>{student.guruSecondDomain}</td>
                    <td>{student.guruSecondSector}</td>
                    <td>{student.guruThirdChoice}</td>
                    <td>{student.guruThirdCompany}</td>
                    <td>{student.guruThirdDesignation}</td>
                    <td>{student.guruThirdDomain}</td>
                    <td>{student.guruThirdSector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div className="admin-login">
          <form className="auth-form" onSubmit={handleAdminLogin}>
            <h2>Admin Login Here</h2>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={adminEmail}
                onChange={handleAdminEmailChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  };

  return (
    <div className="auth-container" style={{ backgroundImage: `url(${background})` }}>
      {renderAdminPage()}
    </div>
  );
};

export default AdminLogin;