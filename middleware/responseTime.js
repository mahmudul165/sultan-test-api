

module.exports = function responseTime(req, res, next) {
    const start = process.hrtime();
  
    res.once('finish', () => {
      const duration = process.hrtime(start);
      const durationMs = duration[0] * 1000 + duration[1] / 1000000;  
    //   res.setHeader('X-Response-Time', `${durationMs.toFixed(3)}ms`);
      console.log(`${req.method} ${req.originalUrl} - ${durationMs.toFixed(3)}ms`);
    });
  
    res.once('error', (err) => {
      console.error(`Error in ${req.method} ${req.originalUrl}: ${err.message}`);
      next(err);
    });
  
    next();
  };
  