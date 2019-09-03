const config = require("./webpack.base");
const merge = require("webpack-merge");

const Visualizer = require("webpack-visualizer-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

/**
 * Prod configuration
 */
module.exports = merge(config, {
  devtool: false,
  mode: "production",
  optimization: {
    splitChunks: {
      name: "vendor",
      minChunks: 1
    },
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Visualizer()
  ]
});
