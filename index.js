const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./route/route");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")))
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use("/", routes);
mongoose.connect("mongodb+srv://titdor:simpdor123@cluster0.l1fktor.mongodb.net/?retryWrites=true&w=majority");
app.listen(3001);