const mongoose=require("mongoose")
const {Schema}=mongoose
const orderSchema=new Schema({
    customer_id:String,
    product_id:String,
    product_name:String,
    quantity:Number,
})
const order=mongoose.model('customer', orderSchema);
module.exports=order;

