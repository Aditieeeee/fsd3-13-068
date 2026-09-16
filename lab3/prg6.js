import  http from 'http';

const server = http.createServer((req, res) => {
   if(req==="/" && req.method==="GET"){
    res.statusCode=200;
    res.end("get request received\n");
   }
   else if(req.url==="/about" && req.method==="POST"){
      res.statusCode=200;
      res.end("post request received\n");
   }

   else if(req.url==="/about" && req.method==="PUT"){
      res.statusCode=200;
      res.end("put request received\n");
   }

   else if(req.url==="/about" && req.method==="DELETE"){
      res.statusCode=200;
      res.end("delete request received\n");
   }

   else{
      res.statusCode=404;
      res.end("Not Found\n");
   }
   