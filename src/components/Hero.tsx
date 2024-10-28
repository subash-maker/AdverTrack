import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Fuel growth and maximize your budget
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Get unmatched visibility into campaign performance, scale app installs, and maximize customer LTV.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href='./Contact'><button className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition-colors flex items-center justify-center">
              Contact Sales
              <ArrowRight size={20} className="ml-2" />
            </button></a>
            <button className="border border-purple-700 text-purple-700 px-6 py-3 rounded-md hover:bg-purple-50 transition-colors">
              Sign up free
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Professional working on laptop"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;