const asyncHandler = require("express-async-handler");
const path =require("path");




const getMainHtml = asyncHandler(async(req, res) =>{
    
    const filePath = path.join(__dirname, "../public", "index.html");
    res.status(200).sendFile(filePath);
    
});

module.exports = { getMainHtml};