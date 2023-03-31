const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/data',
    createProxyMiddleware({
      target: 'http://lam-env.eba-maqqqnxm.us-west-1.elasticbeanstalk.com/',
      changeOrigin: true,
    })
  );
};