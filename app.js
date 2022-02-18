const express = require("express");
const cors = require("cors");
const routerFile = require("./routes");

const app = express();

let port =process.env.PORT||8000;

app.use(cors());
app.use("/api", routerFile);
app.listen(port, () => {
  console.log("Application has started running successfully at port 8000");
});
