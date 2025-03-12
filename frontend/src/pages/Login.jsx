import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/user/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setIsLoggedIn(true);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to the Register page
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">{isLoggedIn ? 'Logout' : 'Login'}</h1>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white p-2 rounded mb-4"
          >
            Logout
          </button>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-4">
              Login
            </button>
            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={handleRegisterRedirect}
                className="text-blue-500 hover:underline"
              >
                Register
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
