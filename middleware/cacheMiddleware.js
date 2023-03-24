
// const NodeCache = require('node-cache');

// const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

// const cacheMiddleware = (req, res, next) => {
//   const key = req.originalUrl || req.url;
//   const cachedData = cache.get(key);
//   if (cachedData) {
//     console.log('Serving from cache...');
//     res.json(cachedData);
//   } else {
//     res.sendResponse = res.send;
//     res.send = (body) => {
//       cache.set(key, body);
//       res.sendResponse(body);
//     };
//     next();
//   }
// };

// module.exports = cacheMiddleware;

const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 30, checkperiod: 240 });

const cacheMiddleware = (req, res, next) => {
  try {
    const key = req.originalUrl || req.url;
    const cachedData = cache.get(key);
    if (cachedData) {
      console.log('Serving from cache...');
      res.setHeader('Cache-Control', 'public, max-age=300');
      const data = JSON.parse(cachedData);
      res.json( data);
      
    } else {
      console.log('new request for get data...');
      res.sendResponse = res.send;
      res.send = (body) => {
        cache.set(key, body);
        res.setHeader('Cache-Control', 'public, max-age=300');
        res.sendResponse(body);
      };
      next();
    }
  } catch (error) {
    console.error('Cache middleware error:', error);
    next();
  }
};

module.exports = cacheMiddleware;
