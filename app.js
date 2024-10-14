const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path")
const expressSession = require("express-session");
const flash = require("connect-flash")

const db = require("./Config/mongoose.connection"); // ye DB connection ka code import ho rha h
const ownerRouter = require("./Routes/owners.router")
const usersRouter = require("./Routes/users.router")
const productsRouter = require("./Routes/products.router")
const indexRouter = require('./Routes/index'); // Path to your router file

const PORT = 3000;
const app = express();

// .env KO use krne k liye 
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended:"true"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "Public")));
app.set("view engine","ejs");

// Middleware for flash
app.use(flash());

// Middleware setup for session
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  }));
  


// Owners se related sari request owner route pe send krdo
app.use("/owners", ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
// Use the router for the root path
app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
