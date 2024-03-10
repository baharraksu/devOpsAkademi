const http=require("http");

const server=http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type" :"text/plain"});//hangi response ile dönecek?
    res.end("Hello,World!\n");
});
server.listen(3000,() =>{
    console.log("server is running on port 3000");
});
