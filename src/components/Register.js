import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import './Register.css';


function Register() {
    return (
      <div className='body'>
        <label className='headinglogin'>LOGIN</label>
        <Link to="./UserRegistration">
        <button className='my-button2'>CREATE YOUR ACCOUNT</button></Link>
        
        <Link to="./Explore"><button className='my-button3'>SURF BOOKSTORE <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button></Link>
        <h1 className="heading-signin">Already an user?</h1>
        <Link to="./Signin">
        <button className='my-button4'>Sign In</button>
        </Link>
  
      </div>
      
    );
  }
  
  export default Register;