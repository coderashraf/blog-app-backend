const blogs = require("./controller");
const latestTechBlogGet=(req, res) => {
  const techLatestBlog = blogs.filter(
    (blog) => blog.category === "Technology"
  ).splice(-1);
  res.send(techLatestBlog)
}
module.exports=latestTechBlogGet