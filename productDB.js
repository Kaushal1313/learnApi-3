require("dotenv").config();

const connectDB = require("./db/connect");  //for Url
const product = require("./models/product"); //schema


const ProductJson=require("./product.json"); // jsone fie coonction

const start = async () => {
  try {
    await connectDB(); // connect for url 
    await product.deleteMany();  // delate priviods Datac
    await product.create(ProductJson);// ist add jsson the data in mongodb
    console.log('Success');
  } catch (error) {
    console.log(error);
  }
};
start();


// for Add the data u just run = node filename