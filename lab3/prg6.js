import http from "http";

import {
    getAllProducts,
    addProducts,
    deleteProduct,
    getProductById,
    updateProduct
} from "./products.js";

const server = http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);


    // GET ALL PRODUCTS
    if (req.url === "/api/v1/products" && req.method === "GET") {

        res.statusCode = 200;

        const data = getAllProducts();

        res.setHeader("Content-Type", "application/json");

        res.end(
            JSON.stringify({
                count: data.length,
                data
            })
        );
    }


    // ADD PRODUCT
    else if (req.url === "/api/v1/products" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const product = JSON.parse(body);

            const item = addProducts(product);

            res.statusCode = 201;

            res.end(
                JSON.stringify({
                    msg: "product added",
                    data: item
                })
            );
        });
    }


    // UPDATE PRODUCT
    else if (
        req.url.startsWith("/api/v1/products/") &&
        req.method === "PUT"
    ) {

        const pid = Number(req.url.split("/").pop());

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const product = JSON.parse(body);

            product.id = pid;

            const updatedProduct = updateProduct(pid, product);

            if (updatedProduct) {

                res.statusCode = 200;

                res.end(
                    JSON.stringify({
                        msg: "product updated",
                        data: updatedProduct
                    })
                );

            } else {

                res.statusCode = 404;

                res.end(
                    JSON.stringify({
                        msg: `product with id ${pid} not found`
                    })
                );
            }
        });
    }


    // DELETE PRODUCT
    else if (
        req.url.startsWith("/api/v1/products/") &&
        req.method === "DELETE"
    ) {

        const pid = Number(req.url.split("/").pop());

        if (deleteProduct(pid)) {

            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    msg: "product deleted"
                })
            );

        } else {

            res.statusCode = 404;

            res.end(
                JSON.stringify({
                    msg: `product with id ${pid} not found`
                })
            );
        }
    }


    // GET PRODUCT BY ID
    else if (
        req.url.startsWith("/api/v1/products/") &&
        req.method === "GET"
    ) {

        const pid = Number(req.url.split("/").pop());

        const product = getProductById(pid);

        if (product) {

            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    msg: "product found",
                    data: product
                })
            );

        } else {

            res.statusCode = 404;

            res.end(
                JSON.stringify({
                    msg: `product with id ${pid} not found`
                })
            );
        }
    }


    // REQUEST NOT FOUND
    else {

        res.statusCode = 404;

        res.end("request not found");
    }

});

server.listen(5000, () => console.log("prg6 is running"));