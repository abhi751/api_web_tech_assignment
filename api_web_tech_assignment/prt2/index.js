const express=require('express');
const app=express();

const connectDB=require("./database/db");
const ProductRouter=require("./route/productRoute");
const CustomerRouter=require('./route/customerRoute');
const OrderRouter=require("./route/orderRoute")

app.use(express.json());

app.use('/',ProductRouter);
app.use('/',CustomerRouter);
app.use('/',OrderRouter);

app.listen(3000,async()=>{
    try{
        await connectDB();
        console.log("Server is running at port 3000 ");
    }catch(e){
        console.log(e);
    }
});