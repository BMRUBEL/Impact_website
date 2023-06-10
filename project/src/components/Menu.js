// import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <> 
   
        <section id='topbar' className='topbar d-flex align-items-center'>
             <div className='container d-flex justify-content-center justify-content-md-between'>
               <div className='contact-info d-flex align-items-center'>
                 <i className='bi bi-envelope d-flex align-items-center'>
                     <NavLink to='mailto:contact@example.com'>contact@example.com</NavLink></i>
     
                 <i className='bi bi-phone d-flex align-items-center ms-4'><span>+1 5589 55488 55</span></i>
               </div>
               <div className='social-links d-none d-md-flex align-items-center'>
                 <NavLink to='/' className='twitter'>
                     <i className='bi bi-twitter'></i>
                     </NavLink>
                 <NavLink to='/' className='facebook'>
                     <i className='bi bi-facebook'></i>
                     </NavLink>
                 <NavLink to='/' className='instagram'>
                     <i className='bi bi-instagram'></i>
                     </NavLink>
                 <NavLink to='/' className='linkedin'>
                     <i className='bi bi-linkedin'></i>
                     </NavLink>
               </div>
             </div>
           </section>
         
           <header id='header' className='header d-flex align-items-center'>
         
             <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
               < NavLink to='index.html' className='logo d-flex align-items-center'>
                  
                
                 <h1>Impact<span>.</span></h1>
               </NavLink>
               <nav id='navbar' className='navbar'>
                 <ul>
                   <li><NavLink to='/'>Home</NavLink></li>
                   <li><NavLink to='/abouts'>About</NavLink></li>
                   <li><NavLink to='/services'>Services</NavLink></li>
                   <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                   <li><NavLink to='/teams'>Team</NavLink></li>
                   <li><NavLink to='/blog'>Blog</NavLink></li>
                   <li className='dropdown'><NavLink to='#'><span>Drop Down</span> <i className='bi bi-chevron-down dropdown-indicator'></i></NavLink>
                     <ul>
                       <li><NavLink to='#'>Drop Down 1</NavLink></li>
                       <li className='dropdown'><NavLink to='#'><span>Deep Drop Down</span> <i className='bi bi-chevron-down dropdown-indicator'></i></NavLink>
                         <ul>
                           <li><NavLink to='#'>Deep Drop Down 1</NavLink></li>
                           <li><NavLink to='#'>Deep Drop Down 2</NavLink></li>
                           <li><NavLink to='#'>Deep Drop Down 3</NavLink></li>
                           <li><NavLink to='#'>Deep Drop Down 4</NavLink></li>
                           <li><NavLink to='#'>Deep Drop Down 5</NavLink></li>
                         </ul>
                       </li>
                       <li><NavLink to='#'>Drop Down 2</NavLink></li>
                       <li><NavLink to='#'>Drop Down 3</NavLink></li>
                       <li><NavLink to='#'>Drop Down 4</NavLink></li>
                     </ul>
                   </li>
                   <li><NavLink to='/contact'>Contact</NavLink></li>
                 </ul>
               </nav> 
         
               <i className='mobile-nav-toggle mobile-nav-show bi bi-list'></i>
               <i className='mobile-nav-toggle mobile-nav-hide d-none bi bi-x'></i>
         
             </div>
           </header>
           <section id='hero' className='hero'>
       <div className='container position-relative'>
      <div className='row gy-5' data-aos='fade-in'>
        <div className='col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start'>
          <h2>Welcome to <span>Impact</span></h2>
          <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          <div className='d-flex justify-content-center justify-content-lg-start'>
            <NavLink to='#about' className='btn-get-started'>Get Started</NavLink>
            <NavLink to='https://www.youtube.com/watch?v=LXb3EKWsInQ' className='glightbox btn-watch-video d-flex align-items-center'><i className='bi bi-play-circle'></i><span>Watch Video</span></NavLink>
          </div>
        </div>
        <div className='col-lg-6 order-1 order-lg-2'>
          <img src='assets/img/hero-img.svg' className='img-fluid' alt='' data-aos='zoom-out' data-aos-delay='100'/>
        </div>
      </div>
    </div>

    <div className='icon-boxes position-relative'>
      <div className='container position-relative'>
        <div className='row gy-4 mt-5'>

          <div className='col-xl-3 col-md-6' data-aos='fade-up' data-aos-delay='100'>
            <div className='icon-box'>
              <div className='icon'><i className='bi bi-easel'></i></div>
              <h4 className='title'><NavLink to='' className='stretched-link'>Lorem Ipsum</NavLink></h4>
            </div>
          </div>
           

          <div className='col-xl-3 col-md-6' data-aos='fade-up' data-aos-delay='200'>
            <div className='icon-box'>
              <div className='icon'><i className='bi bi-gem'></i></div>
              <h4 className='title'><NavLink to='' className='stretched-link'>Sed ut perspiciatis</NavLink></h4>
            </div>
          </div>
           

          <div className='col-xl-3 col-md-6' data-aos='fade-up' data-aos-delay='300'>
            <div className='icon-box'>
              <div className='icon'><i className='bi bi-geo-alt'></i></div>
              <h4 className='title'><NavLink to='' className='stretched-link'>Magni Dolores</NavLink></h4>
            </div>
          </div>
          

          <div className='col-xl-3 col-md-6' data-aos='fade-up' data-aos-delay='500'>
            <div className='icon-box'>
              <div className='icon'><i className='bi bi-command'></i></div>
              <h4 className='title'><a href='' className='stretched-link'>Nemo Enim</a></h4>
            </div>
          </div>
         

        </div>
      </div>
    </div>

   

     
  </section>
   
          
   </>
);
};

export default Menu;