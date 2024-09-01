const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const path =require("path");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

//로그인 창

const getLoginHtml = asyncHandler(async(req, res) =>{
    
    const filePath = path.join(__dirname, "../public", "login.html");
    res.status(200).sendFile(filePath);
    
});


const handleUserLogin = asyncHandler(async(req, res) =>{ 
    // console.log(req.body);
    const { userId, userPwd } = req.body;
    
    const user = await User.findOne({ userId });

    if (!user) {
        return res.status(401).json({ message: "일치하는 사용자가 없습니다." } );

    }
    const isMatch = await bcrypt.compare( userPwd, user.userPwd );

    if (!isMatch) {
        return res.status(401).json( { message: "비밀번호가 일치하지 않습니다."} );
    }

    const token = jwt.sign( { id: User._id }, jwtSecret, {expiresIn: "10m" });
    //User._id는 뭔가

    res.cookie("token", token, { httpOnly: true });

    res.redirect("/main");
  

});

const hanldeLogout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
};

//회원가입 창
const getSignInHtml = asyncHandler(async(req, res) =>{
    
    const filePath = path.join(__dirname, "../public", "SignIn.html");
    res.status(200).sendFile(filePath);
    
});

//회원가입 정보보내기?
const createUser = asyncHandler(async(req, res) =>{ 
    console.log(req.body);
    const { name, userId, signPwd } = req.body;
    if(!name || !userId ||!signPwd){
        return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    const userPwd = await bcrypt.hash(signPwd, 10);
    const user = await User.create({ 
        name, userId, userPwd,});
   


    res.status(201).send("Create Contacts");

});

module.exports = { getLoginHtml, handleUserLogin, createUser, getSignInHtml, hanldeLogout};