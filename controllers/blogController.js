const blogs = require("./controller");
const blogGet=(req, res) => {
  if(req.params.id){
      const reqBlog=blogs.filter(item=>item.id===Number(req.params.id)) 
      //filtering 3 blogs from same category other than the requested blog
      const extraBlogs=blogs.filter(item=>reqBlog[0].category===item.category).filter(item=>item.id!==Number(req.params.id)).reverse().filter((item, index) => index < 3);
      const blog=[...reqBlog,...extraBlogs]
      res.send(blog)
  }
  else 
  if(req.query.category==="technology"){
    const techLatestBlog = blogs.filter(
        (blog) => blog.category === "Technology"
      ).splice(-1);
      console.log(1);
    res.send(techLatestBlog)
  }
}

module.exports=blogGet;