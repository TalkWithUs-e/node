const express = require("express");
const errorhandler = require("./01/errorhandler");
const dbConnect = require("./config/dbConnect");
const Contact = require("./models/contactModel");


const http = require("http");
const { Server } = require("socket.io");
const socketEvent = require("./webSocket/socketEvent");
const cookieParser = require("cookie-parser");


const app = express()
const port = 3000;

const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.set("views", "./views");




dbConnect();

socketEvent(io);

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true}));


app.get("/",(req, res) =>{
    const responseText = `Hello Node! \n요청 시간: ${req.requestTime}`;
    // res.set("Content-type", "text/plain");
    res.send(responseText);
})

app.use("/main", require("./routes/mainRoute"));
app.use("/contacts", require("./routes/Route"));
app.use("/login", require("./routes/loginRoute"));
app.use(errorhandler)



server.listen(port, ()=> {
    console.log(`${port}번 포트에서 서버 실행 중`)
})