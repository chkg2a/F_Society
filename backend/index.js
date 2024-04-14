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
