import React, { useEffect, useState } from 'react';
import "./Login.scss";
import loginImg from "../../assets/images/login/login.jpg"
import axios from '../../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Login = () => {
  const [username,setUsername] = useState("kminchelle")
  const [password,setPassword] = useState("0lelplR")
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const hendelForm = (e)=>{
    e.preventDefault()
    let user = {username,password}
    setLoading(true)
    axios
        .post('/auth/login',user)
        .then(res => {
          console.log(res);
          localStorage.setItem("x-auth-tokin",res.data.token)
          navigate("/admin")
        })
        .catch(error=> {
          console.error(error)
          toast.error("username or password is incorrect")
        }).finally(()=>setLoading(false))
  }
  return (
    <main>
      <section className="login">
        <div className="container">
          <div className="login__wrapper">
          <div className='login__boxs'>
            <img src={loginImg} alt="Login img" />
          </div>
            <div className="login__card">
              <h2 className="login__title">Log in to Exclusive</h2>
              <p className="login__text">Enter your details below</p>
              <form onSubmit={hendelForm} className="login__form">
                <input 
                  className="login__input" 
                  type="text" 
                  placeholder="Email or Phone Number" 
                  aria-label="Email or Phone Number" 
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
                <input 
                  type="password" 
                  className="login__input"  
                  placeholder="Password" 
                  aria-label="Password" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button disabled={loading} className="login__btn product__btn" type="submit">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
