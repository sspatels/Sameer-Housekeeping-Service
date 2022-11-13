import React from 'react';
import About from './Component/About';
import Navbar from'./navbar';
import Footer from './Component/Footer';
import Contact from './contact';
import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Component/Home';
import Service from './Component/service';






function App(){

    return(
       <Router>
        <Navbar/>
        <Routes>
       
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Contact' element={<Contact />}></Route> 
            <Route path='/Service' element={<Service />}></Route>  
             
            
           
        </Routes>
        <Footer />
       </Router>        
    );

}

export default App;