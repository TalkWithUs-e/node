const express =require("express");
const router = express.Router();


const {  getMainHtml } = require("../controllers/mainController");
const checkLogin = require("../middlewares/checkLogin");



router.route("/").get(checkLogin, getMainHtml);



 

module.exports = router;