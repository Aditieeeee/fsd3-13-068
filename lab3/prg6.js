import http from "http";
import { getAllProducts, addProducts , deleteProduct } from "./products.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data= getAllProducts();
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        count: data.length,
         data,
    }),
  );

  }
   else if (req.url === "/api/v1/products" && req.method === "POST") {
    //console.log("Request:", req);
    let body =""
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", () => {
        const product = JSON.parse(body);
        // console.log("recieved product:", product);\
        const item=addProducts(product);
          res.statusCode = 201;
          res.end(JSON.stringify({ msg: "product added", data:item }));
    });

   
  

  } else if (req.url === "/api/v1/products" && req.method === "PUT") {
    res.statusCode = 200;
    res.end("PUT Request");
  } 

  else if (req.url.startsWith("/api/v1/products") && req.method === "DELETE") {
    const pid = Number(req.url.split('/').pop());

    res.statusCode = 200;
   
    if(deleteProduct(pid)){
      res.end(JSON.stringify({ msg: "product deleted" }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ msg: "product with id ${pid} not found" }));
    }
  } 

  else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

server.listen(5000, () => console.log("prg6 is running"));