const jwt =  require("jsonwebtoken");

const generateToken = (user)=>{
    // console.log(user.email);
    return jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET_KEY );
};

module.exports.generateToken = generateToken;

// isko user.routes.js me bheja