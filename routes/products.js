

const express=require("express");
const router=express.Router();

const { getUser, getItem } = require("../controllers/products");

router.route("/").get(getUser);
router.route("/item").get(getItem);

module.exports=router;