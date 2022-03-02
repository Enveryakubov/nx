/* eslint-disable */
import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import Config from 'webpack-config';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

import pathApp from './pathApp';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenvResult = require('dotenv-flow').config();
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const deps = require('../package.json').dependencies;

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const publicUrl = process.env.PUBLIC_URL;
const apiUrl = process.env.API_URL;

const resolvePath = (filePath) => path.resolve(process.cwd(), filePath);

const name = '__name__';

const moduleFederationPlugin =
  isDev || isProd
    ? [
      new ModuleFederationPlugin({
        name: name,
        library: { type: 'var', name: name },
        filename: 'remoteEntry.js',
        exposes: {
          './Applications': resolvePath('src/features/applications/ui/Applications/Applications.tsx'),
          // './Summary': resolvePath('src/exposes/Summary'),
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
          '@ofr/ui-kit': { singleton: true },
          'react-router-dom': { singleton: true },
          'react-redux': { singleton: true },
        },
      }),
    ]
    : [];

export default new Config().merge({
  entry: [resolvePath('src/polyfills.ts'), resolvePath('src')],
  output: {
    uniqueName: name,
    path: resolvePath('dist'),
    filename: 'static/js/[name].bundle.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.json'],
    alias: pathApp.alias,
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000', 10),
              },
            },
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  prettier: false,
                  svgo: true,
                  svgoConfig: {
                    plugins: [{ removeViewBox: false }],
                  },
                  titleProp: true,
                  ref: true,
                },
              },
              {
                loader: 'file-loader',
                options: {
                  name: 'static/[name].[hash].[ext]',
                },
              },
            ],
            issuer: {
              and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
          },
          {
            test: /\.(ts|js)x?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              compact: !isDev,
            },
          },
          {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: [
              {
                loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
              },
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: {
                    compileType: 'icss',
                  },
                },
              },
            ],
            sideEffects: true,
          },
          {
            test: /\.(s*)css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: isDev,
                  modules: {
                    // getLocalIdent: getCSSModuleLocalIdent,
                    exportLocalsConvention: 'camelCase',
                  },
                },
              },
              'sass-loader',
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: [
                    resolvePath(`src/assets/styles/_utils.scss`),
                    resolvePath(`src/assets/styles/_variables.scss`),
                  ],
                },
              },
            ],
            include: /\.module\.(s*)css$/,
          },
          {
            test: /\.(s*)css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: [
                    resolvePath(`src/assets/styles/_utils.scss`),
                    resolvePath(`src/assets/styles/_variables.scss`),
                  ],
                },
              },
            ],
            exclude: /\.module\.(s*)css$/,
          },
          {
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            type: 'asset/resource',
          },
        ],
      },
    ],
  },

  devtool: isProd
    ? /* shouldUseSourceMap
    ? 'source-map'
    : */ false
    : isDev && 'cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(publicUrl),
      'process.env.API_URL': JSON.stringify(apiUrl),
      'process.env': JSON.stringify(dotenvResult.parsed),
    }),
    ...moduleFederationPlugin,
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolvePath('src/index.html'),
      publicPath: '/',
    }),
    new CleanWebpackPlugin({
      path: '/dist',
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: `${publicUrl}/`,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter((fileName) => !fileName.endsWith('.map'));

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
  ],
  performance: false,
});
