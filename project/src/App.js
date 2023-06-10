import React from 'react';
  import{Route, Routes} from "react-router-dom";
import About from "./components/About";
import Abouts from "./impact/Abouts";
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from "./components/Home";
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Team from './components/Team';
import Teams from './impact/Teams';
import Services from './impact/Services';
// import Menu from "./components/Menu";
 
 
    
 

function App() {
  return (
      <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/footer' element={<Footer/>}/>

      {/* Impact Routes */}
      <Route path='/abouts' element={<Abouts/>}/>
      <Route path='/teams' element={<Teams/>}/>
      <Route path='/services' element={<Services/>} />

     </Routes>
      </>
  )

}
 



export default App;
