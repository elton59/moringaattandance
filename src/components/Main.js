import React from 'react';
import './Main.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import athritis from '../assets/images/arthritis.png';
import diabetes from '../assets/images/diabetes.png';
import hypertension from '../assets/images/hypertension.png';
import painManagement from '../assets/images/painmanagement.png';
import { Carousel } from 'react-responsive-carousel';
import aboutus from '../assets/images/aboutus.png';
import {Link} from 'react-router-dom'
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,  FaPhoneAlt, FaTwitter } from 'react-icons/fa';


function Main() {
  return (
    <div className="wrapper">
     
      <div className="corouselsection">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showDots={false}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position:'absolute',
                  top:'230px',
                  right: "0px",
                  width:"40px",
                  fontSize:"20px",
                  backgroundColor:"transparent",
                  color:"black",
                  borderStyle:"none"
                }}
              >
                <FaChevronCircleRight  />
              </button>
            )
          } 
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
               title={label}
                style={{ 
                  position:'absolute',
                  top:'230px',
                  right:"90%",
                  width:"40px",
                  fontSize:"20px",
                  backgroundColor:"white",
                  color:"black",
                  zIndex:"2",
                  borderStyle:"none"
                }}
              >
                <FaChevronCircleLeft />
              </button>
            )
          }
      //  renderArrowNext={(onClickHandler, hasNext, label) =>
      //       hasNext && (
      //         <button
      //           type="button"
      //           onClick={onClickHandler}
      //           title={label}
      //           style={{
      //             position:'absolute',
      //             top:'230px',
      //             right: "100px",
      //             width:"40px",
      //             fontSize:"20px",
      //             backgroundColor:"white",
      //             color:"black",
      //             borderStyle:"none"
      //           }}
      //         >
      //           <FaChevronCircleRight  />
      //         </button>
      //       )
      //     } 
          >
       
        

          <div>

       

          </div>
          
          <div>
            <div class="">
              <img src={aboutus} alt="hypertension" className="corouselimage" />

            </div>
          </div>
        
           
       

          <div>
            <div class="">
              <img src={diabetes} alt="diabetes" className="corouselimage" />

            </div>
          </div>

          <div>
            <div class="">
              <img src={hypertension} alt="athritis" className="corouselimage" />
            </div>
          </div>

          <div>
            <div class="">
              <img src={athritis} alt="athritis" className="corouselimage" />
            </div>
          </div>
          <div>
            <div class="">
              <img src={painManagement} alt="athritis" className="corouselimage" />
            </div>
          </div>
          <div>
          </div>

        </Carousel>
      </div>
      <div className="aboutus">
        <div className="aboutusimgsection">
          <img src={aboutus} className="aboutusimg" />
        </div>
        <div className="aboutusdescriptionsection">
          <h1>About Us</h1>
          <p>VG Safe Medicines is a healthcare-based organization focused on optimizing therapeutic outcomes and improving the quality of life in chronic conditions by ensuring safety, efficacy, and availability of drugs to clients.</p>
          <button className="aboutusbutton">ReadMore</button>
        </div>
    
      </div>

      <div className="mainservicescontainer">
        <div className='mainserviceheader'>
      <h1>OUR SERVICES</h1>
      <p>We provide medication therapy management and drug outsourcing services. &nbsp; <Link to="/Services"><br/>
            <button className='readmore'>ReadMore</button>
            </Link></p></div>
        <div className="mainservice">
          <div className='mainservicecard'>
          <div className='mainservicetitle'>
            <h3>Hypertension</h3>
            </div>
              <img src={hypertension}/>

            <Link to="/Services">
            <br/><br/>
            <button className='readmore'>ReadMore</button>
            </Link>
          </div>

          <div className='mainservicecard'>
          <div className='mainservicetitle'>
            <h3>Diabetes Management</h3>
       </div>
            <img src={diabetes}/>
            <Link to="/Services">
            <br/><br/>
            <button className='readmore'>ReadMore</button>
            </Link>
          </div>
          <div className='mainservicecard'>
            <div className='mainservicetitle'>
            <h3>Arthritis Management (Rheumatoid and Osteoarthritis)</h3>
            </div>
          <img src={athritis}/>
            <Link to="/Services">
            <br/><br/>
            <button className='readmore'>ReadMore</button>
            </Link>
          </div>
          <div className='mainservicecard'>
          <div className='mainservicetitle'>
            <h3>Pain management in chronic conditions</h3>
            </div>
          <img src={painManagement}/>
            <Link to="/Services">
              <br/><br/>
            <button className='readmore'>ReadMore</button>
            </Link>
          </div>
        </div>
        </div>
        <div className='Footer'>
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
                 
                  <h5 className="footer-title">Contacts Us</h5>
                  <div className="white"><FaPhoneAlt/>0115523512</div>
               

                 
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

export default Main;