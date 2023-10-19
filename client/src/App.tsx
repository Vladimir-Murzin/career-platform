import React from 'react';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

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
          <Route
            path="/"
            element={<MainPage/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;