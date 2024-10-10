const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Prducts Url working ")
});

module.exports = router;