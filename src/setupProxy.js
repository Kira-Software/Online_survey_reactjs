const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://survey-express-project.herokuapp.com",
      changeOrigin: true,
    })
  );
};