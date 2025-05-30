import React, { useState } from 'react';
import { ChevronDown, Instagram, Github, Youtube, Linkedin } from 'lucide-react';

const contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    helpType: 'I would like to receive more information about a product/service',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="bg-black text-white px-3 py-2 font-bold">
              A
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-black">Autopilots</a>
              <a href="#" className="text-gray-700 hover:text-black">Robots</a>
              <a href="#" className="text-gray-700 hover:text-black">Drones</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-black flex items-center">
                  Applications <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-black">Sandbox Lab</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-black flex items-center">
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-gray-400 to-gray-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-start px-12">
          <div className="text-white">
            <h1 className="text-5xl font-light mb-2">Get in</h1>
            <p className="text-xl text-pink-300">Touch with us</p>
          </div>
        </div>
        {/* Drone silhouette overlay */}
        <div className="absolute bottom-0 right-0 opacity-30">
          <svg width="200" height="100" viewBox="0 0 200 100" className="fill-white">
            <path d="M50 50 L150 50 M100 30 L100 70 M70 40 C70 35 75 30 80 30 C85 30 90 35 90 40 M110 40 C110 35 115 30 120 30 C125 30 130 35 130 40"/>
          </svg>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact us</h2>
          <p className="text-gray-600 mb-4">
            For questions and requests about AIlytics-labs  products, software and services, please fill in the contact form below.
          </p>
          <p className="text-gray-600">
            Please note: We do not process job applications submitted via this contact form. For career opportunities, visit our careers page or mail{' '}
            <a href="mailto:recruitment@ailyticslabs.com" className="text-blue-600 hover:underline">
              recruitment@ailyticslabs.com
            </a>.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="helpType" className="block text-sm font-medium text-gray-700 mb-2">
              How can we help you?
            </label>
            <select
              id="helpType"
              name="helpType"
              value={formData.helpType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="I would like to receive more information about a product/service">
                I would like to receive more information about a product/service
              </option>
              <option value="Technical support">Technical support</option>
              <option value="Partnership inquiry">Partnership inquiry</option>
              <option value="Media inquiry">Media inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact information</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">General email: </span>
                  <a href="mailto:info@avular.com" className="text-blue-600 hover:underline">
                    info@ailyticslabs.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">Business inquiries: </span>
                  <a href="mailto:business@avular.com" className="text-blue-600 hover:underline">
                    business@ailyticslabs.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">Press: </span>
                  <a href="#" className="text-blue-600 hover:underline">
                    Press page
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">Marketing: </span>
                  <a href="mailto:marketing@avular.com" className="text-blue-600 hover:underline">
                    marketing@ailyticslabs.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">Phone number: </span>
                  <a href="tel:+31403041586" className="text-blue-600 hover:underline">
                    +25748630243
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Address</h3>
              <div className="text-gray-600">
                <p>P.O Box 00100</p>
                <p>Nairobi</p>
                <p>Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="bg-black text-white px-3 py-2 font-bold inline-block mb-4">
                A
              </div>
              <p className="text-gray-600 text-sm">AIlyticslabs</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Autopilots</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Drones</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Robots</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Applications</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Academic Research</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Agriculture</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Construction</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Industrial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 mb-6">
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Our story</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Meet the Team</a></li>
              </ul>
              
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>COC</strong> To be provided</p>
                <p><strong>VAT</strong> To be provided</p>
                <p><strong>A</strong> P.O box 00100, Nairobi</p>
                <p><strong>E</strong> info@ailyticslabs.com</p>
                <p><strong>T</strong> +254748630243</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Subscribe to our newsletter</h4>
                  <p className="text-gray-600 text-sm mb-4">The latest news, articles, and resources, sent to your inbox monthly</p>
                  <div className="flex max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  <p>© 2025 AIlyticslabs. All rights reserved</p>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="hover:text-black">Terms and Conditions</a>
                    <span>|</span>
                    <a href="#" className="hover:text-black">EULA</a>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default contact;