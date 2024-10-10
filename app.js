const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path")

const db = require("./Config/mongoose.connection"); // ye DB connection ka code import ho rha h
const ownerRouter = require("./Routes/owners.router")
const usersRouter = require("./Routes/users.router")
const productsRouter = require("./Routes/products.router")

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:"true"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "Public")));
app.set("view engine","ejs");


// Owners se related sari request owner route pe send krdo
app.use("/owners", ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get('/', (req,res)=>{
    res.send("HELLO WORLD");
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
