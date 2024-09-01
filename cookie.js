const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());


app.get("/",(req, res) => {
    res.cookie("Kim", "1234", {httpOnly: true});
    res.cookie("Noh", "5678", {httpOnly: true});
    res.send("쿠키생성");
});

app.get("/cookie", (req, res) => {
    console.log(req.cookies);
});

app.listen(5000, () => {
    console.log("서버 실행 중");
});

app.get("/delete-cookie", (req, res) => {
    res.clearCookie("Noh").send("쿠키 삭제");
});
