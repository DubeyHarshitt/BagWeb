const express = require("express");
const router = express.Router();

const productModel = require("../Models/product.models")
const upload = require("../Config/multer-config")

router.post("/create", upload.single('image'), async (req, res)=>{
    // res.send(req.file)
    // Needs to Save products using Product models
    try {
        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    const product = await productModel.create({
        image: req.file.buffer,
        name,
        price, 
        discount, 
        bgcolor, 
        panelcolor, 
        textcolor
    });

    // res.send(product);
    // ye jaha se create product request aa rhi h waha waps bejo (owners.router.js)
    req.flash("Success", "Product Created Successfully."); 
    res.redirect('/owners/admin');

    } catch (error) {
        res.send(error.message)
    }
    
});

module.exports = router;