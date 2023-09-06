
const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connection=require('./Config/db');
const productRouter=require('./routes/product')
dotenv.config();

const PORT=process.env.PORT;

const app=express();

app.use(cors());
app.use(express.json());
app.use("/products",productRouter)
app.get("/", (req, res) => {
    res.send("School Management System API");
});

app.listen(PORT,()=>{
    try{
        connection();
        console.log(`server listening to PORT:${PORT}`)

    }
    catch{
        console.log("error")

    }
})



