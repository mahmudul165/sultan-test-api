// const compression = require('compression');
// const express = require("express");
// const cors = require("cors");
// require("./config/db");
 
// const userRouter = require("./routes/v1/user.route");
// const galleryRouter = require("./routes/v1/gallery.route");
// const productRouter = require("./routes/v1/product.route");
// const carrierRouter = require("./routes/v1/carrier.route");
// const businessRouter = require("./routes/v1/business.route");
// const slideRouter = require("./routes/v1/slide.route");
// const superAdminRouter = require("./routes/v1/admin.route");
// const logoutRouter = require("./routes/v1/logout.route");

// const app = express();
// // Use the compression middleware
// app.use(compression());
// // import the responseTime middleware function
// const responseTime = require('././middleware/responseTime');
// // use the responseTime middleware function for all routes
// app.use(responseTime);
// // 
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

 




// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/gallery", galleryRouter);
// app.use("/api/v1/product", productRouter);
// app.use("/api/v1/carrier", carrierRouter);
// app.use("/api/v1/business", businessRouter);
// app.use("/api/v1/slide", slideRouter);
// app.use("/api/v1/login", superAdminRouter);
// app.use("/api/v1/logout", logoutRouter);





   
 
// // api/users/ : POST
// // api/users : GET
// // api/users/:id : GET
// // api/users/:id : PATCH
// // api/users/:id : DELETE

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/./views/index.html");
// });

// // route not found error
// app.use((req, res, next) => {
//   res.status(404).json({
//     message: "route not found",
//   });
// });

// //handling server error
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     message: "something broke",
//   });
// });

// module.exports = app;



 
const express = require("express");
const compression = require('compression');
const cors = require("cors");
const helmet = require('helmet');
const bodyParser = require('body-parser');



require("./config/db");


const app = express();

// Use the compression middleware
app.use(function(req, res, next) {
  if (!res.headersSent) {
    console.log('compression working')
    compression({level:6,threshold:100*1000})(req, res, next);
  } else {
    next();
  }
});
 
// app.use(express.json());
 
const userRouter = require("./routes/v1/user.route");
const galleryRouter = require("./routes/v1/gallery.route");
const productRouter = require("./routes/v1/product.route");
const pressRouter = require("./routes/v1/press.route");
const carrierRouter = require("./routes/v1/carrier.route");
const businessRouter = require("./routes/v1/business.route");
const brandRouter = require("./routes/v1/brand.route");
const slideRouter = require("./routes/v1/slide.route");
const orderRouter = require("./routes/v1/order.route");
const contactRouter = require("./routes/v1/contact.router");

 
const superAdminRouter = require("./routes/v1/admin.route");
const logoutRouter = require("./routes/v1/logout.route");

 
// Use helmet middleware for security
app.use(helmet());
 
// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 
// this middleware show error that why commentout
// import the responseTime middleware function
const responseTime = require('./middleware/responseTime');
// use the responseTime middleware function for all routes
app.use(responseTime);

// 
const rateLimiter = require('./middleware/rateLimit');
// apply the rate limiter middleware function to all requests

 
app.use(cors());

app.use(rateLimiter);

const cacheMiddleware = require('././middleware/cacheMiddleware');
//  Use the cache middleware for all requests
//need to adjust fronend useQuery parameter
    // app.use(cacheMiddleware);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/gallery", galleryRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/press", pressRouter);
app.use("/api/v1/carrier", carrierRouter);
app.use("/api/v1/business", businessRouter);
app.use("/api/v1/brand", brandRouter);
app.use("/api/v1/slide", slideRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/login", superAdminRouter);
app.use("/api/v1/logout", logoutRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// route not found error
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Something broke",
  });
});

module.exports = app;
