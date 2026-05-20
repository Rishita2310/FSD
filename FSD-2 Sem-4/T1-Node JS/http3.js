var http=require("http");
fs=require("fs");
http.createServer(
    function(req,res){
        if(req.url=="/"){
            res.writeHead(200,
                {'content-Type':'text/html'}
            );
            res.write("<h1>Welcome to the Home Page</h1>");
            res.end();
        } else if(req.url=="/image"){
            img=fs.readFileSync("E:\\Pictures\\Isha phone photos\\1200-675-21829168-441-21829168-1719686123760.jpg");
            res.writeHead(200,
                {'content-Type':'image/jpeg'}
            );
            res.write(img);
            res.end();
        }
    }
).listen(3120);