import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AdverTrack has revolutionized our app marketing strategy. We've seen a 200% increase in user acquisition since implementing their platform.",
      author: "Sarah Johnson",
      position: "CMO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      quote: "The insights we've gained from AdverTrack's analytics have been game-changing. Our ROI has never been better.",
      author: "Michael Chen",
      position: "Growth Manager, AppNova",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      quote: "AdverTrack's user-friendly interface and powerful features make it the go-to platform for our app marketing needs.",
      author: "Emily Rodriguez",
      position: "Digital Marketing Director, SwiftApps",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center">
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="text-center px-8">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
              <blockquote className="text-xl italic text-gray-700 mb-4">"{testimonials[currentIndex].quote}"</blockquote>
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">{testimonials[currentIndex].position}</p>
            </div>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;