const https =require('https');
const fs =require('fs')
const fileContent=fs.readFileSync('item.html');

const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'html/css'});
    res.end(fileContent)
})

server.listen(80,'127.0.0.1',()=>{
    console.log("listening on port 80")
})