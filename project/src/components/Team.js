import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch('http://localhost/reactApi/team.php')
    .then((response)=> response.json())
    .then((d) => setTeam(d))
  })

    return (
         <>
        
     <section id="team" class="team">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Team</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
        </div>
          
        <div class="row gy-4">
               {team.map((tb,i)=>
          <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100" key={i}>
            <div class="member">
              <img src={`http://localhost/Impact/admin/dist/assets/${tb.photo}`} class="img-fluid" alt=""/>
              <h4>{tb.title}</h4>
              <span>{tb.designation}</span>
              <div class="social">
                <NavLink to=""><i class="bi bi-twitter"></i></NavLink>
                <NavLink to=""><i class="bi bi-facebook"></i></NavLink>
                <NavLink to=""><i class="bi bi-instagram"></i></NavLink>t
                <NavLink to=""><i class="bi bi-linkedin"></i></NavLink>
              </div>
            </div>
          </div> 
           )}

          {/* <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
              <h4>Sarah Jhinson</h4>
              <span>Marketing</span>
              <div class="social">
                <NavLink to=""><i class="bi bi-twitter"></i></NavLink>
                <NavLink to=""><i class="bi bi-facebook"></i></NavLink>
                <NavLink to=""><i class="bi bi-instagram"></i></NavLink>
                <NavLink to=""><i class="bi bi-linkedin"></i></NavLink>
              </div>
            </div>
          </div> 

          <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""/>
              <h4>William Anderson</h4>
              <span>Content</span>
              <div class="social">
                <NavLink to=""><i class="bi bi-twitter"></i></NavLink>
                <NavLink to=""><i class="bi bi-facebook"></i></NavLink>
                <NavLink to=""><i class="bi bi-instagram"></i></NavLink>
                <NavLink to=""><i class="bi bi-linkedin"></i></NavLink>
              </div>
            </div>
          </div> 

          <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""/>
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div class="social">
                <NavLink to=""><i class="bi bi-twitter"></i></NavLink>
                <NavLink to=""><i class="bi bi-facebook"></i></NavLink>
                <NavLink to=""><i class="bi bi-instagram"></i></NavLink>
                <NavLink to=""><i class="bi bi-linkedin"></i></NavLink>
              </div>
            </div>
          </div>  */}
         

        </div>
 {/* )} */}
      </div>
      
    </section>
     
    
         </>
    );
};

export default Team;