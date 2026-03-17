import React, { useState } from 'react';
import { toast } from 'react-toastify';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields!', { position: 'top-right' });
      return;
    }

    toast.success('Message sent successfully! We\'ll get back to you soon. ✓', {
      position: 'top-right',
      autoClose: 2000,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'support@csticket.com',
      description: 'Send us an email'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us anytime'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Chat with us in real-time'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Tech Street, Silicon Valley, CA',
      description: 'Visit our office'
    }
  ];

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Get in Touch</h1>
        <p className="text-gray-600 mb-12">Have questions or feedback? We'd love to hear from you.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                             focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                             focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                             focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                             focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] 
                           text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition duration-300">
                  <p className="text-4xl mb-3">{info.icon}</p>
                  <h3 className="font-semibold text-[#0F172A] mb-1">{info.title}</h3>
                  <p className="text-sm font-medium text-[#3752FD] mb-1">{info.value}</p>
                  <p className="text-xs text-gray-500">{info.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#3752FD]/10 to-[#7C3AED]/10 rounded-xl p-6 mt-6 border border-[#3752FD]/20">
              <h3 className="font-semibold text-[#0F172A] mb-2">Response Time</h3>
              <p className="text-sm text-gray-700">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
