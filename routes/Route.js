const express =require("express");
const router = express.Router();
const cookieparser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");

const { 
    getAllContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact,

} = require("../controllers/contactController");

router.use(cookieparser());

router.route("/").get(checkLogin,getAllContacts).post(createContact);

router.route("/:id").get(checkLogin,getContact).put(checkLogin,updateContact).delete(checkLogin,deleteContact);
 


module.exports = router;