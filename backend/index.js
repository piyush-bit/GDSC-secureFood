import express from 'express'
import bodyParser from 'body-parser';
import dbConnect from './dbConnect.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './Routes/auth.js'
import userRoute from './Routes/users.js'






dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(cors({
    origin: process.env.CORS_ADD,
    credentials: true,
  }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cookieParser());
dbConnect();
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/user',userRoute);
app.get('/',(req,res)=>{
    res.send('<h1>Hi there<h1/>')
})

app.listen(port,()=>console.log(`listing to port ${port}`))