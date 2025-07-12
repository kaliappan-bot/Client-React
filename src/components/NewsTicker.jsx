import React from 'react';
import './NewsTicker.css';

const NewsTicker = ({ announcements }) => {
  return (
    <section className="news-ticker">
      <div className="ticker-title">📢 Announcements</div>
      <div className="ticker-wrapper">
        <div className="ticker">
          {announcements.map((item, index) => (
            <span key={index} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsTicker;
