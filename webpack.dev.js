import { merge } from "webpack-merge";
import commonConfig from "./webpack.common.js";

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};

export default merge(commonConfig, devConfig);
