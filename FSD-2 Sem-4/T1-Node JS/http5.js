// create 1 page with 2 links 
// 1st-> /home
// 2nd-> /about
// both pages must contain relavent html type content if user add any other url path 
// then it will be redirected to the page which shows plain message "page not found"

var http=require("http");
fs=require("fs");
img1=fs.readFileSync("laddu.jpeg");
img2=fs.readFileSync("flower.jpg");
http.createServer(
    function(req,res){
        if(req.url=="/home"){
            res.writeHead(200,
                {'content-Type':'image/jpeg'}
            );
            res.write(img1);
            res.end();
        } else if(req.url=="/about"){
            res.writeHead(200,
                {'content-Type':'image/jpeg'}    
            );
            res.write(img2);
            res.end();
        } else {
            res.writeHead(404,
                {'content-Type':'text/html'}    
            );
            res.write("<h1>Page Not Found</h1>");
            res.end();
        }
    }
).listen(8150);