localhost - URL 127.0.0.1 - IP address

ctrl +c - stop the server

every request from client has a pair of (request,response)
#node package manager(npm)
used to install , run , uninstall any program/project and package
- npm install <packageName>
- npm uninstall <packageName>

to use npm . the project must be npm project ,
to create npm project we can use
- npm init -y
- it creates a package.json file automatically package.json holds all info relateed to install packages from npm
-it also creates a folder node_modules automtically
node_modules holds the package/library files
-generally we ignore node_modules by .gitignore


Nodemon - it restart the server automatically when the file changes, 
to install 
> npm i nodemon -D

note : -D flag will install this package as developer dependency

- to execute any program , update the packAGE.json then  start the server  as
<b>npm run dev</b> 


## status code
- 200 ->ok
- 400 -> unauthorized
- 404 -> not found 
- 500 -> internal server error

## content type

- text/plain
- text/html
- application/json
- text/css

the content type nad status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode
## send html file to client
1.j=html file

- read html file using craeteReadStream
- pipe it with res object

2.html content
     send any html tags/content by using
    res.end('<any html tag'>)

## JSON
the data is in json format 

json always stores data in the key value pair in closd by curly brackets{}
array can be stored by square bracket()
oe pair of curly bracket will represent one object and its property will be seperated by comma ,
ex: ```{
    id:1;
    name:"mobile"
    price:3500
    rating:200
}

```
headers
headers is usedto tell the client the type of data ,send by the server . 
it may be html file , json file dta , plain textfiles, css file, any tokens(for login ) , 


