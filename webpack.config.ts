import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

const webpackConfig = () => ({
  entry: './src/index.tsx',
  ...(process.env.production || !process.env.development ? {} : { devtool: 'eval-source-map' }),

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /build/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new DefinePlugin({
      'process.env': process.env.production || !process.env.development,
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/assets', to: 'assets' }],
    }),
  ],
});

export default webpackConfig;
