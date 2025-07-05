const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const env = require('dotenv')
const cookieparser = require('cookie-parser')
const userRouter = require('./Routes/userRoutes')
const taskRoutes = require('./Routes/taskRoutes')

env.config()
const app = express()

app.use(cors({
    origin: [process.env.CLIENT_URL, 'http://localhost:5173'],
    credentials: true
}))

app.use(cookieparser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/user', userRouter)
app.use('/task', taskRoutes)

mongoose.connect(process.env.MONGO_URL).then(()=>{
   console.log('connected to db');
}).catch(err => console.log(err));

app.get('/', (req,res)=>{
    res.send('APP IS RUNNING...')
})

app.listen(5000, ()=>{
    console.log('App running at 5000');
    
})