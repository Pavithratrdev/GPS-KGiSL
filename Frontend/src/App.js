import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuruForm from './components/GuruForm';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AdminLogin from './components/AdminLogin';
import AdminForm from './components/AdminForm'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/formg" element={<GuruForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/"  element={<SignIn />} />
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path='/adminf' element={<AdminForm /> } />
          
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
