import React from 'react';
import './Services.css';
import { FaCalendarAlt, FaMoneyBill, FaClock, FaDownload, FaCalendarCheck, FaStar } from 'react-icons/fa';
const Services = () => {
    const services = [
        {
            icon: <FaCalendarAlt />,
            title: 'Leave Application',
            desc: 'Apply and manage leaves easily.'
            },
            {
                icon: <FaMoneyBill />,
                title: 'Payroll Details',
                desc: 'View salary breakdowns and transaction.'
            },
            {
                icon: <FaClock />,
                title: 'Attendance Tracking',
                desc: 'Monitor monthly attendance records.'
            },
            {
                icon: <FaDownload />,
                title: 'Download Salary Slips',
                desc: 'Access downloadable salary slips.'
            },
            {
                icon: <FaCalendarCheck />,
                title: 'Holiday Calendar',
                desc: 'Stay updated with official holidays.'
            },
            {
                icon: <FaStar />,
                title: 'Performance Reviews',
                desc: 'Track and review performance reports.'
            }
        ];
        return (
            <section className="services-section" id="services">
                <h1>Services For Employees</h1>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="icon">{service.icon}</div>
                            <h2>{service.title}</h2>
                            <p>{service.desc}</p>
                            </div>
                    ))}
                </div>
            </section>
        );
};
export default Services;