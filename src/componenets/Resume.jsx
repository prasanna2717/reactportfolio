// Resume.js
import React from 'react';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const Resume = () => {
  return (
    <div>
      <h2 className="text-center fw-bold py-4">Resume</h2>

      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-md-6 text-center fw-bold py-3 ">
  <h3 className="fw-bold">Work Experience</h3>
          </div>
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <div className="d-flex justify-content-start align-items-center mb-2">
              <span className="me-2">Jan 2024 – Present</span>
              <span className="fw-bold">-MERN Stack Developer
Osiz Technologies, Madurai</span>
            </div><br></br>
            <p>
              Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN).
              Collaborated with cross-functional teams including designers and backend developers to deliver responsive, user-friendly interfaces.

            </p><br></br>
           
             <div className="d-flex justify-content-start align-items-center mb-2">
              <span className="me-2">Jul 2023 –Dec  2023</span>
              <span className="fw-bold">– MERN Stack Developer Intern, Osiz Technologies, Madurai</span>
            </div><br></br>
            <p>
Completed a 6-month internship focused on MERN stack development (MongoDB, Express.js, React.js, Node.js).Gained hands-on experience in building web applications, writing clean code, and understanding real-world development workflows.            </p>
           
          </div>
          
        </div>

        {/* You can add more rows here for additional experience, education, etc. */}
      </div><br></br>
 <div className="container">
        <div className="row">
          <div className="col-sm-5 col-md-6 text-center fw-bold py-3 ">
  <h3 className="fw-bold">Education</h3>
          </div>
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <div className="d-flex justify-content-start align-items-center mb-2">
              <span className="me-2">2019-2023</span>
              <span className="fw-bold">-Computer Science And Engineering (BE)</span>
            </div>
            <p>
             Sethu Institute of Technology - 8.11 CGPA Viruthunagar, TN
            </p><br></br>
           
             <div className="d-flex justify-content-start align-items-center mb-2">
              <span className="me-2">2018-2019</span>
              <span className="fw-bold">– Higher Secondary Schooling (HSC) - 66%</span>
            </div>
            <p>

              Mepco Schlenk Matric Hr.Sec School Thirumangalam, TN


</p>           <br></br>
 <div className="d-flex justify-content-start align-items-center mb-2">
              <span className="me-2">2016-2017</span>
              <span className="fw-bold">–SSLC (10th Standard)-88.8%</span>
            </div>
            <p>

              Mepco Schlenk Matric Hr.Sec School Thirumangalam, TN


</p>           
          </div>
          
        </div>

        {/* You can add more rows here for additional experience, education, etc. */}
      </div> <br></br>

      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-md-6 text-center fw-bold py-3 ">
  <h3 className="fw-bold">Skills
& Expertise</h3>
          </div>
         <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
  <ul className="skill-list">
    <li>React.js, HTML5, CSS3, JavaScript (ES6+), Bootstrap</li>
    <li>Node.js, Express.js, RESTful APIs, JWT Authentication</li>
    <li>MongoDB, Mongoose</li>
    <li>Git, Postman, VS Code, NPM, JSON</li>
    <li>Responsive Web Design</li>
    <li>State Management (React Hooks, Context API)</li>
    <li>API Integration</li>
  </ul>
</div>

          
        </div>

        {/* You can add more rows here for additional experience, education, etc. */}
      </div><br></br>
    </div>
  );
};

export default Resume;
