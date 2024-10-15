const express = require('express');
const router = express.Router();

const isLoggedIn  = require("../Middlewares/isLoggedin");
const productModels = require('../Models/product.models');
const userModels = require('../Models/user.models');

router.get('/', (req, res)=>{
    let error = req.flash("error");
    res.render("index", {error, loggedin: false });
});

router.get("/shop", isLoggedIn, async (req, res)=>{
    let products = await productModels.find({})
    let success = req.flash("success")
    res.render("shop", { products , success});
});


// ADD to cart
router.get("/addtocart/:productid", isLoggedIn, async (req, res) => {

    // Check if the user is logged in
    if (!req.user) {
        req.flash("error", "You need to log in first");
        return res.redirect("/");
    }

    try {
        // Find the user by email
        let user = await userModels.findOne({ email: req.user.email });

        // Check if the user's cart exists, if not initialize it
        if (!user.cart) {
            user.cart = [];
        }

        // Push the product ID to the user's cart
        user.cart.push(req.params.productid);
        await user.save();

        // Flash success message and redirect
        req.flash("success", "Product added to cart");
        res.redirect('/shop');

    } catch (error) {
        // Handle any errors that may occur
        console.error("Error adding product to cart:", error);
        req.flash("error", "There was an error adding the product to the cart");
        res.redirect('/shop');
    }
});

// Rendering Cart
router.get('/cart', isLoggedIn, async (req, res)=>{
    let user = await userModels.findOne({ email: req.user.email }).populate("cart");
    // console.log(user.cart);
    const bill = Number(user.cart[0].price)+ 20 - Number(user.cart[0].discount);

    res.render("cart" , { user, bill });
});
module.exports = router;