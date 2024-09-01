// const http = require("http");

// const sever = http.createServer((req, res)=>{

//     const { method, url } = req;
//     res.setHeader("Content-Type", "text/plain");


//     if (method === "GET" &&  url === "/home"){
//         res.statusCode = 200;
//         res.end("HOME");
//     } else if (method === "GET" &&  url === "/about"){
//         res.statusCode = 200;
//         res.end("ABOUT");
//     } else {
//         res.statusCode = 404;
//         res.end("NOT FOUND");
//     }
// });



// sever.listen(3000, ()=>{
//     console.log("3000번 포트에서 서버 실행 중");
// })

const fs = require("node:fs").promises;

 async function readDirAsync() {
    try{
        const files = await fs.readdir("./");
        console.log(files);
    } catch {
        console.log(err);
    }
 }

readDirAsync();