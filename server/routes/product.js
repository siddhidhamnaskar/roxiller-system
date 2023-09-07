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
       
        const products=await Products.find().skip(skip).limit(limit);
  
        res.status(200).json(products);

    }
    catch(err){
       res.status(505).json(err)
    }

})

productRouter.get("/",async(req,res)=>{

  try{
    
      const data=await Products.find();
    
      res.status(200).json({length:data.length});

  }
  catch(err){
     res.status(505).json(err)
  }

})

productRouter.get("/month",async(req,res)=>{

    try{
      const {page,month}=req.query;
      const skip=(page-1)*10;
      console.log(month,page);
    
        const products=await Products.find();
      
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const data=products.filter((elem,i)=>{
          return months[new Date(elem.dateOfSale).getMonth()]==month;
        })

        // const Data=data.skip(skip).limit(10);
        
        res.status(200).json(data);
   





    }
    catch(err){
       res.status(505).json(err);
       console.log("error")
    }

})


productRouter.get("/sales",async(req,res)=>{
  try{
     const {month}=req.query;
     const products=await Products.find();
      
     let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     const data=products.filter((elem,i)=>{
       return months[new Date(elem.dateOfSale).getMonth()]==month;
     })
     var sold=0;
     var not_sold=0;
     var sale=0;

     for(let i=0;i<data.length;i++)
     {
      if(data[i].sold==true)
      {
        sold++;
        sale=sale+data[i].price;
      }
      else if(data[i].sold==false)
      {
        not_sold++;
      }

      
     }
     res.status(200).json({sold:sold,not_sold:not_sold,sales:sale});


  }
  catch(err){
    res.status(505).json(err);
  }

})

productRouter.get('/range',async(req,res)=>{
    try{

      const {month}=req.query;
      const products=await Products.find();
       
      let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const data=products.filter((elem,i)=>{
        return months[new Date(elem.dateOfSale).getMonth()]==month;
      })

   
     
    
      var arr=[0,0,0,0,0,0,0,0,0,0];
      for(let i=0;i<data.length;i++)
      {
        if(data[i].price>0 && data[i].price<=100)
        {
          arr[0]=arr[0]+1;
        }
        else if(data[i].price>100 && data[i].price<=200)
        {
          arr[1]=arr[1]+1;
        }
        else if(data[i].price>200 && data[i].price<=300)
        {
          arr[2]=arr[2]+1;
        }
        else if(data[i].price>300 && data[i].price<=400)
        {
          arr[3]=arr[3]+1;
        }
        else if(data[i].price>400 && data[i].price<=500)
        {
          arr[4]=arr[4]+1;
        }
        else if(data[i].price>500 && data[i].price<=600)
        {
          arr[5]=arr[5]+1;
        }
        else if(data[i].price>600 && data[i].price<=700)
        {
          arr[6]=arr[6]+1;
        }
        else if(data[i].price>700 && data[i].price<=800)
        {
          arr[7]=arr[7]+1;
        }
        else if(data[i].price>800 && data[i].price<=900)
        {
          arr[8]=arr[8]+1;
        }
        else if(data[i].price>900 )
        {
          arr[9]=arr[9]+1;
        }
      }
      res.status(200).json(arr);


    }
    catch(err){
      res.status(505).json(err);
    }
})


productRouter.get("/search",async(req,res)=>{
  try{

    const {title}=req.query;
    console.log(title);
    const blogData=await Products.find({title:title})
    //  console.log(blogData);
  
    
    res.status(200).json(blogData);

  }
  catch(err){
    res.status(505).json(err);
  }
})

module.exports=productRouter