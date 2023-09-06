const mongoose=require("mongoose");
const {Schema}=require("mongoose");
const productSchema=new mongoose.Schema({
    
   
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    sold:{type:Boolean,required:true},
    dateOfSale:{type:String,required:true},
   
   
},{
    timestamps:true
})

const Products=mongoose.model("product",productSchema);

module.exports=Products;