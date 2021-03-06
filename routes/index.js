const express = require("express");
const blogsController=require("../controllers/blogsController")
const blogController=require("../controllers/blogController")
const topBlogsController=require("../controllers/topBlogsController");
const latestBlogsGet = require("../controllers/latestBlogs");
const latestBollywoodGet=require("../controllers/latestBollywood");
const latestHollywoodGet = require("../controllers/latestHollywood");
const latestTechBlogGet = require("../controllers/latestTechBlog");
const router = express.Router();

router.get("/blog/:id",blogController);
router.get("/category/:category",blogsController);
router.get("/top-posts",topBlogsController)
router.get("/latest-blogs",latestBlogsGet)
router.get("/latest-bollywood",latestBollywoodGet)
router.get("/latest-hollywood",latestHollywoodGet)
router.get("/latestTechBlog",latestTechBlogGet);

module.exports = router;
