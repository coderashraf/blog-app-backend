const express=require("express")
const blogController=require("../controllers/blogController")
const router=express.Router();

router.get("/:id", blogController.blogGet)

module.exports=router;