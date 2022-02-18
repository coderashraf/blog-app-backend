const express = require("express");
const blogsGet = require("../controllers/blogsController");
const subrouter = express.Router();

subrouter.get(blogsGet.blogsGet);

module.exports = subrouter;
