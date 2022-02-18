const blogs = require("./controller");
const blogsGet=(req,res)=>{
  if(req.params.category){
    const categorizedBlogs=blogs.filter(item=>item.category===req.params.category).reverse()
    res.send(categorizedBlogs)
  }
}
module.exports=blogsGet
