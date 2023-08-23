const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const auth = require("./Route/auth");
const blog = require("./Route/blog");
const { verifyToken, verifyUser } = require("./Route/middleware.js"); // Import your custom middleware

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:5176",
  ],
  Credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors(corsOptions));
app.use("/blog", blog);
app.use("/auth", auth);

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
