const http=require('http');
const fs=require('fs');
const server=http.createServer(function(req,resp){
var rs=fs.createReadStream("D:\DAC\Web TEchnologies\Day 10\addition.html")
rs.pipe(resp);
})
server.listen(3000);
console.log("server running at port 3000")
