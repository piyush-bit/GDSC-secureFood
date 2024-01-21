import mongoose from 'mongoose'

const dbConnect = () => {
    const connectionParams = {useNewUrlParser : true}
    // console.log(process.env.DB);
    

    mongoose.connect(process.env.DB||'mongodb+srv://user:pass@cluster0.jzsdark.mongodb.net/',connectionParams)
    mongoose.connection.on("connected",()=>{
        console.log("Connected on database sucessfully")
    })
    mongoose.connection.on("error",(err)=>{
        console.log("Error :"+err)
    })
    mongoose.connection.on("disconnected",()=>{
        console.log("Mongodb connection disconnected")
    })

}

export default dbConnect;