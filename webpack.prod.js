import { merge } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import commonConfig from "./webpack.common.js";

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};

export default merge(commonConfig, prodConfig);
