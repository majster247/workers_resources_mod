// src/components/Contact.tsx
import React from 'react';
import './Contact.css'; // Importing the Contact CSS

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:htopolski12@gmail.com">htopolski12@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
