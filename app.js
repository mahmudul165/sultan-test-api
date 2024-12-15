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
const officesRouter = require("./routes/v1/offices.route");
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
app.use("/api/v1/offices", officesRouter);
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





// const express = require("express");
// const compression = require("compression");
// const cors = require("cors");
// const helmet = require("helmet");
// const bodyParser = require("body-parser");
// const http = require("http");
// const https = require("https");
// const fs = require("fs");

// // Import database configuration
// require("./config/db");

// HTTPS server setup with SSL options
// const sslOptions = {
//   key: fs.readFileSync("/etc/ssl/private/your-ssl-key.key"),  // Path to your SSL private key
//   cert: fs.readFileSync("/etc/ssl/certs/your-ssl-certificate.crt"),  // Path to your SSL certificate
//   ca: fs.readFileSync("/etc/ssl/certs/your-ssl-ca-bundle.crt"),  // Path to your CA bundle if applicable
// };

// const app = express();

// // Use compression middleware for performance optimization
// app.use(compression({ level: 6, threshold: 100 * 1000 }));

// // Import your routes
// const userRouter = require("./routes/v1/user.route");
// const galleryRouter = require("./routes/v1/gallery.route");
// const productRouter = require("./routes/v1/product.route");
// const pressRouter = require("./routes/v1/press.route");
// const carrierRouter = require("./routes/v1/carrier.route");
// const businessRouter = require("./routes/v1/business.route");
// const officesRouter = require("./routes/v1/offices.route");
// const brandRouter = require("./routes/v1/brand.route");
// const slideRouter = require("./routes/v1/slide.route");
// const orderRouter = require("./routes/v1/order.route");
// const contactRouter = require("./routes/v1/contact.router");

// const superAdminRouter = require("./routes/v1/admin.route");
// const logoutRouter = require("./routes/v1/logout.route");

// // Use helmet for security headers
// app.use(helmet());

// // Body parser middleware to handle incoming requests
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Custom response time middleware
// const responseTime = require("./middleware/responseTime");
// app.use(responseTime);

// // Rate limiting middleware for security
// const rateLimiter = require("./middleware/rateLimit");
// app.use(rateLimiter);

// // CORS configuration - Allow specific domains
// const corsOptions = {
//   origin: [
//     'https://www.sultantea.com.bd', 
//     'https://www.greenfieldteaindustries.com.bd',
//     'http://localhost:3000'
//   ],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
//   credentials: true  // Allow cookies and authorization headers
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // Cache middleware (Optional, uncomment if needed)
// const cacheMiddleware = require("./middleware/cacheMiddleware");
// // app.use(cacheMiddleware);

// // Set up routes for the application
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/gallery", galleryRouter);
// app.use("/api/v1/product", productRouter);
// app.use("/api/v1/press", pressRouter);
// app.use("/api/v1/carrier", carrierRouter);
// app.use("/api/v1/business", businessRouter);
// app.use("/api/v1/offices", officesRouter);
// app.use("/api/v1/brand", brandRouter);
// app.use("/api/v1/slide", slideRouter);
// app.use("/api/v1/order", orderRouter);
// app.use("/api/v1/contact", contactRouter);
// app.use("/api/v1/login", superAdminRouter);
// app.use("/api/v1/logout", logoutRouter);

// // Home route
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

// // Redirect HTTP to HTTPS (Port 80 -> Port 443)
// http.createServer((req, res) => {
//   res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
//   res.end();
// }).listen(80, () => {
//   console.log("HTTP server running on port 80 and redirecting to HTTPS");
// });

// // Error handling for route not found (404)
// app.use((req, res, next) => {
//   const error = new Error("Route not found");
//   error.status = 404;
//   next(error);
// });

// // General error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     message: err.message || "Something broke",
//   });
// });

// // Create HTTPS server and listen on port 443
// https.createServer(sslOptions, app).listen(443, () => {
//   console.log("HTTPS server running on port 443");
// });

// module.exports = app;
