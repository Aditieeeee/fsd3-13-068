import http from 'http';
const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);





    if(req.url==="/"){
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Welcome to the Home Page</h1>");
    }
    else if(req.url==="/products"){
        const products = [
            {id: 1, name: "Mobile"},
            {id: 2, name: "Laptop"}
        ];
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(products));
    }
    else{
        res.end();
    }

});
    server.listen(5000, () =>  console.log("Server is running on port 5000"));
    


