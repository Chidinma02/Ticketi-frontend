import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './AboutPage';
import EventDetail from './pages/EventDetail';
import ThankYou from './pages/ThankYou';
import Signup from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />


          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
