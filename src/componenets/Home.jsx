import React from 'react';
import './Home.css';
import myPhoto2 from '../assest/WhatsApp Image 2025-06-26 at 12.52.35 PM.jpeg';


const Home = () => (
  <section id="home" className="home-section">
    <div className="home-container">
      <div className="home-left">
        <img src={myPhoto2} alt="R Prasanna Kumar" className="profile-img" />
      </div>
      <div className="home-right">
        <h1>Hello, I'm R Prasanna Kumar</h1>
        <p>
          I'm a passionate MERN Stack Developer with hands-on experience in building dynamic web applications.
          I specialize in creating scalable, secure, and user-friendly solutions using React, Node.js, Express, and MongoDB.
        </p>
      </div>
    </div>
  
  </section>
);

export default Home;
