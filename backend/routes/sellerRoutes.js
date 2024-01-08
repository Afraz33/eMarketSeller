const express = require("express");
const { checkSeller, Authenticate } = require("../controllers/authController");
const sellerRouter = express.Router();
const {
  signup,
  login,
  update,
  delAccount,
  getAllSellers,
} = require("../controllers/SellerController");

// Signup for Seller
sellerRouter.post("/signup", signup);

// Login for Seller
sellerRouter.post("/login", login);

// Update for Seller
sellerRouter.put("/update/:id", Authenticate, checkSeller, update);

// Delete for Seller
sellerRouter.delete("/delete/:id", Authenticate, checkSeller, delAccount);

//get All Sellers
sellerRouter.get("/get", getAllSellers);

module.exports = sellerRouter;
