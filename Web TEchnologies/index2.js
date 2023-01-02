const express=require('express');
const app1=express();
app1.get('/',(req,resp)=>{
    resp.sendFile('D:\DAC\Web TEchnologies\image.html',{root,__dirname});
})
app1.listen(4000);
console.log("server running at port 4000")