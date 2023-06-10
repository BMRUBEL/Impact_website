// import React from 'react';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Menu from './Menu';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Service from './Service';
import Team from './Team';

const Home = () => {
    return (
         <>
         <Menu/>
         <About/>
         <Service/>
         <Portfolio/>
         <Team/>
         <Pricing/>
         <Blog/>
         <Contact/>
         <Footer/>
         </>
    );
};

export default Home;