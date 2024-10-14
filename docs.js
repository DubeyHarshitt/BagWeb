// User Model Info

/*
fullName - String
email - String
Password - String
cart - array 
isAdmin - boolean
orders - array
contact - number
picture - string (multer DB (memory storage))


// Product Model Info

product 
image
name
price
discount
bgcolor
panelcolor
textcolor


/signup or login (ye sab user.router pe hoga  user k related jitne bhi functions hai )    
/shop → shop
/users/cart → cart 
/admin → admin panel
/owner/products → show all products
/owner/admin → show admin panel to create
*/


// ----------------------------------------------------------------------------------------



// TODO:  JO MODELS WALA FOLDER HAI USME DATABASE MODELS BANTE HAI eg :- usermodel.js productmodel.js

//   Setting Up moduleJS as per industry standards (Sepration of concerns)

// FIXME: Jo CONFIG file hoti hai usme mongoose conection string types chize file bana k likte hai (mongoose.connection.js)
//        ye code mongoose.connection ka export krte hai aur app me import krte hai

// FIXME: Jo Routes directory hoti hai usme sab route declare krte hai
//        const ownerRouter = require("./Routes/owners.router")
//        app.use("/owners", ownerRouter); (isi ko API bhi  bolte hai shyad)




// ----------------------------------------------------------------------------------------

// GIT HUB 

//  1:- git add .
//  2:- git commit -m "my commit"
//  3:- git add .


// ----------------------------------------------------------------------------------------

// Dependencies install
/* 
  express 
  mongoose
  path 
  ejs 
  cookie-parser
  debugg
  config
  jsonwebtoken
  bcrypt
  dotenv
  express-session (express-session is a middleware in Express used to manage sessions, which helps store user-specific data between HTTP requests. It works by storing session data on the server and creating a session ID, which is sent to the client in a cookie.) 
  flash (to create flash  messages)
  multer 
*/


// ----------------------------------------------------------------------------------------

// FIXME: Setting debugger & using in place of console.log
// const dbgr = require('debug')("development:mongoose")
// Terminal command :- export DEBUG=development:* (to show message in console)

// node env setup =>  export NODE_ENV=development   
// console.log(process.env.NODE_ENV);
// "MONGO_DB_URI" : "mongodb+srv://harshitdubey02004:harshit20@cluster0.33naz.mongodb.net/"


// ----------------------------------------------------------------------------------------


// Colors

/* 

brown
text 774F3D
paneL DEBEAE
bgcolor F4DDD2

lightblue
text 48606E
panel D3E4EE
bgcolor F3F8FB

khaakibrown
text 5F4A30
panel C5B095
bcolor DEDOBF

pink
text 816264
panel E3C4C6
bcolor F4E0E1

*/