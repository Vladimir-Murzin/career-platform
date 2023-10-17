import React from 'react';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/register-page"
            element={<RegisterPage/>}
          />
          <Route 
            path="/login-page"
            element={<LoginPage/>}
          />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;