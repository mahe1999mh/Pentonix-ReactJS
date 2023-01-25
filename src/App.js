import React from "react";
import Navbar from "./components/Navbar";
import DataService from "./components/DataService";

import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      
      <Navbar />
      <section className="hero-section">
      <center>
          
          <h1>API Data 3</h1>
          {<DataService/>}
  
          </center>
            
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">

      <center>
          
          <h1>API Data 3</h1>
          {<DataService/>}
  
          </center>       

      </section>
    </>
  );
};

const Service = ({location,overview}) => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      
        <center>
          
        <h1>API Data 3</h1>
        {<DataService/>}

        </center>
      </section>
    </>
  );
};


const App = () => {
  return (
    <>
  

   <Routes>
 <Route path="/" element={<Home />}/>
 <Route path="/page2" element={<About/>}/>
 <Route path="/page3" element={<Service/>}/>

 </Routes> 

</>

  );
};

export default App;
