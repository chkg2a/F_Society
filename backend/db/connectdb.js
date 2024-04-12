import mongoose from 'mongoose'
const connectDb=async()=>{
    try {
      await  mongoose.connect(process.env.MONGO_URL)
            .then(()=>{
                console.log("database connected")
            })
            .catch((error)=>{
                console.log(error)
            })
    } catch (error) {
        console.log(error)
    }
}
export default connectDb


