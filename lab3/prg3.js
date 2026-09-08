import http from "http";


const server = http.createServer((req, res) => {
    if(req.url==='/') {
        res.setHeader('Content-Type','text/html');
        res.write(`
            <a href="/matka">Matka</a>
            <a href="/bottle">Bottle</a>
        `);
        res.end();
    }
    // res.end("<h1>Hello Client hihi</h1>");
    if(req.url==='/matka') {
        res.setHeader('Content-Type','text/html');
        const stream = createReadStream('matka.html',{encoding:'utf-8'});
        stream.pipe(res);
    }
    else if(req.url==='/bottle') {
        res.setHeader('Content-Type','text/html');
        const stream = createReadStream('bottle.html',{encoding:'utf-8'});
        stream.pipe(res);
    }
    else{
        res.statusCode = 404;
        res.end("Page not found");
    }

});

server.listen(3000, () => console.log("Server is running at 3000..."));