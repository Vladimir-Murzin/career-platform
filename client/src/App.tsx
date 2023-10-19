import React from 'react';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;