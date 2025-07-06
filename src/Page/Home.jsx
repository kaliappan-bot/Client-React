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
    <div className="min-h-screen text-black font-sans">
      {/* Header with Centered Logo */}
      <header className="fixed top-0 w-full z-50 shadow-md bg-white text-black">
        <div className="w-full flex justify-center items-center px-6 py-3">
          <a
            href="https://maps.app.goo.gl/BGrHGtcQwPLtRYfw6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo}
              alt="ibots logo"
              className="h-24 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative mt-24 h-[500px] overflow-hidden">
        <img
          src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS3JSTq-2kXcFtiwLh-TuPT35HYClk3rLQFloXQa1REXDCYdAG1NUZSlbdFaJv_rdZsFaQ3osefePBC5fm_2Dc0etj8txmyRipvgO2gNw"
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="text-center text-white px-6 md:px-12" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
              Driving Rural Innovation with Smart Automation
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl mx-auto">
              Empowering villages with next-gen tech solutions from the iBots Meikavalputhur Office.
            </p>
            <Link to="/register">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-1 rounded bg-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-4xl mx-auto px-4 py-12"
        style={{ backgroundColor: '#7FFF00' }}
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>To revolutionize rural communities with digital automation.</li>
          <li>To extend the iBots ecosystem to reach grassroots innovation.</li>
          <li>To create sustainable impact through smart local tech support.</li>
        </ul>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 px-4"
        style={{ backgroundColor: '#7FFF00' }}
        data-aos="fade-up"
      >
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
      <section
        className="max-w-4xl mx-auto px-4 py-12 text-center"
        style={{ backgroundColor: '#7FFF00' }}
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-semibold mb-4">Join the Digital Workforce</h3>
        <p className="mb-4 text-gray-700">
          Be part of a smarter, connected future. Register today.
        </p>
        <Link to="/register">
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-1 rounded bg-white">
            Register Now
          </button>
        </Link>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-4 py-12"
        style={{ backgroundColor: '#7FFF00' }}
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <div className="space-y-2 text-gray-800">
          <p><strong>Address:</strong> iBots Meikavalputhur Office, Ariyalur District, Tamil Nadu</p>
          <p><strong>Phone:</strong> +91 123-456-789</p>
          <p><strong>Email:</strong> ibotsexample@123gmail.com</p>
          <p><strong>Working Hours:</strong> Mon-Sat, 9:00 AM - 6:00 PM</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="p-4 text-sm text-center mt-12"
        style={{ backgroundColor: '#7FFF00' }}
      >
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
