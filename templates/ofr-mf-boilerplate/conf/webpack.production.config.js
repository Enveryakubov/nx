import path from 'path';

import TerserPlugin from 'terser-webpack-plugin';
import Config from 'webpack-config';

const resolvePath = (filePath) => path.resolve(process.cwd(), filePath);

export default new Config().extend('conf/webpack.common.config.js').merge({
  mode: 'production',
  output: {
    path: resolvePath('dist'),
    publicPath: 'auto',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
        },
      }),
    ],
  },
  devtool: false,
});
