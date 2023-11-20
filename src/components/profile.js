
import "./profile.css";
import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export const Profile = () => {
  const [profileuser,setProfileuser]=useState(null);
  async function getSupabaseUser(){
    
    const { data: { user } } = await supabase.auth.getUser();
    
const { data, error } = await supabase
.from('users')
.select()
.eq('id', user.id)
    setProfileuser(data[0]);
  }
  useEffect(()=>{
getSupabaseUser();
  },[])
  return (
    <div className="profilebg">
      <div className="profile-image">
      <FontAwesomeIcon icon={faUser} />
      
    </div>
      
      
        <div className="profile-username">
          USERNAME: {profileuser && profileuser.username}
        </div>
        <p> </p>
        
        
        
                           
        <div className="profile-email">
          
          EMAIL:{profileuser && profileuser.email}
        </div>
        <button className="your-profile-orders">
          Your Orders       <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
        <button className="your-profile-wishlist">
        Your Wishlist       <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
        <button className="your-profile-solditems">
        Books you sold      <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
        
       
      </div>
    
  );
};
export default Profile;


  