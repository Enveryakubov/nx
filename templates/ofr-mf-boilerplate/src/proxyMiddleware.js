/* eslint-disable */
const url = require('url');

const proxy = require('express-http-proxy');

const proxyMiddleware = (target) =>
  proxy(target, {
    limit: '50mb',
    proxyReqPathResolver(req) {
      return url.parse(req.url).path;
    },
    // патчим refferer чтобы не приходилось править настройки безопасности на томкате
    proxyReqOptDecorator(proxyReqOpts) {
      if (proxyReqOpts.headers.referer) {
        proxyReqOpts.headers.referer = proxyReqOpts.headers.referer.replace(/https?:\/\/.*?(:\d+)?\//, `${target}/`);
      }
      proxyReqOpts.headers.origin = target;
      // при проксировании могу возникнуть ошибки из-за самоподписанного серта, с этой опцией можно обойти эту проблему
      // proxyReqOpts.rejectUnauthorized = false;
      return proxyReqOpts;
    },
    // Удаление признака Secure у cookie если проксируем до https
    userResHeaderDecorator(headers) {
      if (headers['set-cookie']) {
        headers['set-cookie'] = headers['set-cookie'].map((cookie) =>
          cookie
            .split(';')
            .filter((part) => !part.includes('Secure') && !part.includes('SameSite') && !part.includes('Domain'))
            .join('; '),
        );
      }

      return headers;
    },
  });

module.exports = proxyMiddleware;
