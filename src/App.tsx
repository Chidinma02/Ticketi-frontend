import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventDetail from './pages/EventDetail';
import ThankYou from './pages/ThankYou';
import Signup from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventPage from './pages/EventPage';
import Formfordashboard from './pages/Formfordashboard';
import ContactPage from './pages/ContactPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<Formfordashboard />} />
          <Route path="/contact" element={<ContactPage />}></Route>

          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
