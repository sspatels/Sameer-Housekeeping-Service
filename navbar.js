import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";
function Navbar(){
  return(
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a className="navbar-brand" href=""><img src="http://sameerhousekeeping.com/wp-content/uploads/2022/06/cropped-WhatsApp-Image-2022-06-03-at-3.02.29-PM1.jpeg"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="t1">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item">
      
        <Link class="nav-link active" to="/About">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/Service">Service</Link>
        </li>
        
        
        
        <li class="nav-item">
        <Link class="nav-link active" to="/Contact">Contact</Link>
        </li>
        
       
        
        
      </ul>
      </div>
      
    </div>
    <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
           For a Free Estimate +91 9768948415 </a>
        </li>
  </div>
   
</nav>

  
</div>


   
  );
}
export default Navbar;