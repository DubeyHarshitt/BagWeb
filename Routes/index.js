const express = require('express');
const router = express.Router();

const isLoggedIn  = require("../Middlewares/isLoggedin");
const productModels = require('../Models/product.models');

router.get('/', (req, res)=>{
    let error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop", isLoggedIn, async (req, res)=>{
    let products = await productModels.find({})
    res.render("shop", {products});
});


module.exports = router;