
import { supabase } from '../supabaseClient';
import React,{useState} from 'react';
import "./Signin.css";
import { useNavigate } from "react-router-dom";

function Signin () {
    const [loading, setLoading] = useState(false);
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    let navigate = useNavigate();
    const handleLogin = async() => {
       
const { data, error } = await supabase.auth.signInWithPassword({
  email: email,
  password: password,
})
navigate("/Explore")
if (error){
  console.log(error);
}    
console.log(data);
};
  
      return (<div className="signinbackground">
        <div className="login-container">
          <h1 className='signinlabel'>SIGN IN</h1>
          <div >
            <label>Email</label>
            <input
              type="text"  className="input-container-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h1>             </h1>
            
          </div>
          <div >
            <label>Password</label>
            <input
              type="password" className="input-container"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h1>               </h1>
          </div>
          <button className="signin-button" onClick={handleLogin}>Sign In</button>
        </div>
        </div>
      );
    }
export default Signin;
