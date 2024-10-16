const express = require("express");
const router = express.Router();

const ownerModel = require("../Models/owner.models");

router.get("/adminlogin", (req,res)=>{
  res.render("adminlogin");
});

// IF Environment is set to development then this route executes
// export NODE_ENV=development

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    // Checking if already owner exist
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(500)
        .send("You don't have permission to create new owner");
    }

    // Creating owner
    let { fullname, email, password, gstin } = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
      gstin,
    });
    // res.status(201).send(createdOwner);
    res.render("shop");
  });
}

router.get("/admin", (req, res) => {
    let success = req.flash("Success");
    res.render("createproducts", {success});
});

module.exports = router;
