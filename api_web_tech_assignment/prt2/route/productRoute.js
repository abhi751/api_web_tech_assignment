const router=require("express").Router();
const product=require("../models/product_table");
const bodyParser=require("body-parser");

router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

router.post("/product",async(req,res)=>{
    try{
        if(!req.body.product_id || !req.body.productType || !req.body.productName || !req.body.product_price || !req.body.availableQuantity){
            res.status(400).json({
                message:"Please send required field"
            })
        }
        const products=await product.create({
            product_id:req.body.product_id,
            productType:req.body.productType,
            productName:req.body.productName,
            product_price:req.body.product_price,
            availableQuantity:req.body.availableQuantity,
        })
        res.status(201).json({
            message:"Product created Successfully",
            product
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

router.get("/product/productID",async(req,res)=>{
    const{productID}=req.body.productID
    try{
        const products=await product.findOne({_id:productID})
        if(!productID){
            res.status(404).json({
                message:"There is no product with that particular id"
            })
        }
        res.status(200).json({
            products
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

router.get("/product/productType",async(req,res)=>{
    const{productType}=req.body.productType
    try{
        const products=await product.findOne({_id:productType})
        if(!productType){
            res.status(404).json({
                message:"There is no product of that particular type"
            })
        }
        res.status(200).json({
            products
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

router.put("/productName/availableQuantity",async(req,res)=>{
     const{productName}=req.body.productName
     try{
        await product.findOne({productName})
        res.status(204).end()
     }
     catch(err){
        res.status(404).json({
           message:err.message
        })
     }
})

