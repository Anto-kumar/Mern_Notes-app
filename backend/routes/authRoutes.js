const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getUser} = require("../controllers/authController.js");
const { authenticateToken } = require("../utilities.js");


router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/getuser",authenticateToken,getUser)

module.exports = router;