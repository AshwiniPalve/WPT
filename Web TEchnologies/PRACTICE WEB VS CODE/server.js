var http=require('http')
var server=http.createServer(function(req,res)
{
res.writeHead(200,{'content-type':'text/plain'})
res.write("Hello world!!!");
res.end("responde ended")
})
server.listen(8000);
console.log("server is running at port 8000")