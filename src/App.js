
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './controllers/navbar/navbar';
import Body from './controllers/body/body';
import AddEmploy from './controllers/add_employ/add-employ';
import Login from './controllers/loginfrom/longin';
import EmployList from './controllers/employlist/employs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <><Navbar /><Body /></>} />
        <Route path="/add-employ" element={<><Navbar /><AddEmploy /></>} />
        <Route path="/employs-list" element={<><Navbar /><EmployList/></>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
