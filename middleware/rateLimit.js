// rateLimitMiddleware.js

const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit( 
    {  
        
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // limit each IP to 100 requests per windowMs
});

module.exports = rateLimiter;
