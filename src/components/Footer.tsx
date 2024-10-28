import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AdverTrack</h3>
            <p className="text-purple-200">Fuel growth and maximize your budget with our powerful app marketing platform.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Platform</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <form className="mb-4">
              <input type="email" placeholder="Enter your email" className="bg-purple-800 text-white px-4 py-2 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors">Subscribe</button>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-200">
          <p>&copy; 2023 AdverTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;