import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AyudaPage from './pages/AyudaPage';
import RegisterPage from './pages/RegisterPage';
import TasksLoginPage from './pages/TasksLoginPage';
import TasksDashboardPage from './pages/TasksDashboardPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ayuda" element={<AyudaPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tareas" element={<TasksLoginPage />} />
          <Route path="/tareas/dashboard" element={<TasksDashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}