import http from 'http';

const server = http.createServer((req, res) => {
const products ={
    id:1,
    name:"mobile",
    price:3.6,
    review:225  
};


//   res.end('Hello, World!\n');
// if(req.url==='/api/products'){
//     res.end(JSON.stringify(products);
// //         id:1,
// //         name:"mobile",
// //         price:3.6,
// //         review:225
    
// // }))
// }
// })

const items =




if(req.url ==="/api/products"){
    res.end(JSON.stringify(items));
}
else{
    res.statusCode =404;
    res.end();
}
});
server.listen(3000, () => console.log('prg4 is running'))