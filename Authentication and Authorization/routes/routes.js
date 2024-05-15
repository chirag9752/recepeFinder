const express = require("express");
const router = express.Router();

const {signUp , login} = require("../controllers/Auth");

router.post("/login" , login);
router.post("/signUp" , signUp);

module.exports = router;