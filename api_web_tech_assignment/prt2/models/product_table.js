const mongoose=require("mongoose")
const {Schema}=mongoose
const productSchema=new Schema({
    product_id:String,
    productType:String,
    productName:String,
    product_price:Number,
    availableQuantity:Number,
})
const product=mongoose.model('product', productSchema);
module.exports=product;