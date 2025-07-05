import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../images/ibots-logo.png';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-[#7FFF00] text-black font-sans">
      
      {/* Header */}
      <header className="bg-transparent shadow-md fixed top-0 w-full z-50 px-6 py-4 flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex items-center space-x-3 mb-3 lg:mb-0">
          <a href="https://maps.app.goo.gl/BGrHGtcQwPLtRYfw6" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="ibots logo" className="h-10 w-auto cursor-pointer hover:scale-105 transition-transform duration-200" />
          </a>
          <div>
            <h1 className="text-xl font-bold">Ibots - Meikavalputhur Office</h1>
            <a href="https://maps.app.goo.gl/BGrHGtcQwPLtRYfw6" className="text-sm text-blue-600 hover:underline">View on Map</a>
          </div>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm font-medium items-center justify-end">
          <a href="#about" className="text-gray-800 hover:text-blue-600 transition">About</a>
          <a href="#services" className="text-gray-800 hover:text-blue-600 transition">Services</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 transition">Contact</a>
          <Link to="/register">
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-1 rounded">Register</button>
          </Link>
          <Link to="/login">
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-1 rounded">Employee Login</button>
          </Link>
          <Link to="/admin">
            <button className="border border-gray-800 text-gray-800 hover:bg-gray-200 px-4 py-1 rounded">Admin Login</button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative mt-36 h-[500px] overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gangaikondacholapuram_Temple_4.jpg/250px-Gangaikondacholapuram_Temple_4.jpg"
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
          <div className="text-center text-white px-6 md:px-12" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">Driving Rural Innovation with Smart Automation</h2>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl mx-auto">
              Empowering villages with next-gen tech solutions from the iBots Meikavalputhur Office.
            </p>
            <Link to="/register">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-1 rounded">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-12" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>To revolutionize rural communities with digital automation.</li>
          <li>To extend the iBots ecosystem to reach grassroots innovation.</li>
          <li>To create sustainable impact through smart local tech support.</li>
        </ul>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Apply for leave with real-time status tracking</li>
            <li>View and manage your payroll records</li>
            <li>Access attendance logs and history</li>
            <li>Instant download of monthly salary slips</li>
            <li>Stay updated with our official holiday calendar</li>
            <li>Review and improve with performance insights</li>
          </ul>
        </div>
      </section>

      {/* Registration Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-4">Join the Digital Workforce</h3>
        <p className="mb-4 text-gray-700">Be part of a smarter, connected future. Register today.</p>
        <Link to="/register">
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-1 rounded">
            Register Now
          </button>
        </Link>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-12" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <div className="space-y-2 text-gray-800">
          <p><strong>Address:</strong> iBots Meikavalputhur Office, Ariyalur District, Tamil Nadu</p>
          <p><strong>Phone:</strong> +91 123-456-789</p>
          <p><strong>Email:</strong> ibotsexample@123gmail.com</p>
          <p><strong>Working Hours:</strong> Mon-Sat, 9:00 AM - 6:00 PM</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent p-4 text-sm text-center mt-12">
        <div className="mb-2 space-x-3">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">FAQs</a>
        </div>
        <p>&copy; 2025 iBots. All rights reserved.</p>
      </footer>
    </div>
  );
}
