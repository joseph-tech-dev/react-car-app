import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Homepage.css'; // Ensure correct path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import Message from './Message'; // Import chatbot component

const HomePage = () => {
    const navigate = useNavigate();
    const [isMessageCardOpen, setIsMessageCardOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token'); // Adjust based on your auth system
        setIsLoggedIn(!!token);
    }, []);

    const showCarListings = () => navigate('/car-listings');

    const toggleMessageCard = () => setIsMessageCardOpen(!isMessageCardOpen);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <Link to="/" className="logo">HotWheelsHQ</Link>
                <div className="menus">
                    <Link to="/program">Program</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/about">About Us</Link>
                </div>
                {!isLoggedIn ? (
                    <Link to="/signup" className="signup">Sign Up</Link>
                ) : (
                    <>
                        <Link to="/dashboard" className="dashboard">Dashboard</Link>
                        <button className="logout" onClick={handleLogout}>Logout</button>
                    </>
                )}
            </nav>

            {/* Main Content */}
            <div className="main-content">
                <section className="header">
                    <div className="headerdesc">
                        <div className="title"><span>Your</span> Next <br />Car <span>Awaits</span></div>
                        <p>Welcome to HotWheelsHQ, your ultimate online destination for buying and selling cars!</p>
                        <button className="headerbutton" onClick={showCarListings}>Find Your Ride</button>
                    </div>

                    {/* Message Icon */}
                    <div className="message-icon" onClick={toggleMessageCard}>
                        <FontAwesomeIcon icon={faCommentAlt} />
                    </div>

                    {/* Chatbot Message Card */}
                    {isMessageCardOpen && (
                        <div className={`message-card ${isMessageCardOpen ? "open" : ""}`}>
                            <button className="close-btn" onClick={toggleMessageCard}>X</button>
                            <Message />
                        </div>
                    )}
                </section>

                {/* Car Search Form */}
                <div className="car-search-form">
                    <h2>Find a Car</h2>
                    <form>
                        <div className="form-group">
                            <select name="make" required>
                                <option value="">Select Make</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Mercedes Benz">Mercedes Benz</option>
                                <option value="Mazda">Mazda</option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <button type="submit" className="headerbutton">Search</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HomePage;
