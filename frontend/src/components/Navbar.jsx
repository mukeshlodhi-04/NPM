import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Narmada Yatra</Link>
        <div className="space-x-4">
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/route" className="text-white hover:text-gray-200">Route</Link>
          <Link to="/temples" className="text-white hover:text-gray-200">Temples</Link>
          <Link to="/blogs" className="text-white hover:text-gray-200">Blogs</Link>
          <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-white hover:text-gray-200">
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;