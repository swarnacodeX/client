import React,{useEffect, useState} from 'react';
import "./Explore.css";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route,Routes, Navigate} from 'react-router-dom';
import Profile from './profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



function Explore({session}){
  const [books,setBooks]=useState([]);
  let navigate = useNavigate();
  async function getBooks(){
    
const { data, error } = await supabase
.from('Books')
.select('id,Name,Author_Name,Price,users(email)')
setBooks(data);

  }
  const sellbooksbutton =()=>{
    window.location.href="/SellBooks";
  } 
  const routeChange = () =>{ 
    window.location.href="/profile";
  }
  const [isHovered, setIsHovered] = useState(false);
  const logout=async()=>{
    
const { error } = await supabase.auth.signOut()
window.location.href="/"
if(error){
  console.log(error);
}
  }
  useEffect(()=>{
    getBooks();

  },[])
  return (
    <div className="background">
     
        <div className="text-wrapper">EXPLORE
        
        <div className="search-bar">
      <input
        type="text"
        placeholder="Search books..."
        className="search-input"
      />
      <button className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
      </div><div><button className={`dropdown-button ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>Accounts   <i className="fa fa-address-book" aria-hidden="true"></i>{isHovered && (
          <div className="dropdown-menu">
            <div>{session ? <button onClick={logout}>Logout</button>:""}</div>
            <button onClick={routeChange}>Profile</button>
          </div>
        )}</button></div><div>{session ? <button  className="sell-books" onClick={sellbooksbutton}>Sell book
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></button>:""}</div>
        
        <div className='cardMain'>
          {books.length?books.map((book)=>{
          return ( <div className="bookCard">
            <img src={`https://ihqkukbkrikczsxftgmn.supabase.co/storage/v1/object/public/book-images/${book.id}`} alt="Book Cover"/>
            <div className="cardContent">
                <h2>Book:{book.Name}</h2>
                <p>Author:{book.Author_Name}</p>
                <p>Price:{book.Price}</p>
                <p>Seller:{book.users.email}</p>
            </div>
        </div>)
          }):"loading..."}
        
        </div>
     </div>
     
     
    
  )
}
export default Explore;
