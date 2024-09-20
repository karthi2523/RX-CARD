import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Signin';  // Update path if needed
import Signup from './Signup';  // Update path if needed

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   
  );
};

export default App;
