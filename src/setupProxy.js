const proxy = require('http-proxy-middleware');

const config = {
  context: ['/api', '/uploads'],
  options: {
    changeOrigin: true,
    secure: false,
    ws: true,
    target: 'http://82.202.198.194'
  }
};

module.exports = Object.assign(
  app => {
    app.use(proxy(config.context, config.options));
  },
  {config}
);
