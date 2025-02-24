const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    background: "./src/scripts/background.ts",
    content: "./src/scripts/content.ts",
    popup: "./src/scripts/popup.ts",
    styles: "./src/styles/styles.scss"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.css" }), // Extracted CSS file
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "." },
        { from: "src/popup.html", to: "." }
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
