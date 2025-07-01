import React from 'react';
import './Project.css';
import myPhoto from '../assest/ChatGPT Image Jun 26, 2025, 01_07_13 PM.png';
import myPhoto1 from '../assest/ChatGPT Image Jun 26, 2025, 12_52_15 PM.png';
import myPhoto2 from '../assest/ChatGPT Image Jun 26, 2025, 12_57_19 PM.png';

const projects = [
  {
    title: 'Mines and Crash',
    description: [
      'Developed a centralized 2D game application called Mines and Crash, where game modules and logics are implemented using JS Libraries supported by React.js.',
      'Users can deposit fiat (BRL) and play games (Mines and Crash), earning money through corresponding game multipliers when they win.',
      'Developed a robust gaming platform featuring Mines and Crash games.',
      'Implemented deposit and withdrawal modules using smart contracts to ensure secure transactions.',
      'Created a bet module with Node.js and Express for efficient backend API processing.',
      'Focused on security and real-time performance to enhance the overall user experience.'
    ],
    image: myPhoto1,
  },
  {
    title: 'Global Digital City',
    description: [
      'Took charge of designing and developing the Global Digital City application, focusing on a user-friendly and visually appealing interface using React JS, Bootstrap, HTML, and CSS.',
      'Developed a centralized platform for token purchasing, leveraging Web3 and Node.js to ensure seamless integration with blockchain technologies.',
      'Developed user authentication features including registration, login forms, and profile updates using React.js, supported by Node.js APIs.',
      'Implemented a centralized deposit module to facilitate secure transactions.',
      'Set up a basic admin panel for efficient management and operations, enhancing the platform\'s functionality and user experience.'
    ],
    image: myPhoto2,
  },
  {
    title: 'Automated Trading Bot',
    description: [
      'Established a seamless integration with TradingView\'s powerful charting platform to receive and process real-time trading signals, specifically those generated using the Pinescript programming language.',
      'Designed and implemented a robust back-end API to facilitate the efficient and reliable extraction of critical trading parameters from incoming signals.',
      'Developed sophisticated parsing mechanisms to accurately identify relevant financial instruments (such as BTCUSD) and interpret the intended trade direction (either BUY or LONG positions).',
      'Engineered the core logic for fully automated trade execution, ensuring timely and precise order placement based on the received signals.',
      'Implemented functionalities for managing the complete trade lifecycle, including the automated opening and closing of positions on behalf of end-users.',
      'Translated complex trading strategies into functional, automated software solutions with a focus on performance and reliability.'
    ],
    image: myPhoto,
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-row" key={index}>
          <div className="project-text">
            <h3>{project.title}</h3>
            <ul>
              {project.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;