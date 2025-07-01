import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact Me</h2>
    <p>If you'd like to get in touch, feel free to reach out through any of the following:</p>

    <div className="contact-item">
      <strong>Email:</strong>{' '}
      <a href="mailto:prasannakumarr022002@gmail.com">prasannakumarr022002@gmail.com</a>
    </div>

    <div className="contact-item">
      <strong>Phone:</strong> +91-6379399719
    </div>

    <div className="contact-item">
      <strong>LinkedIn:</strong>{' '}
   <a
  href="https://www.linkedin.com/in/prasanna-kumar-r-289b84209/"
  target="_blank"
  rel="noopener noreferrer"
>
  linkedin.com/in/prasanna-kumar-r-289b84209
</a>


    </div>

    

    <div className="contact-item">
      <strong>Location:</strong> Madurai, Tamil Nadu, India
    </div>
  </section>
);

export default Contact;
