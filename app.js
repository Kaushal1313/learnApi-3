require('dotenv').config();

const express=require("express");
const app=express();
const port=3000;
const connectDB=require("./db/connect");

const products_routes=require("./routes/products")
app.get("/",(req,res)=>{
  res.send("Hello i a Connected")
})

app.use("/api/products",products_routes);
connectDB();
  // connectDB(process.env.MONGODB_URL);
app.listen(port,()=>{
  console.log(`Serve is running on http://localhost:${port}`)
})