import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [data, setData] = useState({username: '', email: '', password: ''})
    const navigate = useNavigate()

    const handleChange = (e)=>{
       setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e)=>{
       e.preventDefault()

       try{
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/register`, data, {withCredentials: true})
        alert('user registered')
       }
       catch(err){
        console.log(err);
        alert('registration failed')
       }
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-300'>

        <input onChange={handleChange} type="text" name='username' placeholder='enter username'/>
        <input onChange={handleChange} type="email" name='email' placeholder='enter email'/>
        <input onChange={handleChange} type="password" name='password' placeholder='enter password'/>
        <button type='submit'className='border'>Register</button>
      
    </form>
  )
}

export default Register
