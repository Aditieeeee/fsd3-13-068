import http from 'http';
const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);





    if(req.url==="/"){
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Welcome to the Home Page</h1>");
    }

});
    server.listen(5000, () =>  console.log("Server is running on port 5000"));
    


