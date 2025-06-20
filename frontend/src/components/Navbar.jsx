import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Check auth status on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-600 shadow-lg py-3' : 'bg-blue-500 py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold hover:text-blue-100 transition-colors">
          Narmada Yatra
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/route">Route</NavLink>
          <NavLink to="/temples">Temples</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/register">Register</NavLink>
          
          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="text-white hover:text-blue-100 transition-colors"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>

        {/* Mobile menu button (optional) */}
        <button className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

// Reusable NavLink component for consistent styling
const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-white hover:text-blue-100 transition-colors font-medium"
  >
    {children}
  </Link>
);

export default Navbar;