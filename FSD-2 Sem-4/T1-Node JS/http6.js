// write node js script to fetch values from url and display output as asked
// http://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=WelcomeToLJU#ALLthebest
//1. data must be written in file exam.txt(file name must be fetched from url)
// OUTPUT:
// Hello! 
// Welcome to LJU FSD2 T1 Test
// #ALLthebest
// 2. read the content from file and send response to server and display the content in / page in same format but in h1 tag and in red color
// 3. if any other page is requested it shows page not found in plain text

var http=require("http");
var url=require("url");
var fs=require("fs");

u="http://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome To LJU #ALLthebest";
q=url.parse(u,true);
process.noDeprecation=true;
console.log(q);
fn=q.pathname.split("/")[1];
data=q.query.c1+"! \n"+q.query.c3+" "+q.query.c2+"\n"+q.hash;
console.log(data)

fs.writeFileSync(fn,data);
http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,
            {'content-Type':'text/html'}
        )
        d=fs.readFileSync(fn,"utf-8")
        res.write('<pre><h1 style="color:red";>'+d+'</h1></pre>');
        res.end();   
    }
    else{
        res.writeHead(404,
            {'content-Type':'text/plain'}
        )
        res.write("Page Not Found");
        res.end();
    }
}).listen(3000);