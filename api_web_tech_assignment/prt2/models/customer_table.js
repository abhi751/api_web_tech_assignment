const mongoose=require("mongoose")
const {Schema}=mongoose
const customerSchema=new Schema({
    customer_id:String,
    customer_name:String,
    Email:String,
    balance:Number,
})
const customer=mongoose.model('customer', customerSchema);
module.exports=customer;