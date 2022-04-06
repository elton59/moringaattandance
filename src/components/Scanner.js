import React from 'react';
import './Scanner.css';
import {   FaPhoneAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function AboutUs() {
    return (
        <div>
      
         <div className='aboutus_s'>
             
             <div className='aboutuscard_s'>
         
         
           <div className='aboutuscardtext_s'>
         <h1 style={{color:'#fa510f'}}>Scanner App</h1>
         <p style={{color:'whitesmoke'}}>Congragulations Dear Learner!</p>
               <p  style={{color:'whitesmoke'}}>You have managed to successfully register for a lessson
                 <p  style={{color:'whitesmoke'}}> We now require you to download the scanner app wchich you'll use to confirm attendance on daily basis, Click the link below to download the app. Happy Learning :) </p>
</p>
          <a href="https://expo.dev/@elton1159/Moringa_attandance_app" className='my-button'>Download app</a>
          <Link to="/Attendance "  className='my-button'>I  Have the app</Link>
          </div>
          https://expo.dev/@elton1159/Moringa_attandance_app
           </div>
       
      
         
         
          
         </div>
         <div className='Footerb'>
    <div id="waterdrop"></div>

      <div className="footer-top">
        <div className="pt-exebar">
        <div className="col-md-3">
            
            </div>
        </div>
        <div className="">
          <div className="row">
            <div className="">
              <div className="widget footer_widget">
               
                <div className="site-navigation">
                 
                  <h5 className="footer-title">Developed by John Elton Okoth &copy;2021</h5>
                  <div className="white"><FaPhoneAlt/> &nbsp; 0741225454</div>
               

                 
                </div>
              </div>

            </div>
         
          
          </div>
        </div>
      </div>
    
 
 

        </div>
        </div>
    );
}

export default AboutUs;