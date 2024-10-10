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