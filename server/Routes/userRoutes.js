const express = require('express')
const bcrypt = require('bcryptjs')
const createToken = require('../utils/jwt')
const User = require('../Models/User')
const router = express.Router()
const authMiddleware = require('../Middleware/authMiddleware')

router.post('/register', async (req,res)=>{
    const {username, email, password} = req.body

    try{
       const userExist = await User.findOne({email})
       if(userExist)
        return res.status(400).json({
         message: 'User Exists'
       })

       const hashPass = await bcrypt.hash(password, 10)

       const newUser = await User.create({
        username,
        email,
        password: hashPass
       })

       res.status(201).json({
        message: 'User registered'
       })
    }
    catch(err){
        console.error('registration error: ', err)
        res.status(500).json({
            message: 'Registration failed'
        })
    }
})

router.post('/login', async (req,res)=>{
    const {email, password} = req.body
     try{
        const user = await User.findOne({email})
        if(!user)
            return res.status(400).json({
          message: 'invalid email or password'
        })

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch)
            return res.status(400).json({
          message: 'invalid email or password'
        })

        const token = createToken(user._id)
        res.cookie('token', token,{
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            // maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            message: 'Logged In'
        })
    }
    catch(err){
        console.error('login error:', err)
        res.status(500).json({
            message: 'Login failed'
        })
    }
})

router.get('/me', authMiddleware, async (req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('username')
        
        if(!user){
            return res.status(404).json({
                message: 'unable to fetch user'
            })
        }
        res.status(200).json(user)
    }
    catch(err){
        console.error('error in /user/me', err)
        res.status(500).json({
            message: 'Unable to fetch user'
        })
    }
})

router.get('/logout', (req,res)=>{
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'None',
        secure: true
    })

    res.status(200).json({
        message: 'Logged out'
    })
})

module.exports = router