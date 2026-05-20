var http=require("http");
const data={ m1: '50', m2: '60', m3: '70' };
http.createServer(
    function(req,res){
        res.writeHead(200,
            {'content-Type':'application/json'}
        )
        res.write(JSON.stringify(data));
        res.end();
    }
).listen(3120);