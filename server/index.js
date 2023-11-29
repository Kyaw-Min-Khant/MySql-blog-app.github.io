const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const auth = require("./Route/auth");
const blog = require("./Route/blog");

const corsOption = {
  origin: "http://localhost:5173",
  Credentials: true,
};
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/blog", blog);
app.use("/auth", auth);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Running");
});
