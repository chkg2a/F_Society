import express from 'express'
const app=express();
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './db/connectdb.js';
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.router.js'
dotenv.config();
const port=process.env.PORT || 3000
app.use(express.json());
const corsOption = {
    credentials: true,
    origin: ['https://f-society-client.vercel.app', 'http://localhost:3000']
}
app.use(cors(corsOption));
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || "internal server error";

  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )


  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})














app.listen(port,()=>{
  connectDb();
    console.log(`server is running on ${port}`)
})
