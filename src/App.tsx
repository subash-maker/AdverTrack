// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AICampaignOptimizer from './components/AICampaignOptimizer';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PredictiveInsights from './components/PredictiveInsights';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider, useAuth } from './context/AuthContext';
import { PredictiveInsightsProvider } from './context/PredictiveInsightsContext';
import ProtectedRoute from './components/ProtectedRoute';

function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      <Hero />
      {isAuthenticated && <Features />}
      {isAuthenticated && <AICampaignOptimizer />}
      {isAuthenticated && <AdminDashboard />}
      <PredictiveInsights />
      <Testimonials />
      
    </main>
  );
}

function App() {
  return (
    <AuthProvider>
      <PredictiveInsightsProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <Header />
            {/* <AdminDashboard/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              
            </Routes>
            <Footer />
          </div>
        </Router>
      </PredictiveInsightsProvider>
    </AuthProvider>
  );
}

export default App;
