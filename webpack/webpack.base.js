const webpack = require("webpack");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const SimpleProgressPlugin = require("webpack-simple-progress-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { root, enviroments } = require("./webpack.js");
const production = process.env.NODE_ENV === "production";

const config = {
  watch: process.env.isLocal == "true"
};

config.devtool = "sourcemap";
config.stats = "none";

config.entry = [root("src/vendor.ts"), root("src/index.tsx")];

config.output = {
  path: root("dist"),
  filename: "js/[name].js",
  publicPath: "/",
  devtoolModuleFilenameTemplate: "[absolute-resource-path]",
  devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]"
};

config.resolve = {
  plugins: [new TsconfigPathsPlugin({})],
  alias: {
    img: root("src/public/img"),
    components: root("src/components"),
    pages: root("src/pages"),
    styles: root("src/styles")
  },
  modules: ["node_modules", root("src/styles")],
  extensions: [
    ".ts",
    ".css",
    ".scss",
    ".tsx",
    ".js",
    ".json",
    ".png",
    ".svg",
    ".jpg",
    ".*"
  ]
};

config.module = {};

config.module.rules = [
  {
    test: /\.(ts|tsx)$/,
    use: ["awesome-typescript-loader"],
    use: ["ts-loader"],
    include: root("src"),
    exclude: /node_modules/
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]"
        }
      },
      {
        loader: "image-webpack-loader",
        options: {
          pngquant: {
            quality: "90",
            speed: 4
          },
          mozjpeg: {
            progressive: true,
            quality: 70
          },
          svgo: {}
        }
      }
    ]
  },
  {
    test: /\.(woff|woff2|otf|eot|ico|ttf)(\?[a-z0-9=.]+)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      }
    ]
  },
  {
    test: /(\.css|\.scss)/,
    exclude: /node_modules/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          minimize: production,
          hmr: !production
        }
      },
      {
        loader: "css-loader",
        options: {
          modules: true,
          camelCase: true,
          localIdentName: "[local]___[hash:base64:5]"
        }
      },
      "postcss-loader",
      "sass-loader"
    ]
  }
];

config.plugins = [
  new HtmlWebpackPlugin({
    template: root("src/public/index.html"),
    filename: "index.html",
    inject: true,
    minify: production && {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru|en/),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new FriendlyErrorsWebpackPlugin(),
  new SimpleProgressPlugin({
    progressOptions: {
      clear: true
    }
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  }),
  new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
  new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
    allowAsyncCycles: false
  })
];

module.exports = config;
