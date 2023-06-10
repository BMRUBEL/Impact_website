import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
 
 const Services = () => {
    const [service, setService] = useState([]);
        useEffect(()=>{
          fetch('http://localhost/reactApi/service.php')
           .then((response)=> response.json())
           .then((d) => setService(d))
        })
    return (
         <>
         <Menu/>
            <section id='services' className='services sections-bg'>
      <div className='container' data-aos='fade-up'>

        <div className='section-header'>
          <h2>Our Services</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
        
        <div className='row gy-4' data-aos='fade-up' data-aos-delay='100'  >
        {service.map((kr,i)=>
          <div className='col-lg-4 col-md-6' key={i}>
        
            <div className='service-item  position-relative' >
              <div className='icon'>
                <i className={kr.icon}></i>
              </div>
              <h3>{kr.title}</h3>
              <p>{kr.descript}</p>
              <a href='#' className='readmore stretched-link'>Read more <i className='bi bi-arrow-right'></i></a>
            </div>
          </div> )}

          {/* <div className='col-lg-4 col-md-6'>
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='{kr.icon}'></i>
              </div>
              <h3>{kr.title}</h3>
              <p>{kr.descript}</p>
              <a href='#' className='readmore stretched-link'>Read more <i className='bi bi-arrow-right'></i></a>
            </div>
          </div> 

          <div className='col-lg-4 col-md-6'>
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='{kr.icon}'></i>
              </div>
              <h3>{kr.title}</h3>
              <p>{kr.descript}</p>
              <a href='#' className='readmore stretched-link'>Read more <i className='bi bi-arrow-right'></i></a>
            </div>
          </div> 

          <div className='col-lg-4 col-md-6'>
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='{kr.icon}'></i>
              </div>
              <h3>{kr.title}</h3>
              <p>{kr.descript}</p>
              <a href='#' className='readmore stretched-link'>Read more <i className='bi bi-arrow-right'></i></a>
            </div>
          </div> 

          <div className='col-lg-4 col-md-6'>
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='{kr.icon}'></i>
              </div>
              <h3>{kr.title}</h3>
              <p>{kr.descript}</p>
              <a href='#' className='readmore stretched-link'>Read more <i className='bi bi-arrow-right'></i></a>
            </div>
          </div> 

          <div className='col-lg-4 col-md-6'>
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='{icon}'></i>
              </div>
              <h3>{kr.title}</h3>
              <p>{kr.descript}</p>
              <a href='#' className='readmore stretched-link'>Read more <i className='bi bi-arrow-right'></i></a>
            </div>
          </div>  */}

        </div>

      </div>
    </section>
    <Footer/>
         </>
    );
};

export default Services;