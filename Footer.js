import { Link } from "react-router-dom";
import React from "react";

function Footer(){
  return(
    <div>
        
  <center>
    <div className="b1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <img src="http://sameerhousekeeping.com/wp-content/uploads/2022/06/cropped-WhatsApp-Image-2022-06-03-at-3.02.29-PM1.jpeg"></img>

          </div>
          <div className="col-sm-3">
            <h3>Request A Callback</h3>
            <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Contact</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
</div><br></br>
<button type="button" class="btn btn-danger">Send Request</button>
            
            </div>
            <div className="col-sm-3">
            <h3>Quick Links</h3>
            Cleaning Solutions For You
            Who We Are
            Our Residential Services
            Our Commercial Services
            Book Cleaning online
            
            </div>
            <div className="col-sm-3">
            <h3>Get In Touch</h3>
            +919768948415<br></br>
            +919833469193<br></br>
            Email:
            shindesameer357@gmail.com
            
            </div>
        </div>
      </div>
    </div>
  </center>

  <hr></hr>
  <center>
    <h6>Copyright © 2022 Sameerhousekeeping | Powered by Sachin Patel</h6>
  </center>
</div>


   
  );
}
export default Footer;