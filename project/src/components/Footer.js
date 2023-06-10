 import React from 'react';
import { NavLink } from 'react-router-dom';
 
 const Footer = () => {
    return (
        <>
             <footer id="footer" className="footer">

<div className="container">
  <div className="row gy-4">
    <div className="col-lg-5 col-md-12 footer-info">
      <a href="index.html" className="logo d-flex align-items-center">
        <span>Impact</span>
      </a>
      <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
      <div className="social-links d-flex mt-4">
        <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
        <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
        <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
        <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
      </div>
    </div>

    <div className="col-lg-2 col-6 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><NavLink to="#">Home</NavLink></li>
        <li><NavLink to="#">About us</NavLink></li>
        <li><NavLink to="#">Services</NavLink></li>
        <li><NavLink to="#">Terms of service</NavLink></li>
        <li><NavLink to="#">Privacy policy</NavLink></li>
      </ul>
    </div>

    <div className="col-lg-2 col-6 footer-links">
      <h4>Our Services</h4>
      <ul>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Product Management</a></li>
        <li><a href="#">Marketing</a></li>
        <li><a href="#">Graphic Design</a></li>
      </ul>
    </div>

    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
      <h4>Contact Us</h4>
      <p>
        A108 Adam Street <br/>
        New York, NY 535022<br/>
        United States <br/><br/>
        <strong>Phone:</strong> +1 5589 55488 55<br/>
        <strong>Email:</strong> info@example.com<br/>
      </p>

    </div>

  </div>
</div>

<div className="container mt-4">
  <div className="copyright">
    &copy; Copyright <strong><span>Impact</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    {/* <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ --> */}
    Designed by <NavLink to="https://bootstrapmade.com/">BootstrapMade</NavLink>
  </div>
</div>

</footer>
        </>
    );
 };
 
 export default Footer;