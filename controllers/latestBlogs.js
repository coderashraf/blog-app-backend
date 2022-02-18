const blogs= require("./controller")

const latestBlogsGet=(req,res)=>{
  const latest = blogs.filter(
    (blog, index) => index < blogs.length && index > blogs.length - 4
  );
  res.send(latest)
}

module.exports=latestBlogsGet