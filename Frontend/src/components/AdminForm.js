import React, { useState } from 'react';
import './GuruForm.css';
import '../styles/Admin.css'
import background from '../assets/background.jpg';

const GuruForm = () => {
  const [formData, setFormData] = useState({
    // Your existing form state
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');

  const handleAdminLogin = () => {
    if (adminEmail === 'principal@kgkite.ac.in' || 'directoracademics@kgkite.ac.in' || 'ao@kgkite.ac.in') {
      setIsAdminAuthenticated(true);
      alert("Hello! You logged")
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

  const renderAdminPage = () => {
    // Logic to render admin page
    if (isAdminAuthenticated) {
      return (
        <div className="admin-page">
          <button onClick={handleAdminLogout}>Logout</button>
          {/* Add button to export form data as Excel */}
          <table>
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
                <th>Guru Second Choice</th>
                <th>Guru Second Company</th>
                <th>Guru Second Designation</th>
                <th>Guru Third Choice</th>
                <th>Guru Third Company</th>
                <th>Guru Third Designation</th>
              </tr>
            </thead>
            <tbody>
              {/* {students.map((student) => (
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
                  <td>{student.guruSecondChoice}</td>
                  <td>{student.guruSecondCompany}</td>
                  <td>{student.guruSecondDesignation}</td>
                  <td>{student.guruThirdChoice}</td>
                  <td>{student.guruThirdCompany}</td>
                  <td>{student.guruThirdDesignation}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="admin-login">
          <input
            type="email"
            placeholder="Enter admin email"
            value={adminEmail}
            onChange={handleAdminEmailChange}
          />
          <button onClick={handleAdminLogin}>Login</button>
        </div>
      );
    }
  };

  return (
    <div className="guru-form-container">
      {!isAdminAuthenticated ? (
        <form className="guru-form">
          {/* Your existing form */}
        </form>
      ) : null}
      {renderAdminPage()}
    </div>
  );
};

export default GuruForm;
