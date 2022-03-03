/* eslint-disable */
const proxy = require('express-http-proxy');

const mockUrls = require('../mock-server/config/allMockUrls');
const proxyMiddleware = require('./proxyMiddleware');

const mockServer = process.env.MOCK_SERVER;

const proxyTarget = process.env.PROXY_TARGET;
const proxyRequests = /^\/(services|processor|msa|content)/;

function getMockServerUrl() {
  try {
    const { host, port } = require('../mock-server/settings.json');

    return `http://${host || 'localhost'}:${port}`;
  } catch (e) {
    throw new Error('mock-server env variable declared, but settings file not found');
  }
}

module.exports = function (app) {
  if (mockServer && mockUrls.length) {
    app.use(
      mockUrls,
      proxy(getMockServerUrl(), {
        proxyReqPathResolver: (req) => req.originalUrl,
      }),
    );
  }

  app.use(function (req, res, next) {
    if (req.url.match(proxyRequests)) {
      return proxyMiddleware(proxyTarget)(req, res, next);
    }

    return next();
  });
};
