// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-purple-700">AdverTrack</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/#solutions" className="text-gray-700 hover:text-purple-700 transition-colors">Solutions</Link>
          <Link to="/blog" className="text-gray-700 hover:text-purple-700 transition-colors">Blog</Link>
          <Link to="/#company" className="text-gray-700 hover:text-purple-700 transition-colors">Company</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-700 transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center text-gray-700 hover:text-purple-700 transition-colors">
              <Globe size={20} />
              <span className="ml-1">EN</span>
              <ChevronDown size={16} />
            </button>
          </div>
          {isAuthenticated ? (
            // Display profile icon with logout option if authenticated
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-purple-700 transition-colors">
                <User size={24} />
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-32 py-2">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // Display login and signup buttons if not authenticated
            <>
              <button onClick={handleLogin} className="text-purple-700 hover:text-purple-800 transition-colors">Login</button>
              <button onClick={handleSignUp} className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">Sign Up</button>
            </>
          )}
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col p-4">
            <Link to="/#solutions" className="py-2 text-gray-700 hover:text-purple-700 transition-colors">Solutions</Link>
            <Link to="/blog" className="py-2 text-gray-700 hover:text-purple-700 transition-colors">Blog</Link>
            <Link to="/#company" className="py-2 text-gray-700 hover:text-purple-700 transition-colors">Company</Link>
            <Link to="/contact" className="py-2 text-gray-700 hover:text-purple-700 transition-colors">Contact</Link>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="mt-4 w-full text-purple-700 hover:text-purple-800 transition-colors">Logout</button>
            ) : (
              <>
                <button onClick={handleSignUp} className="mt-4 w-full bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">Sign Up</button>
                <button onClick={handleLogin} className="mt-2 w-full text-purple-700 hover:text-purple-800 transition-colors">Login</button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
