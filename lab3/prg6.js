import  http from 'http';

const server = http.createServer((req, res) => {
   if(req.url ==="/api/products"){
    res.statusCode = 200;
    res.end("sent with 200");
   }
   else{
    res.statusCode = 404;
    res.end("not found");
   }
});

server.listen(3000, () => console.log('prg6 is running'))