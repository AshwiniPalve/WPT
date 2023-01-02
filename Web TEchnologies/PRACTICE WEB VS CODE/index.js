const express=require('express');
const app=express();

//var server=createServer(function(req,res){
app.get ("");
//})
app.get('/',(req,resp)=>{
    resp.sendFile('Day1/first.html',{root,__dirname});
})
app.listen(5000)
    console.log("server running at port 5000")

