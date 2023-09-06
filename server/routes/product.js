const Products=require("../models/product")

const router=require("express");
const productRouter=router();
const fs =require('fs');

const dotenv=require("dotenv");
dotenv.config();

productRouter.get("/",async(req,res)=>{

    try{
      const {page,limit}=req.query;
      const skip=(page-1)*10;
        const car=await Products.find().skip(skip).limit(limit);
        res.status(200).json(car)

    }
    catch(err){
       res.status(505).json(err)
    }

})

productRouter.get("/",async(req,res)=>{

    try{
     
        const products=await Products.find()
      
        res.status(200).json(products.lenth)

    }
    catch(err){
       res.status(505).json(err)
    }

})





module.exports=productRouter