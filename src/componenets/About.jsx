// import React from 'react';

// const About = () => (
//   <section id="about" className="section">
    
// <div className="container">
//         <div className="row">
//           <div className="col-sm-5 col-md-6 text-center fw-bold py-3 ">
//   <h3 className="fw-bold">Awards & Recognitions</h3>
//           </div>
//           <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
//             <div className="d-flex justify-content-start align-items-center mb-2">
//               <p>Received Certificate of Appreciation from Prasanna Kumar for prime participation and outstanding contribution.

//  Awarded as part of the Best Development Team for outstanding performance and contribution.

// ​</p>
//             </div><br></br>
            
            
//           </div>
          
//         </div>

//       </div><br></br>



   
//   </section>
// );

// export default About;
import React from 'react';

const About = () => (
  <section id="about" className="section about-section">
    <div className="container d-flex flex-column align-items-center justify-content-center text-center py-5">
      <h3 className="fw-bold mb-4">Awards & Recognitions</h3>
      <ul className="about-list text-start">
        <li>
          Received Certificate of Appreciation from Prasanna Kumar for prime participation and outstanding contribution.
        </li>
        <li>
          Awarded as part of the Best Development Team for outstanding performance and contribution.
        </li>
      </ul>
    </div>
  </section>
);

export default About;

