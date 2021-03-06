/*
TODO:
- implement dev server
- add css loaders
- encapsulate shared config props to new file
*/
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: [/\.ts(x)?$/],
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    host: "localhost",
    port: 8080,
    hot: false
  },

  target: "web",
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ]
};
