const express = require('express');

const app = express();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  next();
})

app.use('/api/posts',(req,res,next) => {
 const posts =[
  {
    id: "1",
    title :"First Server side Post",
    content: "This is comming from server"
  },
  {
    id: "2",
    title :"Second Server side Post",
    content: "This is comming from server"
  },
  {
    id: "3",
    title :"Third Server side Post",
    content: "This is comming from server"
  }
 ];
 res.status(200).json({
  message:"Post fetch successfuly!",

  posts:posts
 } )
});

module.exports = app;
