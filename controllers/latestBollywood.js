const blogsData= require("./controller")

const latestBollywoodGet=(req,res)=>{
  const tempBlogs = blogsData.filter((blog) => blog.category === "Bollywood");
  const blogs = tempBlogs
    .filter(
      (blog, index) => index < tempBlogs.length && index > tempBlogs.length - 5
    )
    .reverse();
  res.send(blogs)
}

module.exports=latestBollywoodGet