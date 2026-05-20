http=require("http");
fs=require("fs");
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(3051)