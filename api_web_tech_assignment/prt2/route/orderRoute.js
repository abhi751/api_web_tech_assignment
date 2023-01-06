const router=require("express").Router();
const order=require("../models/order_table");
const bodyParser=require("body-parser");

router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

router.post("/orders",async(req,res)=>{
    try{
        if(!req.body.customer_id || !req.body.product_id || !req.body.product_name|| !req.body.quantity){
            res.status(400).json({
                message:"Please send required field"
            })
        }
        const orders=await order.create({
            customer_id:req.body.customer_id,
            product_id:req.body.product_id,
            product_name:req.body.product_name,
            quantity:req.body.quantity,
        })
        res.status(201).json({
            message:"Product created Successfully",
            orders
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

router.get("/orders/orderID",async(req,res)=>{
    const{orderID}=req.body.orderID
    try{
        const orders=await order.findOne({_id:orderID})
        if(!orderID){
            res.status(404).json({
                message:"There is no order with that particular id"
            })
        }
        res.status(200).json({
            orders
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})