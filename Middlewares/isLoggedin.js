const userModel = require("../Models/user.models");
const jwt = require("jsonwebtoken")

module.exports = async function (req, res, next) {
    // If user doesn't have token
    if(!req.cookies.token) {
        req.flash("error", "You need to login first");
        return res.redirect("/");
    }

    // If user have token 
    try {
        // user data le rhe hai
        let decode = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY)
        let user = await userModel.findOne({email: decode.email}).select("-password");

        req.user = user;
        next();

    } catch (error) {
        req.flash("error", "Something went wrong.");
        res.redirect('/');
    }
} 