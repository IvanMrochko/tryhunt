const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.dev");
const { root, enviroments } = require("./webpack.js");

const entry = [...config.entry];

config.entry = [];

module.exports = merge(config, {
  entry: [
    `webpack-dev-server/client?http://localhost:${enviroments.port}`
  ].concat(entry),

  devServer: {
    inline: true,
    quiet: true,
    hot: true,
    historyApiFallback: true,
    host: "localhost",
    port: enviroments.port,
    contentBase: root("dist"),
    publicPath: "/"
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
