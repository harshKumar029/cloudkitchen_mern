import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './L&s.css'
import Navbar from "../../components/Navbarr/Navbarr";


const Login = () => {
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://cloudkitchen-mern.vercel.app/api/loginuser", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: credentials.password,
                email: credentials.email,
            })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials")
        }
        if (json.success) {
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate("/");
        }

    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={handleSubmit}>
            <Navbar />
            <div className="formcontainer">
                <h2>Access Your Account</h2>
                <div className="form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} placeholder="Enter your password" required />
                </div>
                <div className='accbutton'>
                    <button type="submit">Log In</button>
                    <Link to='/createuser' className="login" >i'm a new user.</Link>
                </div>
            </div>
        </form>
    )
}

export default Login