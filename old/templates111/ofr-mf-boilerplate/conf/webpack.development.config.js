/* eslint-disable */
import fs from 'fs';
import path from 'path';

import webpack from 'webpack';
import Config from 'webpack-config';

const resolvePath = (filePath) => path.resolve(process.cwd(), filePath);


const getClientEnvironment = require('./env');

const env = getClientEnvironment('/');

const APP_PORT = env.raw.APP_PORT ?? Number("__port__");
const HTTP = 'http';
const HTTPS = 'https';
const LOCALHOST = env.raw.APP_HOST ?? 'localhost';

const getProtocol = () => {
  return process.env.HTTPS === 'true' ? HTTPS : HTTP;
};

const getUrl = () => {
  const PORT = process.env.PORT || APP_PORT;
  const url = `${getProtocol()}://${process.env.PAGE_ALIAS || LOCALHOST}:${PORT}`;
  console.log('url=', url);
  return url;
};

const getPort = () => process.env.PORT || APP_PORT;

const getHttps = () => {
  const useHttps = getProtocol() === HTTPS;
  const result = useHttps
    ? {
      key: resolvePath(process.env.SSL_KEY_FILE),
      cert: resolvePath(process.env.SSL_CRT_FILE),
    }
    : false;

  console.log('https = ', useHttps, result);
  return result;
};

export default new Config().extend('conf/webpack.common.config.js').merge({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: resolvePath('dist'),
    port: getPort(),
    // open: getUrl(),
    open: false,
    liveReload: true,
    hot: true,
    allowedHosts: 'all',
    https: getHttps(),
    // onBeforeSetupMiddleware(devServer) {
    //   const setupProxyPath = resolvePath('src/setupProxy.js');
    //   if (fs.existsSync(setupProxyPath)) {
    //     // eslint-disable-next-line import/no-dynamic-require
    //     require(setupProxyPath)(devServer.app);
    //   }
    // },
    historyApiFallback: {
      disableDotRule: true,
      index: '/',
    },

    client: {
      overlay: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  output: {
    publicPath: 'auto',
    filename: '[name].js',
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },

  target: 'browserslist',

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
