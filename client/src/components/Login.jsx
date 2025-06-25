import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({email: '', password: ''})
    const navigate = useNavigate()
    
    const handleChange = (e)=>{
       setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e)=>{
       e.preventDefault()

       try{
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, data, {withCredentials: true})
        console.log(res);
        alert('user logged in')
        navigate('/')
       }
       catch(err){
        if(err.response?.status == 400){
            alert(err.response.data.message)
        }
        else{
            console.log(err);
            alert('login failed')
        }
       }
    }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-300'>

        <input onChange={handleChange} type="email" name='email' placeholder='enter email' required/>
        <input onChange={handleChange} type="password" name='password' placeholder='enter password'required/>
        <button type='submit'className='border'>Login</button>
      
    </form>
  )
}

export default Login
