import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import RegisterForm from '../components/RegisterForm';
import LoginForm from './LoginForm';
import QuickStats from '../components/QuickStats';
import NewsTicker from '../components/NewsTicker'; 
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import './HomePage.css';

export default function HomePage() {
  
  const announcements = [
    "Holiday on 15th August (Independence Day)",
    "Team Building Event on 22nd July at 4PM",
    "Payroll will be processed on 28th July",
    "Updated HR Policy effective from August 1st"
  ];

  return (
    <div className="page-container">
      <Header />
      <HeroSection />
      <NewsTicker announcements={announcements} /> 
      <About />
      <Services />
      <RegisterForm />
      <LoginForm />
      <QuickStats />
      <ContactSection />
      <Footer />
    </div>
  );
}
