import React, { useState } from 'react'
import './Login.css'
import { request } from '../../axios'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCall'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {}

    data.email = email
    data.password = password

    login(dispatch, {email,password})
    toast.success('Login Successful')
    setTimeout(() => {
      navigate('/');
    }, 100);

  }

  return (
    <div className='login'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <form onSubmit={handleLogin}>
        <h2>HappyAbode</h2>
        <div className="container">
          <div className="item">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'/>
          </div>

          <div className="item">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'/>
          </div>
        </div>


        <button>Login</button>
        <span>HappyAbode homes and Luxury</span>
      </form>
    </div>
  )
}

export default Login