const blogs = require("./controller");
const topBlogsGet=(req,res)=>{

  const sorted = blogs.map((a) => {
    return { ...a };
  });
  sorted.sort(function (a, b) {
    return b.claps - a.claps;
  })
  const posts=sorted.filter((item, index) => index < 4)
  res.send(posts)
}

module.exports=topBlogsGet