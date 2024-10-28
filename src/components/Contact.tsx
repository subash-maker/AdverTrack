import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const locations = [
    {
      city: "Coimbatore",
      address: "100 Market Street, Gandhipuram",
      email: "contact@advertrack.com",
      phone: "+91 7094321999"
    },
    // {
    //   city: "London",
    //   address: "25 Old Broad Street",
    //   email: "london@advertrack.com",
    //   phone: "+44 20 7123 4567"
    // },
    // {
    //   city: "Singapore",
    //   address: "71 Robinson Road, #14-01",
    //   email: "singapore@advertrack.com",
    //   phone: "+65 6789 0123"
    // }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {showSuccess && (
                  <div className="text-green-600 text-center animate-fade-in">
                    Message sent successfully!
                  </div>
                )}
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{location.city}</h3>
                  <div className="space-y-3">
                    <p className="flex items-center text-gray-600">
                      <MapPin size={20} className="mr-2 text-purple-600" />
                      {location.address}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Mail size={20} className="mr-2 text-purple-600" />
                      {location.email}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Phone size={20} className="mr-2 text-purple-600" />
                      {location.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Chat Button */}
          <button className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors">
            <MessageSquare size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;