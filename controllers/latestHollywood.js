const blogs= require("./controller")

const latestHollywoodGet=(req,res)=>{
  const hollywoodBlogs = blogs.filter((blog) => blog.category === "Hollywood");
  const latest = hollywoodBlogs.filter(
    (blog, index) =>
      index < hollywoodBlogs.length && index > hollywoodBlogs.length - 4
  );
  res.send(latest)
}

module.exports=latestHollywoodGet