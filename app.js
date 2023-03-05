const express = require("express");
const cors = require("cors");
require("./config/db");

const userRouter = require("./routes/v1/user.route");
const galleryRouter = require("./routes/v1/gallery.route");
const productRouter = require("./routes/v1/product.route");
const carrierRouter = require("./routes/v1/carrier.route");
const businessRouter = require("./routes/v1/business.route");
const slideRouter = require("./routes/v1/slide.route");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/gallery", galleryRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/carrier", carrierRouter);
app.use("/api/v1/business", businessRouter);
app.use("/api/v1/slide", slideRouter);
// api/users/ : POST
// api/users : GET
// api/users/:id : GET
// api/users/:id : PATCH
// api/users/:id : DELETE

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;
