module.exports = function responseTime(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
      if (!res.headersSent) {
        const duration = Date.now() - start;
        res.setHeader('X-Response-Time', duration);
        console.log(`${req.method} ${req.originalUrl} - ${duration}ms`);
      }
    });
    res.on('error', (err) => {
      console.error(`Error in ${req.method} ${req.originalUrl}: ${err.message}`);
    });
    next();
  };
  