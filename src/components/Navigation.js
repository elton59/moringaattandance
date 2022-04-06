import React from 'react';
import './Navigation.css';
import vigisafe from '../assets/logo/vglogo.png';
import {Link} from 'react-router-dom';

function Navigation(props) {
    return (
        < div className='navigationwrapper'>
        <div className="navigation">
          
            <div className="navigationtabs">
                <Link to="/">
            <p className="navigationlink">Register For lesson </p>
            </Link>
            {/* <Link to="/Scanner">
            <p className="Scanner">scanner </p>
            </Link>   */}
            <Link to="/Attendance">
          <p className="navigationlink">View attandace</p>
          </Link>
          
            </div>
           
           
        </div>
        <div className="navigationlogo">
            <img src={vigisafe} className="logoimg"alt="vigisafe"/>
            </div>
        </div>
    );
}

export default Navigation;