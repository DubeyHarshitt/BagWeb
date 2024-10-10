const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("owners url working ");
});

module.exports = router;