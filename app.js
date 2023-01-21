// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const router = require('./router/api-router')



const MONGODB_URI = "mongodb://127.0.0.1:27017/myclothing";
//components
// const apiRouter = require("./app/router/api-router");

// app.get('/',(req,res)=>{
    //   res.send("Hello Srinivas")
    // })
    
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    app.get('/',(req,res)=>{
        res.send("Hello Srinivas")
    })
    
app.use("/api",router);

mongoose
  .connect(MONGODB_URI)                  /*  process.env.MONGODB_URI*/
  .then(() => {
    app.listen(4000, function () {
      console.log(`Connected to DB, hurrrayyy!`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
