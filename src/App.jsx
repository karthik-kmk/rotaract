// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components or pages here
import Landing from './pages/landingpage';
import Adminmain from './pages/adminmain';
import Usermain from './pages/usermain';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/adminmain.jsx" element={<Adminmain/>} />
        <Route path="/usermain.jsx" element={<Usermain/>} />
        
      
      </Routes>
    </Router>
  );
}

export default App;


