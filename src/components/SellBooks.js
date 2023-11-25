import React,{useState} from 'react';
import './SellBooks.css';

import { supabase } from "../supabaseClient";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route,Routes, Navigate} from 'react-router-dom';
import Profile from './profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function SellBooks(){
    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [edition, setEdition] = useState("");
    const [price,setPrice]=useState("");
    const [image,setImage]=useState("");
    
    async function AddBook(){
      try{
        const { data: { user } } = await supabase.auth.getUser();
        
      

       
const { data, error } = await supabase

 .from("Books")
 .insert({
  Name:bookName,
  Author_Name:authorName,
  Price:price,
  user_id:user.id,

  

      }).select()
      const imagefilename=data[0].id
      

const imageupload = await supabase
  .storage
  .from('book-images')
  .upload(imagefilename, image, {
    cacheControl: '3600',
    upsert: false
  })
 
 console.log(data)
 if (error) throw error;
 window.location.href="/Explore";
}catch(error){
alert(error.message);
}};
return(<div  className="backgoundsellbooks">
        <div className="book-container">
          
        <div className="bookname">
            <label>BOOK NAME</label>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            /></div>
            <div className="author">
            <label>Name of the Author</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            </div><div className='edition'>
             <label>Enter Book Edition</label>
             <input
              type="text"
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
            />

            </div>
            <div className="price">
            <label>Price</label>
            <input className='priceinput'
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            /></div>
            <input type="file" id="image" accept="image/*" onChange={(e)=>setImage(e.target.files[0])} />
            <div>
             <button className='submit-sellbooks' onClick={AddBook}>SUBMIT
        </button>
            </div>
            </div>
            
            
            </div>
          

      )};
export default SellBooks;

