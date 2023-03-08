// cacheMiddleware.js


// const redis = require('redis');
// const client = redis.createClient({host: 'localhost', port: 6379});

// // Error handling for Redis client
// client.on('error', (err) => {
//   console.error('Redis error:', err);
// });

// // Cache middleware for Express
// const cacheMiddleware = (req, res, next) => {
//   const cacheKey = req.url;

//   // Check Redis cache for existing response
//   client.get(cacheKey, (err, cacheData) => {
//     if (err) {
//       console.error('Redis cache error:', err);
//       next();
//     } else if (cacheData) {
//       const response = JSON.parse(cacheData);
//       res.json(response);
//     } else {
//       // Store original res.send function for later use
//       const originalSend = res.send;

//       // Override res.send function to intercept response data
//       res.send = (body) => {
//         // Restore original res.send function
//         res.send = originalSend;

//         // Store response data in Redis cache
//         const cacheData = JSON.stringify(body);
//         client.setex(cacheKey, 3600, cacheData); // 1 hour TTL
//         res.send(body);
//       };

//       // Pass control to next middleware or route handler
//       next();
//     }
//   });
// };

// module.exports = cacheMiddleware;














// const redis = require("redis");
// const redis_url = process.env.REDIS_URL || null;
// const client = redis.createClient(redis_url);


// module.exports = {
//   getCached: (req, res, next) => {
//     const { redis_key } = req.headers
//     client.get(redis_key, function(err, reply) {
//       if (err) {
//         res.status(500).json({
//           message: "Somethin Went Wrong"
//         })
//       }
//       if (reply == null) {
//         next()
//       } else {
//         res.status(200).json({
//           message: `Success Read ${redis_key}`,
//           data: JSON.parse(reply)
//         })
//       }
//     });
//   },
//   caching: (key, data) => {
//     client.set(key, JSON.stringify(data) )
//   },
//   delCache: (key) => {
//     client.del(key)
//   }
// }













const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl || req.url;
  const cachedData = cache.get(key);
  if (cachedData) {
    console.log('Serving from cache...');
    res.json(cachedData);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache.set(key, body);
      res.sendResponse(body);
    };
    next();
  }
};

module.exports = cacheMiddleware;

