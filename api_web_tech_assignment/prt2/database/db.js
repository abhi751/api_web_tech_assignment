const mongoose=require('mongoose');

mongoose.set('strictQuery',true);

const connectDB=()=>{
    return mongoose.connect("mongodb://localhost:27017/api",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("Connected to DB")).catch((e)=>console.log(e));
}

module.exports=connectDB;