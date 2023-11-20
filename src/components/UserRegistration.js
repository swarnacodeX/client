import React,{useState} from "react";
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useNavigate } from "react-router-dom";




import "./UserRegistration.css";
function UserRegistration(){
    const[booklovers,setBooklovers]=useState('');
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[fullname,setFullname]=useState('');
    const[email,setEmail]=useState('');
    const [FormError,setFormError]=useState(null);
    let navigate = useNavigate();
   
    async function CreateUser(){
      try{
       
        const { data, error } = await supabase.auth.signUp({
          email:email,
          password:password,
          
        })
        await supabase
          .from('users')
          .update({ username:username,fullname:fullname })
          .eq('id', data.user.id)
      
      console.log(data)
      

       

}catch(error){
alert(error.message);
}};
      return(<div  className="backgroundcustomer">
        <div className="login-container-customer">
          <h1>SIGN IN</h1>
        <div className="fname1">
            <label>Fullname</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            /></div><p>     </p><h1> </h1>
            <div className="uname1">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /></div><p>     </p>
            <div className="email1">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /></div><p>     </p>
            <div className="password1">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /></div><p>     </p>
            <div> <Link to="./"><button  onClick={CreateUser} className='submit-button'>SUBMIT
        </button></Link>
          
        </div>
            </div>
            </div>
          

      )

}
export default UserRegistration;
