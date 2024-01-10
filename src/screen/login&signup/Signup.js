import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const Signup = () => {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit= async(e) =>{
        e.preventDefault();
        const response =await fetch("http://localhost:5000/api/createuser",{
         method:'post',
         headers:{
            'Content-Type':'application/json'
         },
         body: JSON.stringify({ 
            name: credentials.name,
            password: credentials.password,
            email: credentials.email,
            location: credentials.geolocation
         })
        });
        const json=await response.json()
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials")
        }
    };
    const onChange=(e)=>{
  setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-group">
                <label htmlFor="name">Username</label>
                <input type="text" id="username" name="name" value={credentials.name} onChange={onChange} placeholder="Enter your username" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} placeholder="Enter your email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} placeholder="Enter your password" required />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Confirm Password</label>
                <input type="password" id="confirmPassword" name="Password" placeholder="Confirm your password" required />
            </div>
            <div className="form-group">
                <label htmlFor="confirord">Address</label>
                <input type="text" id="address" name="geolocation" value={credentials.geolocation} onChange={onChange} placeholder="Enter your address" required />
            </div>
            <button type="submit">Sign Up</button>
            <Link to='/login' className="login" >Already a user</Link>
        </form>

    )
}

export default Signup

