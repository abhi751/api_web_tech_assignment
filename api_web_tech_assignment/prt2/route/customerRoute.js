const router=require("express").Router();
const customer=require("../models/customer_table");
const bodyParser=require("body-parser");

router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

router.post("/customer",async(req,res)=>{
    try{
        if(!req.body.customer_id || !req.body.customer_name || !req.body.Email || !req.body.balance){
            res.status(400).json({
                message:"Please send required field"
            })
        }
        const customers=await customer.create({
            customer_id:req.body.customer_id,
            customer_name:req.body.customer_name,
            Email:req.body.Email,
            balance:req.body.balance,
        })
        res.status(201).json({
            message:"Customer created Successfully",
            customers
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

router.get("/customer/customerID",async(req,res)=>{
    const{customerID}=req.body.customerID
    try{
        const customers=await customer.findOne({_id:customerID})
        if(!customerID){
            res.status(404).json({
                message:"There is no order with that particular id"
            })
        }
        res.status(200).json({
            customers
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

