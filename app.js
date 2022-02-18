const express = require("express");
const cors = require("cors");
const routerFile = require("./routes");

const app = express();
app.use(cors());
app.use("/api", routerFile);
app.listen(8000, () => {
  console.log("Application has started running successfully at port 8000");
});
