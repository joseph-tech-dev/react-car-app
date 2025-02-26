// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Program from './components/Program';
import Reviews from './components/Reviews';
import Message from './components/Message'; // Or Message, Chatbot, etc.
import TestBackground from './components/TestBackground'; //TEsting Background
// Import other components here (Dashboard, Contact, About, etc.)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element = {<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/program" element={<Program />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/message" element={<Message />} />
                <Route path="/test" element={<TestBackground />} />
                {/* Add routes for other components here */}
                {/* Example: <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
        </Router>
    );
}

export default App;