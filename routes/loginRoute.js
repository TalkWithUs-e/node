const express =require("express");
const { getLoginHtml,createUser, getSignInHtml, handleUserLogin, hanldeLogout } = require("../controllers/loginController");
const router = express.Router();


router.route("/").get(getLoginHtml).post(handleUserLogin);
router.route("/signIn").get(getSignInHtml).post(createUser);
router.route("/logout").get(hanldeLogout);

 

module.exports = router; 