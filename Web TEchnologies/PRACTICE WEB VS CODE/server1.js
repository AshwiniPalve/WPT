var http=require('http');
var server=http.createServer(function(req,res){
    var path=req.url.replace(/\/?(?:\?.*)?$/).toLowerCase();
        switch(path){
            case '/home':
                res,writeHead(200,{'content-type':'text/html'})
                res.write('<h1>Home Page</h1>');
                res.write("Welcome,you are in home page");
                res.end("response ended");
                break;
                case '/aboutus':
                    res,writeHead(200,{'content-type':'text/html'})
                    res.write('<h1>About Us</h1>');
                    res.write("Welcome,you are in AboutUs page");
                    res.end("response ended");
                    break;
                 default:
                        res,writeHead(404,{'content-type':'text/plain'})
                        res.write('Not Found');
                        res.end("response ended");
                        break;
            
    }

});
server.listen(3000);
console.log("server running at port 3000")